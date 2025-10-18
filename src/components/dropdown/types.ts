import { DropdownProps } from "react-native-element-dropdown";

export interface DropdownItem {
  label: string;
  value: string | number;
  [key: string]: any;
}

export interface BaseDropdownOwnProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  dropdownClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Props from react-native-element-dropdown Dropdown component
export interface ElementDropdownProps extends Omit<DropdownProps<DropdownItem>, 'labelField' | 'valueField' | 'onChange' | 'value'> {
  labelField?: string;
  valueField?: string;
  onChange?: (item: DropdownItem) => void;
  value?: string | number | null;
}

export type BaseDropdownProps = BaseDropdownOwnProps & ElementDropdownProps;

