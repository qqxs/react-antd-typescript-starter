import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { selectMe } from '@/store/features/me-slice';
import Logo from '@/components/Logo';

import './index.scss';

const Header = () => {
  const me = useAppSelector(selectMe);

  return (
    <header className="_header">
      <div className="_header-left">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="_header-right">
        {me.result?.id ? (
          <span>{me.result.name}</span>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
