# FormCheckbox Component

Controlled checkbox component integrated with react-hook-form.

## Features

- ✅ Seamless react-hook-form integration
- ✅ Automatic validation error display
- ✅ All BaseCheckbox features (i18n, theming, etc.)
- ✅ Type-safe with TypeScript generics

## Basic Usage

```tsx
import { useForm } from 'react-hook-form';
import FormCheckbox from '@/components/form/checkbox/FormCheckbox';

interface FormData {
  agreed: boolean;
  newsletter: boolean;
}

function MyForm() {
  const { control, handleSubmit } = useForm<FormData>();

  return <FormCheckbox control={control} name="agreed" label="I agree to terms and conditions" />;
}
```

## With i18n

```tsx
<FormCheckbox control={control} name="newsletter" i18nKey="auth.subscribeNewsletter" />
```

## With Validation

```tsx
<FormCheckbox
  control={control}
  name="acceptTerms"
  i18nKey="auth.acceptTerms"
  rules={{ required: 'You must accept terms to continue' }}
/>
```

## Real-World Examples

### Terms Acceptance with Validation

```tsx
interface SignUpForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const { control, handleSubmit } = useForm<SignUpForm>();

<FormCheckbox
  control={control}
  name="acceptTerms"
  i18nKey="auth.acceptTerms"
  rules={{ required: 'You must accept the terms' }}
/>;
```

### Multiple Preference Checkboxes

```tsx
interface PreferencesForm {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
}

const { control } = useForm<PreferencesForm>();

<View className="gap-y-3">
  <FormCheckbox control={control} name="emailNotifications" i18nKey="settings.emailNotifications" />
  <FormCheckbox control={control} name="smsNotifications" i18nKey="settings.smsNotifications" />
  <FormCheckbox control={control} name="pushNotifications" i18nKey="settings.pushNotifications" />
</View>;
```

### Remember Me Checkbox

```tsx
<FormCheckbox
  control={control}
  name="rememberMe"
  i18nKey="auth.rememberMe"
  labelPosition="left"
  containerClassName="mt-4"
/>
```

## Props Reference

| Prop      | Type                 | Required | Description             |
| --------- | -------------------- | -------- | ----------------------- |
| `control` | `Control<T>`         | ✅       | react-hook-form control |
| `name`    | `Path<T>`            | ✅       | Field name in form      |
| `rules`   | `RegisterOptions<T>` | -        | Validation rules        |
| ...rest   | `BaseCheckboxProps`  | -        | All BaseCheckbox props  |

## Notes

- Automatically shows validation errors from react-hook-form
- Error state and error message are managed by the form
- All BaseCheckbox props are supported except `checked`, `onChange`, `error`, and `errorMessage`
