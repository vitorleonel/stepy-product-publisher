import { ChangeEvent } from 'react';

export interface ITextareaFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
