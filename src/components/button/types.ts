import { TouchableOpacityProps } from 'react-native';

export type BaseButtonOwnProps = {
  title?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  loadingColor?: string;
};

export type BaseButtonProps = BaseButtonOwnProps & Omit<TouchableOpacityProps, 'className'>;

