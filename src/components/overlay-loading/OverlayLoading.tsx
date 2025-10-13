import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { OverlayLoadingProps } from './types';

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

  const defaultContainerStyles = 'rounded-2xl bg-white p-6 shadow-lg';
  const finalContainerStyles = `${defaultContainerStyles} ${containerClassName}`.trim();

  const defaultMessageStyles = 'mt-4 text-center text-base text-gray-700';
  const finalMessageStyles = `${defaultMessageStyles} ${messageClassName}`.trim();

  return (
    <Modal transparent visible={visible} animationType="fade" statusBarTranslucent>
      <View className={finalOverlayStyles} {...viewProps}>
        <View className={finalContainerStyles}>
          <ActivityIndicator size="large" color={loadingColor} />
          {message && <Text className={finalMessageStyles}>{message}</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default OverlayLoading;

