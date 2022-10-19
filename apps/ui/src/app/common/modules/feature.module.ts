import { ThemeBase } from '@models/theme.model';
import { LOCAL_KEY } from '@constants/storage-key.const';

export const setTheme = (theme: ThemeBase) => {
  document.body.className = `${theme.id}`;
  const root = document.querySelector('#root')! as HTMLDivElement;
  root.className = `${theme.name}-bg`;
  localStorage.setItem(LOCAL_KEY.SetTheme, `${theme.id}`);
  localStorage.setItem(LOCAL_KEY.SetBackground, `${theme.name}-bg`);
};
