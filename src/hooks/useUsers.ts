import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { apiService } from '../services/api';

export const useUsers = () => {
  const { state, dispatch } = useUserContext();

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_USERS_START' });
    try {
      const users = await apiService.getUsers();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_USERS_ERROR', 
        payload: error instanceof Error ? error.message : 'An error occurred' 
      });
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  useEffect(() => {
    if (state.users.length === 0 && !state.loading) {
      fetchUsers();
    }
  }, []);

  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
    fetchUsers,
    clearError,
  };
};