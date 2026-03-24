import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Spinner, Alert, ButtonGroup, Button } from 'react-bootstrap';
import PetCard from './PetCard';
import petApi from '../api/petApi';
import './PetList.css';

const PetList = ({ refreshTrigger, onEdit }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const fetchPets = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      let data;
      if (filter === 'available') {
        data = await petApi.getAvailablePets();
      } else if (filter === 'adopted') {
        data = await petApi.getAdoptedPets();
      } else {
        data = await petApi.getAllPets();
      }
      setPets(data);
    } catch (err) {
      setError('Failed to load pets. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchPets();
  }, [refreshTrigger, filter, fetchPets]);

  // ✅ FRONTEND COUNT (BEST WAY)
  const availableCount = pets.filter(p => !p.adopted).length;
  const adoptedCount = pets.filter(p => p.adopted).length;

  const handleAdopt = async (petId) => {
    try {
      await petApi.adoptPet(petId);
      alert('Pet adopted successfully! 🎉');
      fetchPets();
    } catch (err) {
      alert(`Failed to adopt pet: ${err.message || 'Unknown error'}`);
    }
  };

  const handleDelete = async (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      try {
        await petApi.deletePet(petId);
        alert('Pet deleted successfully! ✅');
        fetchPets();
      } catch (err) {
        alert(`Failed to delete pet: ${err.message || 'Unknown error'}`);
      }
    }
  };

  const handleEdit = (pet) => {
    onEdit(pet);
  };

  return (
    <div className="pet-list-container">
      <Container>
        <div className="list-header">
          <h2>🐾 Pet Adoption Center</h2>

          {/* ✅ COUNT DISPLAY */}
          <h4 style={{ color: "green" }}>
            Available: {availableCount} | Adopted: {adoptedCount}
          </h4>

          <div className="filter-buttons">
            <ButtonGroup>
              <Button 
                variant={filter === 'all' ? 'primary' : 'outline-primary'}
                onClick={() => setFilter('all')}
                className="filter-btn"
              >
                All Pets ({pets.length})
              </Button>

              <Button 
                variant={filter === 'available' ? 'warning' : 'outline-warning'}
                onClick={() => setFilter('available')}
                className="filter-btn"
              >
                Available ({availableCount})
              </Button>

              <Button 
                variant={filter === 'adopted' ? 'success' : 'outline-success'}
                onClick={() => setFilter('adopted')}
                className="filter-btn"
              >
                Adopted ({adoptedCount})
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        {loading ? (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
            <p>Loading pets...</p>
          </div>
        ) : pets.length === 0 ? (
          <Alert variant="info" className="mt-3">
            No pets found. Start by adding a new pet! 🐶
          </Alert>
        ) : (
          <Row className="pet-grid">
            {pets.map(pet => (
              <Col key={pet.id} lg={4} md={6} sm={12} className="pet-col">
                <PetCard 
                  pet={pet} 
                  onAdopt={handleAdopt}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default PetList;