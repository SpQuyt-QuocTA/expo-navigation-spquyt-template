# FormDropdown Component

A React Hook Form wrapper for `BaseDropdown` that provides seamless form integration with automatic validation and error handling.

## Features

- ✅ Full React Hook Form integration
- ✅ Automatic validation and error display
- ✅ Type-safe with TypeScript generics
- ✅ Inherits all BaseDropdown features
- ✅ Minimal boilerplate

## Basic Usage

```tsx
import { useForm } from 'react-hook-form';
import FormDropdown from '@/components/form/dropdown/FormDropdown';
import { DropdownItem } from '@/components/dropdown/types';

interface FormData {
  country: string;
}

const countries: DropdownItem[] = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
];

function MyForm() {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View>
      <FormDropdown
        control={control}
        name="country"
        label="Country"
        data={countries}
        placeholder="Select your country"
      />
      <BaseButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
```

## With Validation

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  country: z.string().min(1, 'Please select a country'),
  state: z.string().min(1, 'Please select a state'),
});

type FormData = z.infer<typeof schema>;

function MyForm() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: '',
      state: '',
    },
  });

  return (
    <View>
      <FormDropdown
        control={control}
        name="country"
        label="Country"
        data={countries}
        required
        placeholder="Select country"
      />
      <FormDropdown
        control={control}
        name="state"
        label="State"
        data={states}
        required
        placeholder="Select state"
      />
    </View>
  );
}
```

## With Search

```tsx
<FormDropdown
  control={control}
  name="category"
  label="Category"
  data={categories}
  search
  searchPlaceholder="Search categories..."
  placeholder="Select a category"
  required
/>
```

## With Helper Text

```tsx
<FormDropdown
  control={control}
  name="priority"
  label="Priority Level"
  data={priorities}
  helperText="Select the urgency level for this task"
  placeholder="Choose priority"
/>
```

## With Icons

```tsx
import { Ionicons } from '@expo/vector-icons';

<FormDropdown
  control={control}
  name="status"
  label="Status"
  data={statusOptions}
  leftIcon={<Ionicons name="flag" size={20} color="#6B7280" />}
  placeholder="Select status"
/>;
```

## Complete Example with Complex Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormDropdown from '@/components/form/dropdown/FormDropdown';
import FormInput from '@/components/form/input/FormInput';
import { DropdownItem } from '@/components/dropdown/types';

const countries: DropdownItem[] = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
];

const roles: DropdownItem[] = [
  { label: 'Developer', value: 'dev' },
  { label: 'Designer', value: 'design' },
  { label: 'Manager', value: 'manager' },
];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Please select a country'),
  role: z.string().min(1, 'Please select a role'),
});

type FormData = z.infer<typeof schema>;

function RegistrationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      country: '',
      role: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <View className="p-4">
      <FormInput
        control={control}
        name="name"
        label="Full Name"
        placeholder="Enter your name"
        required
      />

      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        required
        containerClassName="mt-4"
      />

      <FormDropdown
        control={control}
        name="country"
        label="Country"
        data={countries}
        search
        searchPlaceholder="Search countries..."
        placeholder="Select your country"
        required
        containerClassName="mt-4"
      />

      <FormDropdown
        control={control}
        name="role"
        label="Role"
        data={roles}
        placeholder="Select your role"
        required
        containerClassName="mt-4"
      />

      <BaseButton title="Submit" onPress={handleSubmit(onSubmit)} containerClassName="mt-6" />
    </View>
  );
}
```

## Props

FormDropdown accepts all props from `BaseDropdown` plus:

| Prop      | Type                      | Required | Description                    |
| --------- | ------------------------- | -------- | ------------------------------ |
| `control` | `Control<TFieldValues>`   | ✅       | React Hook Form control object |
| `name`    | `FieldPath<TFieldValues>` | ✅       | Field name in the form         |
| ...rest   | `BaseDropdownProps`       | -        | All BaseDropdown props         |

## Type Safety

The component is fully type-safe with TypeScript generics:

```tsx
// TypeScript will infer and enforce types
interface MyFormData {
  category: string;
  priority: number;
}

const { control } = useForm<MyFormData>();

// ✅ Valid - 'category' is a string field
<FormDropdown control={control} name="category" data={stringData} />

// ✅ Valid - 'priority' is a number field
<FormDropdown control={control} name="priority" data={numberData} />

// ❌ TypeScript error - 'invalid' is not in MyFormData
<FormDropdown control={control} name="invalid" data={data} />
```

## Notes

- Validation errors are automatically displayed via the `error` prop
- The component handles `onChange` internally to update form state
- All BaseDropdown features (search, icons, helper text) are available
- No need to manually use `Controller` - it's handled internally

## Dependencies

Same as `BaseDropdown`:

- `react-hook-form`
- `react-native-element-dropdown`: ^2.12.1
- Requires NativeWind/Tailwind CSS setup

## Related Components

- [`BaseDropdown`](../../../dropdown/README.md) - Standalone dropdown component
- [`FormInput`](../input/README.md) - Form text input component
- [`FormCheckbox`](../checkbox/README.md) - Form checkbox component
- [`FormRadio`](../radio/README.md) - Form radio component
