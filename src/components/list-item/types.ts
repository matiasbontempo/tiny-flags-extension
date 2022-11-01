export interface Props {
  id: string;
  label?: string;
  value?: boolean;
  onClick: (value: boolean, id: string) => void;
}
