import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { OverlayLoadingProps } from './types';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

const OverlayLoading: React.FC<OverlayLoadingProps> = ({
  visible,
  message,
  loadingColor = '#3B82F6',
  overlayClassName = '',
  containerClassName = '',
  messageClassName = '',
  ...viewProps
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade" statusBarTranslucent>
      <View className={cn('flex-1 items-center justify-center bg-black/50', overlayClassName)} {...viewProps}>
        <View className={cn('rounded-2xl bg-card p-6 shadow-lg', containerClassName)}>
          <ActivityIndicator size="large" color={loadingColor} />
          {message && (
            <BaseText
              text={message}
              align="center"
              variant="body"
              color="foreground-secondary"
              className={cn('mt-4', messageClassName)}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default OverlayLoading;
