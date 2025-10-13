# FormInput Component

React Hook Form wrapper for BaseInput.

## Basic Usage

```tsx
import { useForm } from 'react-hook-form';
import FormInput from '@/components/form-input/FormInput';

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const { control, handleSubmit } = useForm<FormData>();

  return (
    <View>
      <FormInput control={control} name="email" label="Email" placeholder="Enter your email" />

      <FormInput control={control} name="password" label="Password" secureTextEntry />

      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
    </View>
  );
}
```

## With Validation (Zod)

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof schema>;

const { control, handleSubmit } = useForm<FormData>({
  resolver: zodResolver(schema),
});

<FormInput control={control} name="email" label="Email" required />;
// Error displays automatically when validation fails
```

## Props

| Prop      | Type                      | Description                    |
| --------- | ------------------------- | ------------------------------ |
| `control` | `Control<TFieldValues>`   | React Hook Form control object |
| `name`    | `FieldPath<TFieldValues>` | Field name (type-safe)         |

Plus all props from [BaseInput](../input/README.md).

## Features

- Automatic error display from validation
- Full TypeScript support with type inference
- Automatic field state sync (value, blur, errors)
- All BaseInput features inherited

## Type Safety

```tsx
interface FormData {
  email: string;
  age: number;
}

const { control } = useForm<FormData>();

// ✅ Valid
<FormInput control={control} name="email" />

// ❌ Type error - 'username' doesn't exist
<FormInput control={control} name="username" />
```
