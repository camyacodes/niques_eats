import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';


const Profile = () => {

  const { data, loading, error } = useQuery(QUERY_USERS);

  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(QUERY_USER, {
  //   variables: { username: userParam }
  // });

  // const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) return <pre>{error.message}</pre>

  return (
   
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
        {/* Viewing {user.username}'s profile. */}
        <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
        </h2>
      </div>
   
  );
};

export default Profile;
