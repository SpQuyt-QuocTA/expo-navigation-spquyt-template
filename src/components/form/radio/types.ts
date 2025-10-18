import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { BaseRadioGroupOwnProps } from '@/components/radio/types';

export interface FormRadioGroupOwnProps<T extends FieldValues> {
  /** react-hook-form control object */
  control: Control<T>;
  /** Field name in the form */
  name: Path<T>;
  /** Validation rules */
  rules?: RegisterOptions<T>;
}

export interface FormRadioGroupProps<T extends FieldValues>
  extends Omit<BaseRadioGroupOwnProps, 'value' | 'onChange' | 'error' | 'errorMessage'>,
  FormRadioGroupOwnProps<T> { }

