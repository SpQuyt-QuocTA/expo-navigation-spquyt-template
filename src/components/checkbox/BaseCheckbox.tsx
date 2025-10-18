import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BaseCheckboxProps } from './types';
import BaseText from '@/components/text/BaseText';

/**
 * BaseCheckbox Component
 * 
 * Comprehensive checkbox component with i18n support and theming
 * 
 * @example
 * // Basic checkbox
 * <BaseCheckbox 
 *   checked={isChecked} 
 *   onChange={setIsChecked} 
 *   label="Accept terms" 
 * />
 * 
 * @example
 * // With i18n
 * <BaseCheckbox 
 *   checked={isChecked} 
 *   onChange={setIsChecked} 
 *   i18nKey="auth.agreeToTerms" 
 * />
 * 
 * @example
 * // With error
 * <BaseCheckbox 
 *   checked={isChecked} 
 *   onChange={setIsChecked} 
 *   label="Subscribe to newsletter" 
 *   error
 *   errorMessage="You must agree to continue"
 * />
 * 
 * @example
 * // Disabled state
 * <BaseCheckbox 
 *   checked={true} 
 *   onChange={() => {}} 
 *   label="Already subscribed" 
 *   disabled
 * />
 * 
 * @example
 * // Label on left
 * <BaseCheckbox 
 *   checked={isChecked} 
 *   onChange={setIsChecked} 
 *   label="Remember me" 
 *   labelPosition="left"
 * />
 * 
 * @example
 * // Custom styling
 * <BaseCheckbox 
 *   checked={isChecked} 
 *   onChange={setIsChecked} 
 *   i18nKey="common.agree" 
 *   containerClassName="py-4"
 *   checkboxClassName="border-2"
 * />
 */
const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  checked,
  onChange,
  label,
  i18nKey,
  labelPosition = 'right',
  disabled = false,
  error = false,
  errorMessage,
  containerClassName = '',
  checkboxClassName = '',
  labelClassName = '',
  errorClassName = '',
  testID,
  accessibilityLabel,
  accessibilityHint,
  ...viewProps
}) => {
  const { t } = useTranslation();

  const displayLabel = i18nKey ? t(i18nKey) : label;

  const handlePress = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  // Checkbox box styles
  const boxBaseStyles = 'w-5 h-5 rounded border-2 items-center justify-center';
  const boxStateStyles = error
    ? 'border-error bg-red-50'
    : checked
      ? 'border-primary bg-primary'
      : 'border-input-border bg-input';
  const boxDisabledStyles = disabled ? 'opacity-50' : '';
  const finalBoxStyles = `${boxBaseStyles} ${boxStateStyles} ${boxDisabledStyles} ${checkboxClassName}`.trim();

  const renderCheckbox = () => (
    <View className={finalBoxStyles}>
      {checked && (
        <View className="w-3 h-3 bg-white rounded-sm" />
      )}
    </View>
  );

  const renderLabel = () => {
    if (!displayLabel) return null;
    return (
      <BaseText
        text={displayLabel}
        variant="body"
        color={disabled ? 'foreground-secondary' : 'foreground'}
        className={`${labelPosition === 'left' ? 'mr-3' : 'ml-3'} ${labelClassName}`.trim()}
      />
    );
  };

  return (
    <View className={containerClassName} {...viewProps}>
      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.7}
        className="flex-row items-center"
        testID={testID}
        accessibilityLabel={accessibilityLabel || displayLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="checkbox"
        accessibilityState={{ checked, disabled }}
      >
        {labelPosition === 'left' && renderLabel()}
        {renderCheckbox()}
        {labelPosition === 'right' && renderLabel()}
      </TouchableOpacity>

      {/* Error Message */}
      {error && errorMessage && (
        <BaseText
          text={errorMessage}
          variant="caption"
          color="error"
          className={`mt-1 ${errorClassName}`.trim()}
        />
      )}
    </View>
  );
};

export default BaseCheckbox;

