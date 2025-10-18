# BaseRadio Component

Comprehensive radio button component with i18n support, theming, and full accessibility.

Includes:

- `BaseRadio` - Single radio button
- `BaseRadioGroup` - Wrapper for managing multiple radio buttons

## Features

- ✅ i18n translation support
- ✅ Direct label text support
- ✅ Label positioning (left/right)
- ✅ Horizontal/Vertical layout
- ✅ Disabled state (per option or entire group)
- ✅ Error state with error message
- ✅ Theme-aware colors
- ✅ Custom styling with NativeWind
- ✅ Full accessibility support
- ✅ Controlled component pattern

## Basic Usage

### Using BaseRadioGroup (Recommended)

```tsx
import { useState } from 'react';
import { BaseRadioGroup } from '@/components/radio/BaseRadio';

function MyComponent() {
  const [gender, setGender] = useState('');

  return (
    <BaseRadioGroup
      value={gender}
      onChange={setGender}
      options={[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ]}
    />
  );
}
```

### Using Individual BaseRadio

```tsx
import BaseRadio from '@/components/radio/BaseRadio';

const [selected, setSelected] = useState('option1');

<View className="gap-y-3">
  <BaseRadio value="option1" selectedValue={selected} onChange={setSelected} label="Option 1" />
  <BaseRadio value="option2" selectedValue={selected} onChange={setSelected} label="Option 2" />
</View>;
```

## With i18n

```tsx
<BaseRadioGroup
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', i18nKey: 'plans.free' },
    { value: 'pro', i18nKey: 'plans.pro' },
    { value: 'enterprise', i18nKey: 'plans.enterprise' },
  ]}
/>
```

## Layout Directions

### Vertical (Default)

```tsx
<BaseRadioGroup
  value={answer}
  onChange={setAnswer}
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'maybe', label: 'Maybe' },
  ]}
/>
```

### Horizontal

```tsx
<BaseRadioGroup
  value={answer}
  onChange={setAnswer}
  direction="horizontal"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ]}
/>
```

## States

### Disabled (Entire Group)

```tsx
<BaseRadioGroup
  value={plan}
  onChange={setPlan}
  disabled
  options={[
    { value: 'free', label: 'Free Plan' },
    { value: 'pro', label: 'Pro Plan' },
  ]}
/>
```

### Disabled (Specific Options)

```tsx
<BaseRadioGroup
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', label: 'Free Plan' },
    { value: 'pro', label: 'Pro Plan', disabled: true },
    { value: 'enterprise', label: 'Enterprise Plan' },
  ]}
/>
```

### Error State

```tsx
<BaseRadioGroup
  value={selection}
  onChange={setSelection}
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  error
  errorMessage="Please select an option to continue"
/>
```

## Label Positioning

```tsx
// Individual radio with label on left
<BaseRadio
  value="yes"
  selectedValue={answer}
  onChange={setAnswer}
  label="Yes"
  labelPosition="left"
/>
```

## Custom Styling

```tsx
<BaseRadioGroup
  value={selection}
  onChange={setSelection}
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  containerClassName="p-4 bg-background-secondary rounded-lg"
  errorClassName="font-bold"
/>
```

## Real-World Examples

### Gender Selection

```tsx
const [gender, setGender] = useState('');

<View>
  <BaseText i18nKey="profile.gender" variant="label" className="mb-3" />
  <BaseRadioGroup
    value={gender}
    onChange={setGender}
    options={[
      { value: 'male', i18nKey: 'profile.male' },
      { value: 'female', i18nKey: 'profile.female' },
      { value: 'other', i18nKey: 'profile.other' },
    ]}
  />
</View>;
```

### Subscription Plan Selection

```tsx
const [plan, setPlan] = useState('free');

<BaseRadioGroup
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', label: 'Free - $0/month' },
    { value: 'pro', label: 'Pro - $9.99/month' },
    { value: 'enterprise', label: 'Enterprise - Contact us', disabled: true },
  ]}
/>;
```

### Yes/No Question (Horizontal)

