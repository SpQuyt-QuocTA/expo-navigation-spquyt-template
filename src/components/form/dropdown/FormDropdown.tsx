import React from 'react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import BaseDropdown from '@/components/dropdown/BaseDropdown';
import { DropdownItem } from '@/components/dropdown/types';
import { FormDropdownProps } from './types';

/**
 * Form Dropdown Component for React Hook Form
 * Wraps BaseDropdown with Controller for seamless form integration
 */
function FormDropdown<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, ...baseDropdownProps }: FormDropdownProps<TFieldValues, TName>) {
  // Destructure value and onChange from baseDropdownProps to avoid conflicts
  const { value: _value, onChange: _onChange, ...restProps } = baseDropdownProps as any;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <BaseDropdown
          {...restProps}
          value={value}
          onChange={(item: DropdownItem) => onChange(item.value)}
          error={error?.message}
        />
      )}
    />
  );
}

export default FormDropdown;

