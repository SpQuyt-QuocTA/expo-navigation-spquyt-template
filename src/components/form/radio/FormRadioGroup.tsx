import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseRadioGroup } from '@/components/radio/BaseRadio';
import { FormRadioGroupProps } from './types';

/**
 * FormRadioGroup Component
 * 
 * Controlled radio group component integrated with react-hook-form
 * 
 * @example
 * // Basic usage
 * <FormRadioGroup
 *   control={control}
 *   name="gender"
 *   options={[
 *     { value: 'male', label: 'Male' },
 *     { value: 'female', label: 'Female' }
 *   ]}
 * />
 * 
 * @example
 * // With i18n
 * <FormRadioGroup
 *   control={control}
 *   name="plan"
 *   options={[
 *     { value: 'free', i18nKey: 'plans.free' },
 *     { value: 'pro', i18nKey: 'plans.pro' }
 *   ]}
 * />
 * 
 * @example
 * // With validation
 * <FormRadioGroup
 *   control={control}
 *   name="paymentMethod"
 *   options={[
 *     { value: 'card', i18nKey: 'payment.card' },
 *     { value: 'paypal', i18nKey: 'payment.paypal' }
 *   ]}
 *   rules={{ required: 'Please select a payment method' }}
 * />
 * 
 * @example
 * // Horizontal layout
 * <FormRadioGroup
 *   control={control}
 *   name="answer"
 *   direction="horizontal"
 *   options={[
 *     { value: 'yes', label: 'Yes' },
 *     { value: 'no', label: 'No' }
 *   ]}
 * />
 */
function FormRadioGroup<T extends FieldValues>({
  control,
  name,
  rules,
  ...baseRadioGroupProps
}: FormRadioGroupProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <BaseRadioGroup
          value={value || ''}
          onChange={onChange}
          error={!!error}
          errorMessage={error?.message}
          {...baseRadioGroupProps}
        />
      )}
    />
  );
}

export default FormRadioGroup;

