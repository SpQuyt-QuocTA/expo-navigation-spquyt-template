# FormRadioGroup Component

Controlled radio group component integrated with react-hook-form.

## Features

- ✅ Seamless react-hook-form integration
- ✅ Automatic validation error display
- ✅ All BaseRadioGroup features (i18n, theming, layouts, etc.)
- ✅ Type-safe with TypeScript generics

## Basic Usage

```tsx
import { useForm } from 'react-hook-form';
import FormRadioGroup from '@/components/form/radio/FormRadioGroup';

interface FormData {
  gender: string;
  plan: string;
}

function MyForm() {
  const { control, handleSubmit } = useForm<FormData>();

  return (
    <FormRadioGroup
      control={control}
      name="gender"
      options={[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ]}
    />
  );
}
```

## With i18n

```tsx
<FormRadioGroup
  control={control}
  name="plan"
  options={[
    { value: 'free', i18nKey: 'plans.free' },
    { value: 'pro', i18nKey: 'plans.pro' },
    { value: 'enterprise', i18nKey: 'plans.enterprise' },
  ]}
/>
```

## With Validation

```tsx
<FormRadioGroup
  control={control}
  name="paymentMethod"
  options={[
    { value: 'card', i18nKey: 'payment.creditCard' },
    { value: 'paypal', i18nKey: 'payment.paypal' },
    { value: 'bank', i18nKey: 'payment.bankTransfer' },
  ]}
  rules={{ required: 'Please select a payment method' }}
/>
```

## Layout Directions

### Horizontal Layout

```tsx
<FormRadioGroup
  control={control}
  name="answer"
  direction="horizontal"
  options={[
    { value: 'yes', i18nKey: 'common.yes' },
    { value: 'no', i18nKey: 'common.no' },
  ]}
/>
```

## Real-World Examples

### Gender Selection

```tsx
interface ProfileForm {
  name: string;
  gender: string;
}

const { control, handleSubmit } = useForm<ProfileForm>();

<View>
  <BaseText i18nKey="profile.gender" variant="label" className="mb-3" />
  <FormRadioGroup
    control={control}
    name="gender"
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
interface SubscriptionForm {
  plan: string;
  paymentMethod: string;
}

const { control } = useForm<SubscriptionForm>();

<FormRadioGroup
  control={control}
  name="plan"
  options={[
    { value: 'free', label: 'Free - $0/month' },
    { value: 'pro', label: 'Pro - $9.99/month' },
    { value: 'enterprise', label: 'Enterprise - Contact us', disabled: true },
  ]}
  rules={{ required: 'Please select a plan' }}
/>;
```

### Payment Method with Validation

```tsx
interface CheckoutForm {
  paymentMethod: string;
}

const { control, handleSubmit } = useForm<CheckoutForm>();

const onSubmit = (data: CheckoutForm) => {
  console.log(data);
};

<FormRadioGroup
  control={control}
  name="paymentMethod"
  options={[
    { value: 'card', i18nKey: 'payment.creditCard' },
    { value: 'paypal', i18nKey: 'payment.paypal' },
    { value: 'bank', i18nKey: 'payment.bankTransfer' },
  ]}
  rules={{ required: 'Please select a payment method' }}
/>;
```

### Settings Preference

```tsx
interface SettingsForm {
  theme: string;
  language: string;
}

const { control } = useForm<SettingsForm>({
  defaultValues: {
    theme: 'system',
  },
});

<View className="gap-y-4">
  <BaseText i18nKey="settings.appearance" variant="h4" />
  <FormRadioGroup
    control={control}
    name="theme"
    options={[
      { value: 'light', i18nKey: 'theme.light' },
      { value: 'dark', i18nKey: 'theme.dark' },
      { value: 'system', i18nKey: 'theme.system' },
    ]}
  />
</View>;
```

### Yes/No Question

```tsx
interface SurveyForm {
  satisfied: string;
}

const { control } = useForm<SurveyForm>();

<View>
  <BaseText text="Are you satisfied with our service?" variant="label" className="mb-2" />
  <FormRadioGroup
    control={control}
    name="satisfied"
    direction="horizontal"
    options={[
      { value: 'yes', i18nKey: 'common.yes' },
      { value: 'no', i18nKey: 'common.no' },
    ]}
    rules={{ required: 'Please select an answer' }}
  />
</View>;
```

## Props Reference

| Prop      | Type                  | Required | Description              |
| --------- | --------------------- | -------- | ------------------------ |
| `control` | `Control<T>`          | ✅       | react-hook-form control  |
| `name`    | `Path<T>`             | ✅       | Field name in form       |
| `rules`   | `RegisterOptions<T>`  | -        | Validation rules         |
| ...rest   | `BaseRadioGroupProps` | -        | All BaseRadioGroup props |

## Notes

- Automatically shows validation errors from react-hook-form
- Error state and error message are managed by the form
- All BaseRadioGroup props are supported except `value`, `onChange`, `error`, and `errorMessage`
- Default value can be set using react-hook-form's `defaultValues`
