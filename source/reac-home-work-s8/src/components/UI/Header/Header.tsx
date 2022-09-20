import React, { useContext, useEffect } from 'react';
import './Header.css';
import Button from '../Button/Button';
import myContext from '../../Store/context';
import { logout } from '../../Store/action';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(myContext);
  const { isAuthenticate } = state;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className='header'>
      {isAuthenticate && <Button onClick={handleLogout}>Logout</Button>}
    </div>
  );
};

export default Header;