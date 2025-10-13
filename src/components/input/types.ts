import { TextInputProps } from 'react-native';

export type BaseInputOwnProps = {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
};

export type BaseInputProps = BaseInputOwnProps & Omit<TextInputProps, 'className'>;

