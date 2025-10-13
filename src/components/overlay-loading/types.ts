import { ViewProps } from 'react-native';

export type OverlayLoadingOwnProps = {
  visible: boolean;
  message?: string;
  loadingColor?: string;
  overlayClassName?: string;
  containerClassName?: string;
  messageClassName?: string;
};

export type OverlayLoadingProps = OverlayLoadingOwnProps & Omit<ViewProps, 'className'>;

