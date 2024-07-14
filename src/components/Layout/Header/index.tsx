import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { useAppSelector } from '@/hooks/redux';
import { selectMe } from '@/store/features/me-slice';
import Logo from '@/components/Logo';
import { useSetTheme } from '@/hooks/useTheme';
import './index.scss';
import { selectTheme } from '@/store/features/theme-slice';

const Header = () => {
  const me = useAppSelector(selectMe);
  const theme = useAppSelector(selectTheme);
  const setTheme = useSetTheme();

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
        <Select
          onChange={(value: string) => {
            setTheme(value);
          }}
          defaultValue={theme}
          style={{ width: 90 }}
        >
          <Select.Option value="dark">Dark</Select.Option>
          <Select.Option value="default">default</Select.Option>
        </Select>
      </div>
    </header>
  );
};

export default React.memo(Header);