```tsx
const [answer, setAnswer] = useState('');

<View>
  <BaseText text="Do you agree?" variant="label" className="mb-2" />
  <BaseRadioGroup
    value={answer}
    onChange={setAnswer}
    direction="horizontal"
    options={[
      { value: 'yes', i18nKey: 'common.yes' },
      { value: 'no', i18nKey: 'common.no' },
    ]}
  />
</View>;
```

### Form with Validation

```tsx
const [paymentMethod, setPaymentMethod] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = () => {
  setSubmitted(true);
  if (!paymentMethod) return;
  // Submit form
};

<BaseRadioGroup
  value={paymentMethod}
  onChange={setPaymentMethod}
  options={[
    { value: 'card', i18nKey: 'payment.creditCard' },
    { value: 'paypal', i18nKey: 'payment.paypal' },
    { value: 'bank', i18nKey: 'payment.bankTransfer' },
  ]}
  error={submitted && !paymentMethod}
  errorMessage="Please select a payment method"
/>;
```

### Settings Preferences

```tsx
const [theme, setTheme] = useState('system');

<View className="gap-y-4">
  <BaseText i18nKey="settings.appearance" variant="h4" />
  <BaseRadioGroup
    value={theme}
    onChange={setTheme}
    options={[
      { value: 'light', i18nKey: 'theme.light' },
      { value: 'dark', i18nKey: 'theme.dark' },
      { value: 'system', i18nKey: 'theme.system' },
    ]}
  />
</View>;
```

## Props Reference

### BaseRadio Props

| Prop                 | Type                      | Default      | Description              |
| -------------------- | ------------------------- | ------------ | ------------------------ |
| `value`              | `string`                  | **Required** | Radio button value       |
| `selectedValue`      | `string`                  | **Required** | Currently selected value |
| `onChange`           | `(value: string) => void` | **Required** | Called when selected     |
| `label`              | `string`                  | -            | Label text (direct)      |
| `i18nKey`            | `string`                  | -            | Label i18n key           |
| `labelPosition`      | `'left' \| 'right'`       | `'right'`    | Label position           |
| `disabled`           | `boolean`                 | `false`      | Disabled state           |
| `error`              | `boolean`                 | `false`      | Error state              |
| `containerClassName` | `string`                  | `''`         | Container className      |
| `radioClassName`     | `string`                  | `''`         | Radio circle className   |
| `labelClassName`     | `string`                  | `''`         | Label className          |
| `testID`             | `string`                  | -            | Test identifier          |
| `accessibilityLabel` | `string`                  | -            | Accessibility label      |
| `accessibilityHint`  | `string`                  | -            | Accessibility hint       |

### BaseRadioGroup Props

| Prop                 | Type                         | Default      | Description                   |
| -------------------- | ---------------------------- | ------------ | ----------------------------- |
| `value`              | `string`                     | **Required** | Currently selected value      |
| `onChange`           | `(value: string) => void`    | **Required** | Called when selection changes |
| `options`            | `Array<Option>`              | **Required** | Array of radio options        |
| `disabled`           | `boolean`                    | `false`      | Disable entire group          |
| `error`              | `boolean`                    | `false`      | Error state                   |
| `errorMessage`       | `string`                     | -            | Error message to display      |
| `direction`          | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction              |
| `containerClassName` | `string`                     | `''`         | Container className           |
| `errorClassName`     | `string`                     | `''`         | Error message className       |

### Option Type

```typescript
{
  value: string;        // Required: Option value
  label?: string;       // Direct label text
  i18nKey?: string;     // i18n translation key
  disabled?: boolean;   // Disable this option
}
```

## Accessibility

The component automatically provides:

- ✅ `accessibilityRole="radio"`
- ✅ `accessibilityState={{ selected, disabled }}`
- ✅ Default `accessibilityLabel` from label text
- ✅ Keyboard navigation support
- ✅ Screen reader support

## Theming

Colors automatically adapt to light/dark theme:

- **Unselected**: Uses `border-input-border` and `bg-input`
- **Selected**: Uses `border-primary` with `bg-primary` dot
- **Error**: Uses `border-error` and `bg-red-50`
- **Disabled**: 50% opacity applied
