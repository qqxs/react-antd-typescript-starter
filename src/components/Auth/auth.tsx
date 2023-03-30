import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';

import { selectMe } from '@/store/reducer/me-reducer';

const Auth = () => {
  const me = useAppSelector(selectMe);

  if (!me.id) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default React.memo(Auth);
