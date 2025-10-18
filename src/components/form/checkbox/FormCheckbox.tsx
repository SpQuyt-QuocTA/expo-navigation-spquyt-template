import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import BaseCheckbox from '@/components/checkbox/BaseCheckbox';
import { FormCheckboxProps } from './types';

/**
 * FormCheckbox Component
 * 
 * Controlled checkbox component integrated with react-hook-form
 * 
 * @example
 * // Basic usage
 * <FormCheckbox
 *   control={control}
 *   name="agreed"
 *   label="I agree to terms"
 * />
 * 
 * @example
 * // With i18n
 * <FormCheckbox
 *   control={control}
 *   name="newsletter"
 *   i18nKey="auth.subscribeNewsletter"
 * />
 * 
 * @example
 * // With validation
 * <FormCheckbox
 *   control={control}
 *   name="acceptTerms"
 *   i18nKey="auth.acceptTerms"
 *   rules={{ required: 'You must accept terms' }}
 * />
 * 
 * @example
 * // With custom styling
 * <FormCheckbox
 *   control={control}
 *   name="rememberMe"
 *   i18nKey="auth.rememberMe"
 *   labelPosition="left"
 *   containerClassName="mt-4"
 * />
 */
function FormCheckbox<T extends FieldValues>({
  control,
  name,
  rules,
  ...baseCheckboxProps
}: FormCheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <BaseCheckbox
          checked={!!value}
          onChange={onChange}
          error={!!error}
          errorMessage={error?.message}
          {...baseCheckboxProps}
        />
      )}
    />
  );
}

export default FormCheckbox;

