import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { BaseInputProps } from '@/components/input/types';

export type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = BaseInputProps & {
  control: Control<TFieldValues>;
  name: TName;
};

