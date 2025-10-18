import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BaseRadioProps, BaseRadioGroupProps } from './types';
import BaseText from '@/components/text/BaseText';
import { cn } from '@/utils/cn';

/**
 * BaseRadio Component
 * 
 * Single radio button component with i18n support and theming
 * 
 * @example
 * // Basic radio
 * <BaseRadio 
 *   value="option1" 
 *   selectedValue={selected} 
 *   onChange={setSelected} 
 *   label="Option 1" 
 * />
 * 
 * @example
 * // With i18n
 * <BaseRadio 
 *   value="male" 
 *   selectedValue={gender} 
 *   onChange={setGender} 
 *   i18nKey="profile.male" 
 * />
 * 
 * @example
 * // Disabled state
 * <BaseRadio 
 *   value="premium" 
 *   selectedValue={plan} 
 *   onChange={setPlan} 
 *   label="Premium Plan" 
 *   disabled
 * />
 * 
 * @example
 * // Label on left
 * <BaseRadio 
 *   value="yes" 
 *   selectedValue={answer} 
 *   onChange={setAnswer} 
 *   label="Yes" 
 *   labelPosition="left"
 * />
 */
const BaseRadio: React.FC<BaseRadioProps> = ({
  value,
  selectedValue,
  onChange,
  label,
  i18nKey,
  labelPosition = 'right',
  disabled = false,
  error = false,
  containerClassName = '',
  radioClassName = '',
  labelClassName = '',
  testID,
  accessibilityLabel,
  accessibilityHint,
  ...viewProps
}) => {
  const { t } = useTranslation();

  const displayLabel = i18nKey ? t(i18nKey) : label;
  const isSelected = value === selectedValue;

  const handlePress = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  const renderRadio = () => (
    <View
      className={cn(
        'w-5 h-5 rounded-full border-2 items-center justify-center',
        error ? 'border-error bg-red-50' : isSelected ? 'border-primary' : 'border-input-border bg-input',
        disabled && 'opacity-50',
        radioClassName
      )}
    >
      {isSelected && <View className="w-3 h-3 bg-primary rounded-full" />}
    </View>
  );

  const renderLabel = () => {
    if (!displayLabel) return null;
    return (
      <BaseText
        text={displayLabel}
        variant="body"
        color={disabled ? 'foreground-secondary' : 'foreground'}
        className={cn(labelPosition === 'left' ? 'mr-3' : 'ml-3', labelClassName)}
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
        accessibilityRole="radio"
        accessibilityState={{ selected: isSelected, disabled }}
      >
        {labelPosition === 'left' && renderLabel()}
        {renderRadio()}
        {labelPosition === 'right' && renderLabel()}
      </TouchableOpacity>
    </View>
  );
};

/**
 * BaseRadioGroup Component
 * 
 * Radio group wrapper for managing multiple radio buttons
 * 
 * @example
 * // Basic usage
 * <BaseRadioGroup
 *   value={gender}
 *   onChange={setGender}
 *   options={[
 *     { value: 'male', label: 'Male' },
 *     { value: 'female', label: 'Female' },
 *     { value: 'other', label: 'Other' }
 *   ]}
 * />
 * 
 * @example
 * // With i18n
 * <BaseRadioGroup
 *   value={plan}
 *   onChange={setPlan}
 *   options={[
 *     { value: 'free', i18nKey: 'plans.free' },
 *     { value: 'pro', i18nKey: 'plans.pro' },
 *     { value: 'enterprise', i18nKey: 'plans.enterprise', disabled: true }
 *   ]}
 * />
 * 
 * @example
 * // Horizontal layout
 * <BaseRadioGroup
 *   value={answer}
 *   onChange={setAnswer}
 *   direction="horizontal"
 *   options={[
 *     { value: 'yes', label: 'Yes' },
 *     { value: 'no', label: 'No' }
 *   ]}
 * />
 * 
 * @example
 * // With error
 * <BaseRadioGroup
 *   value={selection}
 *   onChange={setSelection}
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' }
 *   ]}
 *   error
 *   errorMessage="Please select an option"
 * />
 */
export const BaseRadioGroup: React.FC<BaseRadioGroupProps> = ({
  value,
  onChange,
  options,
  disabled = false,
  error = false,
  errorMessage,
  direction = 'vertical',
  containerClassName = '',
  errorClassName = '',
  ...viewProps
}) => {
  return (
    <View className={containerClassName} {...viewProps}>
      <View className={cn(direction === 'horizontal' ? 'flex-row gap-x-4' : 'gap-y-3')}>
        {options.map((option) => (
          <BaseRadio
            key={option.value}
            value={option.value}
            selectedValue={value}
            onChange={onChange}
            label={option.label}
            i18nKey={option.i18nKey}
            disabled={disabled || option.disabled}
            error={error}
          />
        ))}
      </View>

      {error && errorMessage && (
        <BaseText text={errorMessage} variant="caption" color="error" className={cn('mt-2', errorClassName)} />
      )}
    </View>
  );
};

export default BaseRadio;

