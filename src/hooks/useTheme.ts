import { selectTheme, setTheme } from '@/store/features/theme-slice';
import { useAppDispatch, useAppSelector } from './redux';
import { useMemo } from 'react';

const styleID = '$____theme____$';
let styleEle: HTMLElement | null = null;
const head = document.head || document.getElementsByTagName('head')[0];
// __THEME__ 来源 vite.config.ts
const THEME = __THEME__;

const setStyleVars = (id: string) => {
  styleEle = document.getElementById(styleID);
  if (!styleEle) {
    styleEle = document.createElement('style');
    styleEle.id = styleID;
  }
  styleEle.setAttribute('data-theme', id);
  styleEle.innerHTML = `:root { ${THEME.vars[id]} }`;
  head.append(styleEle);
};

/**
 * @description 获取当前主题key
 * @returns
 */
export const useTheme = () => {
  let theme = useAppSelector(selectTheme);

  return useMemo(() => {
    const themeKeys = Object.keys(THEME.tokens);
    if (!themeKeys.includes(theme)) {
      console.warn(`Theme ${theme} does not exist! default use of the first one`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      theme = themeKeys[0];
    }
    setStyleVars(theme);
    return THEME.tokens[theme];
  }, [theme]);
};

/**
 * @description 通过设置主题key设置主题
 * @returns
 */
export const useSetTheme = () => {
  const dispatch = useAppDispatch();
  return (theme: string) => {
    dispatch(setTheme(theme));
  };
};
