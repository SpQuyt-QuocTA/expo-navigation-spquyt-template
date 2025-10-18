import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { OverlayLoadingProps } from './types';
import BaseText from '@/components/text/BaseText';

const OverlayLoading: React.FC<OverlayLoadingProps> = ({
  visible,
  message,
  loadingColor = '#3B82F6',
  overlayClassName = '',
  containerClassName = '',
  messageClassName = '',
  ...viewProps
}) => {
  const defaultOverlayStyles = 'flex-1 items-center justify-center bg-black/50';
  const finalOverlayStyles = `${defaultOverlayStyles} ${overlayClassName}`.trim();

  const finalContainerStyles = `rounded-2xl bg-card p-6 shadow-lg ${containerClassName}`.trim();

  const finalMessageStyles = `mt-4 text-center text-base text-foreground-secondary ${messageClassName}`.trim();

  return (
    <Modal transparent visible={visible} animationType="fade" statusBarTranslucent>
      <View className={finalOverlayStyles} {...viewProps}>
        <View className={finalContainerStyles}>
          <ActivityIndicator size="large" color={loadingColor} />
          {message && <BaseText text={message} align="center" variant="body" color="foreground-secondary" className={`mt-4 ${messageClassName}`.trim()} />}
        </View>
      </View>
    </Modal>
  );
};

export default OverlayLoading;
