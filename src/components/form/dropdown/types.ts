import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { BaseDropdownProps } from '@/components/dropdown/types';

export type FormDropdownProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<BaseDropdownProps, 'value' | 'onChange'> & {
  control: Control<TFieldValues>;
  name: TName;
};

