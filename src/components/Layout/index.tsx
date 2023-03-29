import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMe } from '@/models/auth';
import { useAppDispatch } from '@/hooks/redux';
import { setMe } from '@/store/reducer/me-reducer';

import Header from './Header';
import Footer from './Footer';

import './index.scss';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getMe()
      .then((res) => {
        if (res.code === 0) {
          dispatch(setMe(res.data));
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#fff',
        }}
      >
        Loading
      </div>
    );
  }

  return (
    <div className="_layout">
      <Header />
      <main className="_main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
