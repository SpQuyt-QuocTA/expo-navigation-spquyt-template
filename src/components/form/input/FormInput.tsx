import React from 'react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import BaseInput from '@/components/input/BaseInput';
import { FormInputProps } from './types';

/**
 * Form Input Component for React Hook Form
 * Wraps BaseInput with Controller for seamless form integration
 */
function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, ...baseInputProps }: FormInputProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <BaseInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          {...baseInputProps}
        />
      )}
    />
  );
}

export default FormInput;

