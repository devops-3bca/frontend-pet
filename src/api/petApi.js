import axios from 'axios';

const API_BASE_URL = 'https://backend-pet-edhd.onrender.com/api/pets';
const petApi = {
  getAllPets: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw error;
    }
  },

  getAvailablePets: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/available`);
      return response.data;
    } catch (error) {
      console.error('Error fetching available pets:', error);
      throw error;
    }
  },

  getAdoptedPets: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/adopted`);
      return response.data;
    } catch (error) {
      console.error('Error fetching adopted pets:', error);
      throw error;
    }
  },

  getPetById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pet:', error);
      throw error;
    }
  },

  addPet: async (petData) => {
    try {
      const response = await axios.post(API_BASE_URL, petData);
      return response.data;
    } catch (error) {
      console.error('Error adding pet:', error);
      throw error;
    }
  },

  adoptPet: async (id) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}/adopt`);
      return response.data;
    } catch (error) {
      console.error('Error adopting pet:', error);
      throw error;
    }
  },

  deletePet: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.status === 204 || response.status === 200;
    } catch (error) {
      console.error('Error deleting pet:', error);
      throw error;
    }
  },

  updatePet: async (id, petData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, petData);
      return response.data;
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  }
};

export default petApi;
