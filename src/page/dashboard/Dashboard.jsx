import useAuth from '@/hooks/useAuth';
import React from 'react';
import AdminDashboard from './AdminDashboard';
import OwnerDashboard from './OwnerDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
  // const {user, role} = useAuth();
  const role = 'admin'

    return (
        <div>

      {
        role === 'admin' && <AdminDashboard></AdminDashboard>
      }
      {
        role === 'owner' && <OwnerDashboard></OwnerDashboard>
      }
      {
        role === 'user' && <UserDashboard></UserDashboard>
      }
        </div>
    );
};

export default Dashboard;