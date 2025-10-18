import { ViewProps } from 'react-native';

export interface BaseCheckboxOwnProps {
  /** Checked state */
  checked: boolean;
  /** Called when checkbox is toggled */
  onChange: (checked: boolean) => void;

  // Label props
  /** Label text (direct) */
  label?: string;
  /** Label i18n key */
  i18nKey?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';

  // States
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;

  // Styling
  /** Container className */
  containerClassName?: string;
  /** Checkbox box className */
  checkboxClassName?: string;
  /** Label className */
  labelClassName?: string;
  /** Error message className */
  errorClassName?: string;

  // Accessibility
  /** Test ID for testing */
  testID?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint */
  accessibilityHint?: string;
}

export interface BaseCheckboxProps extends Omit<ViewProps, 'className'>, BaseCheckboxOwnProps { }

