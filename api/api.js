import axiosInstance from './axiosInstance';

// Fetch all guests
export const fetchAllGuests = async () => {
  try {
    const response = await axiosInstance.get('/guests');
    return response.data;
  } catch (error) {
    console.error('Error fetching guests:', error);
    throw error;
  }
};

// Fetch a single guest by ID
export const fetchGuestById = async (id) => {
  try {
    const response = await axiosInstance.get(`/guests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching guest with ID ${id}:`, error);
    throw error;
  }
};

// Create a new guest
export const createGuest = async (guestData) => {
  try {
    const response = await axiosInstance.post('/guests', guestData);
    return response.data;
  } catch (error) {
    console.error('Error creating guest:', error);
    throw error;
  }
};

// Update guest by ID
export const updateGuest = async (id, guestData) => {
  try {
    const response = await axiosInstance.put(`/guests/${id}`, guestData);
    return response.data;
  } catch (error) {
    console.error(`Error updating guest with ID ${id}:`, error);
    throw error;
  }
};

// Delete guest by ID
export const deleteGuest = async (id) => {
  try {
    const response = await axiosInstance.delete(`/guests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting guest with ID ${id}:`, error);
    throw error;
  }
};

// Send invitation to guest
export const sendInvitation = async (id) => {
  try {
    const response = await axiosInstance.post(`/guests/send_invitation/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error sending invitation to guest with ID ${id}:`, error);
    throw error;
  }
};

