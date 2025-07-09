import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';
import { UserCardSkeleton } from '../components/UserCardSkeleton';
import { ErrorMessage } from '../components/ErrorMessage';
import { Users } from 'lucide-react';

export const UserList: React.FC = () => {
  const navigate = useNavigate();
  const { users, loading, error, fetchUsers } = useUsers();

  const handleDetailsClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  const handleRetry = () => {
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Discover and connect with users in our community
          </p>
        </div>

        {error && (
          <div className="mb-8">
            <ErrorMessage message={error} onRetry={handleRetry} />
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <UserCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onDetailsClick={handleDetailsClick}
              />
            ))}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No users found</h3>
            <p className="text-gray-500">There are no users to display at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};