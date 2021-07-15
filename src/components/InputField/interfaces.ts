import { ChangeEvent } from 'react';

export interface IInputFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
