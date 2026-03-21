// src/api/petApi.js
import axios from 'axios';

// Use environment variable for backend URL
const API_BASE_URL = 'https://backend-pet-edhd.onrender.com/api/pets';
const petApi = {
  // Get all pets
  getAllPets: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching all pets:', error.message);
      throw error;
    }
  },

  // Get only available pets
  getAvailablePets: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/available`);
      return response.data;
    } catch (error) {
      console.error('Error fetching available pets:', error.message);
      throw error;
    }
  },

  // Get adopted pets
  getAdoptedPets: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/adopted`);
      return response.data;
    } catch (error) {
      console.error('Error fetching adopted pets:', error.message);
      throw error;
    }
  },

  // Get pet by ID
  getPetById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching pet with id ${id}:`, error.message);
      throw error;
    }
  },

  // Add a new pet
  addPet: async (petData) => {
    try {
      const response = await axios.post(API_BASE_URL, petData);
      return response.data;
    } catch (error) {
      console.error('Error adding pet:', error.message);
      throw error;
    }
  },

  // Adopt a pet
  adoptPet: async (id) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}/adopt`);
      return response.data;
    } catch (error) {
      console.error(`Error adopting pet with id ${id}:`, error.message);
      throw error;
    }
  },

  // Delete a pet
  deletePet: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.status === 204 || response.status === 200;
    } catch (error) {
      console.error(`Error deleting pet with id ${id}:`, error.message);
      throw error;
    }
  },

  // Update a pet
  updatePet: async (id, petData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, petData);
      return response.data;
    } catch (error) {
      console.error(`Error updating pet with id ${id}:`, error.message);
      throw error;
    }
  },
};

export default petApi;