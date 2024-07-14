import { selectTheme, setTheme } from '@/store/features/theme-slice';
import { useAppDispatch, useAppSelector } from './redux';
import { useMemo } from 'react';

const styleID = '$____theme____$';

let styleEle: HTMLElement | null = null;

/**
 * @description 获取当前主题key
 * @returns
 */
export const useTheme = () => {
  //   const dispatch = useAppDispatch();
  let theme = useAppSelector(selectTheme);
  console.log(theme);
  return useMemo(() => {
    // $__THEME__$ 来源 vite.config.ts
    const THEME = $__THEME__$;
    const head = document.head || document.getElementsByTagName('head')[0];

    const themeKeys = Object.keys(THEME.tokens);
    if (!themeKeys.includes(theme)) {
      console.warn(`Theme ${theme} does not exist! default use of the first one`);
      theme = themeKeys[0];
    }
    const setStyleVars = (id: string) => {
      styleEle = document.getElementById(styleID);

      if (!styleEle) {
        styleEle = document.createElement('style');
        styleEle.id = styleID;
      }

      styleEle.setAttribute('data-theme', id);

      styleEle.innerHTML = `:root { ${THEME.vars[theme]} }`;
      head.append(styleEle);
    };

    // const setTheme = (themeKey: string) => {
    //   setStyleVars(themeKey);
    //   //
    //   return THEME.tokens[themeKey];
    // };
    setStyleVars(theme);
    return THEME.tokens[theme];
  }, [theme]);
};

/**
 * @description 通过设置主题key 设置主题
 * @returns
 */
export const useSetTheme = () => {
  const dispatch = useAppDispatch();
  return (theme: string) => {
    dispatch(setTheme(theme));
  };
};
