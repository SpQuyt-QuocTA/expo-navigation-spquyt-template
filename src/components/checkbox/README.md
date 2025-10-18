# BaseCheckbox Component

Comprehensive checkbox component with i18n support, theming, and full accessibility.

## Features

- ✅ i18n translation support
- ✅ Direct label text support
- ✅ Label positioning (left/right)
- ✅ Disabled state
- ✅ Error state with error message
- ✅ Theme-aware colors
- ✅ Custom styling with NativeWind
- ✅ Full accessibility support
- ✅ Controlled component pattern

## Basic Usage

```tsx
import { useState } from 'react';
import BaseCheckbox from '@/components/checkbox/BaseCheckbox';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <BaseCheckbox checked={checked} onChange={setChecked} label="Accept terms and conditions" />
  );
}
```

## With i18n

```tsx
<BaseCheckbox checked={agreed} onChange={setAgreed} i18nKey="auth.agreeToTerms" />
```

## States

### Disabled

```tsx
<BaseCheckbox checked={true} onChange={() => {}} label="Already subscribed" disabled />
```

### Error State

```tsx
<BaseCheckbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to terms"
  error
  errorMessage="You must agree to continue"
/>
```

## Label Positioning

```tsx
// Label on right (default)
<BaseCheckbox
  checked={checked}
  onChange={setChecked}
  label="Subscribe to newsletter"
/>

// Label on left
<BaseCheckbox
  checked={checked}
  onChange={setChecked}
  label="Remember me"
  labelPosition="left"
/>
```

## Custom Styling

```tsx
<BaseCheckbox
  checked={checked}
  onChange={setChecked}
  label="Custom styled checkbox"
  containerClassName="py-4 px-2 bg-background-secondary rounded-lg"
  checkboxClassName="border-4"
  labelClassName="text-lg font-bold"
/>
```

## Real-World Examples

### Terms and Conditions

```tsx
const [acceptedTerms, setAcceptedTerms] = useState(false);

<BaseCheckbox
  checked={acceptedTerms}
  onChange={setAcceptedTerms}
  i18nKey="auth.acceptTerms"
  error={submitted && !acceptedTerms}
  errorMessage="You must accept the terms to continue"
/>;
```

### Newsletter Subscription

```tsx
const [subscribed, setSubscribed] = useState(false);

<BaseCheckbox
  checked={subscribed}
  onChange={setSubscribed}
  label="Subscribe to our newsletter for updates"
/>;
```

### Remember Me

```tsx
const [rememberMe, setRememberMe] = useState(false);

<BaseCheckbox
  checked={rememberMe}
  onChange={setRememberMe}
  i18nKey="auth.rememberMe"
  labelPosition="left"
  containerClassName="mt-4"
/>;
```

### Form with Validation

```tsx
const [agreed, setAgreed] = useState(false);
const [submitted, setSubmitted] = useState(false);

const handleSubmit = () => {
  setSubmitted(true);
  if (!agreed) return;
  // Submit form
};

<BaseCheckbox
  checked={agreed}
  onChange={setAgreed}
  i18nKey="common.agreeToPolicy"
  error={submitted && !agreed}
  errorMessage="This field is required"
/>;
```

### Multiple Checkboxes

```tsx
const [preferences, setPreferences] = useState({
  email: false,
  sms: false,
  push: false,
});

<View className="gap-y-3">
  <BaseCheckbox
    checked={preferences.email}
    onChange={(val) => setPreferences({ ...preferences, email: val })}
    i18nKey="settings.emailNotifications"
  />
  <BaseCheckbox
    checked={preferences.sms}
    onChange={(val) => setPreferences({ ...preferences, sms: val })}
    i18nKey="settings.smsNotifications"
  />
  <BaseCheckbox
    checked={preferences.push}
    onChange={(val) => setPreferences({ ...preferences, push: val })}
    i18nKey="settings.pushNotifications"
  />
</View>;
```

## Props Reference

| Prop                 | Type                         | Default      | Description              |
| -------------------- | ---------------------------- | ------------ | ------------------------ |
| `checked`            | `boolean`                    | **Required** | Checked state            |
| `onChange`           | `(checked: boolean) => void` | **Required** | Called when toggled      |
| `label`              | `string`                     | -            | Label text (direct)      |
| `i18nKey`            | `string`                     | -            | Label i18n key           |
| `labelPosition`      | `'left' \| 'right'`          | `'right'`    | Label position           |
| `disabled`           | `boolean`                    | `false`      | Disabled state           |
| `error`              | `boolean`                    | `false`      | Error state              |
| `errorMessage`       | `string`                     | -            | Error message to display |
| `containerClassName` | `string`                     | `''`         | Container className      |
| `checkboxClassName`  | `string`                     | `''`         | Checkbox box className   |
| `labelClassName`     | `string`                     | `''`         | Label className          |
| `errorClassName`     | `string`                     | `''`         | Error message className  |
| `testID`             | `string`                     | -            | Test identifier          |
| `accessibilityLabel` | `string`                     | -            | Accessibility label      |
| `accessibilityHint`  | `string`                     | -            | Accessibility hint       |

## Accessibility

The component automatically provides:

- ✅ `accessibilityRole="checkbox"`
- ✅ `accessibilityState={{ checked, disabled }}`
- ✅ Default `accessibilityLabel` from label text
- ✅ Keyboard navigation support
- ✅ Screen reader support

## Theming

Colors automatically adapt to light/dark theme:

- **Unchecked**: Uses `border-input-border` and `bg-input`
- **Checked**: Uses `border-primary` and `bg-primary`
- **Error**: Uses `border-error` and `bg-red-50`
- **Disabled**: 50% opacity applied
