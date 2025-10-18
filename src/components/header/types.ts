import { ViewProps } from 'react-native';

export type BaseHeaderOwnProps = {
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

export type BaseHeaderProps = BaseHeaderOwnProps & Omit<ViewProps, 'className'>;

