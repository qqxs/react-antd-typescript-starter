import React from 'react';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import Loading from '@/components/Loading';
import { router } from './router';
import { useTheme } from './hooks/useTheme';

const Page = () => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
        token: theme,
      }}
    >
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ConfigProvider>
  );
};

export default Page;
