import { Link, Outlet } from 'react-router';

const Profile = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Profile Page</h1>
      <div>
       
        <Link to={"" } style={{ margin: '10px', fontSize: '20px' }}>Edit Profile</Link>
        <Link to={"setting"} style={{ margin: '20px', fontSize: '20px' }}>View Settings</Link>
        <Link to={"changes"} style={{ margin: '30px', fontSize: '20px' }}>Changes</Link>
      </div>
    <Outlet />
    </div>
  );
};

export default Profile;
