import { ViewProps } from 'react-native';

export interface BaseRadioOwnProps {
  /** Selected value */
  value: string;
  /** Current selected value */
  selectedValue: string;
  /** Called when radio is selected */
  onChange: (value: string) => void;

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

  // Styling
  /** Container className */
  containerClassName?: string;
  /** Radio circle className */
  radioClassName?: string;
  /** Label className */
  labelClassName?: string;

  // Accessibility
  /** Test ID for testing */
  testID?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint */
  accessibilityHint?: string;
}

export interface BaseRadioProps extends Omit<ViewProps, 'className'>, BaseRadioOwnProps { }

export interface BaseRadioGroupOwnProps {
  /** Current selected value */
  value: string;
  /** Called when selection changes */
  onChange: (value: string) => void;

  /** Radio options */
  options: Array<{
    value: string;
    label?: string;
    i18nKey?: string;
    disabled?: boolean;
  }>;

  // States
  /** Disabled entire group */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;

  // Layout
  /** Layout direction */
  direction?: 'vertical' | 'horizontal';

  // Styling
  /** Container className */
  containerClassName?: string;
  /** Error message className */
  errorClassName?: string;
}

export interface BaseRadioGroupProps extends Omit<ViewProps, 'className'>, BaseRadioGroupOwnProps { }

