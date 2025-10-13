# BaseInput Component

A flexible, accessible base input component with customizable styling.

## Features

- Label, error, helper text
- Icon support (left/right)
- Automatic error styling
- Fully customizable via className props
- TypeScript typed
- Tailwind CSS styling

## Basic Usage

```tsx
import BaseInput from '@/components/input/BaseInput';

<BaseInput label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} />;
```

## With Icons

```tsx
import Icon from 'react-native-vector-icons/Feather';

<BaseInput
  label="Email"
  leftIcon={<Icon name="mail" size={20} color="#9CA3AF" />}
  value={email}
  onChangeText={setEmail}
/>;
```

## Custom Styling

Override any part with className props:

```tsx
<BaseInput
  label="Email"
  containerClassName="mb-4"
  labelClassName="text-blue-600 font-bold"
  inputClassName="h-14 border-2 border-blue-500 text-lg"
  errorClassName="text-red-600 font-semibold"
  value={email}
  onChangeText={setEmail}
/>
```

## Props

| Prop                 | Type        | Default | Description             |
| -------------------- | ----------- | ------- | ----------------------- |
| `label`              | `string`    | -       | Input label             |
| `error`              | `string`    | -       | Error message           |
| `helperText`         | `string`    | -       | Helper text below input |
| `leftIcon`           | `ReactNode` | -       | Icon on the left side   |
| `rightIcon`          | `ReactNode` | -       | Icon on the right side  |
| `required`           | `boolean`   | `false` | Shows asterisk if true  |
| `containerClassName` | `string`    | -       | Container styles        |
| `labelClassName`     | `string`    | -       | Label styles            |
| `inputClassName`     | `string`    | -       | Input field styles      |
| `errorClassName`     | `string`    | -       | Error message styles    |
| `helperClassName`    | `string`    | -       | Helper text styles      |

Plus all standard `TextInputProps` from React Native.

## Default Styles

- **Input**: `h-11 px-4 rounded-lg border border-gray-300 bg-white text-base`
- **Error**: Automatically adds `border-red-500 bg-red-50`
- **Disabled**: Automatically adds `bg-gray-100 text-gray-400`

Simply pass `inputClassName` to override or extend these defaults.

## For Forms

Use [FormInput](../form-input/README.md) for react-hook-form integration.
