import { ThemeBase } from '@models/theme.model';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { DEFAULT_VOLUME } from '@constants/mock.const';

export const setTheme = (theme: ThemeBase) => {
  document.body.className = `${theme.id}`;
  const root = document.querySelector('#root')! as HTMLDivElement;
  root.className = `${theme.name}-bg`;
  localStorage.setItem(LOCAL_KEY.SetTheme, `${theme.id}`);
  localStorage.setItem(LOCAL_KEY.SetBackground, `${theme.name}-bg`);
};

export const stopParentEvent = (event: any) => {
  event.stopPropagation();
};

export const durationConverter = (duration: number) => {
  const hours = ('0' + Math.floor(duration / 3600));
  const ch = Number(hours);
  const minutes = ('0' + Math.floor((duration - ch * 3600) / 60)).slice(-2);
  const seconds = ('0' + Math.floor(duration - Math.floor(duration / 60) * 60)).slice(-2);
  return ch !== 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}

export const saveVolumeToLocal = (val: number) => {
  localStorage.setItem(LOCAL_KEY.SetVolume, String(val));
  localStorage.setItem(LOCAL_KEY.SetCacheVolume, String(val !== 0 ? val : DEFAULT_VOLUME));
}
