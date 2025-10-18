import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { BaseCheckboxOwnProps } from '@/components/checkbox/types';

export interface FormCheckboxOwnProps<T extends FieldValues> {
  /** react-hook-form control object */
  control: Control<T>;
  /** Field name in the form */
  name: Path<T>;
  /** Validation rules */
  rules?: RegisterOptions<T>;
}

export interface FormCheckboxProps<T extends FieldValues>
  extends Omit<BaseCheckboxOwnProps, 'checked' | 'onChange' | 'error' | 'errorMessage'>,
  FormCheckboxOwnProps<T> { }

