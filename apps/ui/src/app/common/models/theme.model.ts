export interface ThemeBase {
  id: string;
  name: string;
}

export interface ThemeChar extends ThemeBase {
  bgRef: string;
  avatarRef: string;
  selected: boolean;
}


export interface ThemeColor extends ThemeBase {
  ref: string;
  selected: boolean;
}
