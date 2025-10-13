import { ViewProps } from 'react-native';

export type HeaderOwnProps = {
  title?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  useDefaultBack?: boolean;
  onBackPress?: () => void;
  showBorder?: boolean;
  containerClassName?: string;
  titleClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
};

export type HeaderProps = HeaderOwnProps & Omit<ViewProps, 'className'>;

