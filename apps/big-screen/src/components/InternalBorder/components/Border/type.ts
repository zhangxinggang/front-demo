import { CSSProperties, ReactNode } from 'react';

export type CommonBorderProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  [key: string]: any;
} & ComponentData.TScreenData['config']['attr']['componentBorder'];
