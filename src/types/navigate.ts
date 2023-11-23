export type navigate = {
  navigate: (value: string, {screen, params}: {screen:string, params?: any}) => void;
}

export type navigateFunc = (value: string, {screen, params}: {screen:string, params?: any}) => void;