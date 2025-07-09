import React from 'react';
import { User } from '../types/User';
import { Mail, Phone, Globe, MapPin, Building, ArrowRight } from 'lucide-react';

interface UserCardProps {
  user: User;
  onDetailsClick: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onDetailsClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {user.name.charAt(0)}
            </span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            @{user.username}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{user.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            {user.email}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Phone className="h-4 w-4 mr-2 text-gray-400" />
            {user.phone}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {user.address.city}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Building className="h-4 w-4 mr-2 text-gray-400" />
            {user.company.name}
          </div>
        </div>

        <button
          onClick={() => onDetailsClick(user.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-blue-700"
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};