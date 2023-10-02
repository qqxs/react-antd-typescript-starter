import cls from 'classnames';
import styles from './loading.module.scss';

/**
 * @description page level loading
 * @returns
 */
const Loading = () => <div className={cls(styles.loading, 'loading')}>Loading...</div>;

export default Loading;
