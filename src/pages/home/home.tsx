import { useState } from 'react';
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import reactLogo from '@/assets/react.svg';
import { useAppDispatch } from '@/hooks/redux';
import { increment } from '@/store/features/counter-slice';
import cls from 'classnames';
import styles from './home.module.scss';

const Home = () => {
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();

  return (
    <div className={styles['_page-home']}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={cls(styles.logo, 'react')} alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            className={cls(styles.logo, 'ts')}
            alt="typescript logo"
          />
        </a>
        <a href="https://react-redux.js.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            className={cls(styles.logo, 'redux')}
            alt="redux logo"
          />
        </a>
      </div>
      <h1>Vite + React + Ts + Redux</h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
            dispatch(increment(count + 1));
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/home/home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite、React and Ts logos to learn more</p>
      {/* <Link to="/login">login</Link> */}
    </div>
  );
};

export default Home;
