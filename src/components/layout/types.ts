import { ReactNode } from 'react';

export interface Props {
  activeTab: string;
  onTabChange: (newTab: string) => void;
  children: ReactNode;
}
