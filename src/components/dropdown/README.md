# BaseDropdown Component

A flexible, themed dropdown component built on top of `react-native-element-dropdown` with support for labels, error messages, helper text, icons, and search functionality.

## Features

- ✅ Automatic theming (light/dark mode)
- ✅ Label with optional required indicator
- ✅ Error handling with visual feedback
- ✅ Helper text support
- ✅ Left and right icon support
- ✅ Search functionality
- ✅ Fully typed with TypeScript
- ✅ Customizable styling with Tailwind classes
- ✅ Follows project conventions

## Basic Usage

```tsx
import BaseDropdown from '@/components/dropdown/BaseDropdown';
import { DropdownItem } from '@/components/dropdown/types';

const data: DropdownItem[] = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];

function MyComponent() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <BaseDropdown
      label="Select an option"
      data={data}
      value={value}
      onChange={(item) => setValue(item.value)}
      placeholder="Choose..."
    />
  );
}
```

## With Search

```tsx
<BaseDropdown
  label="Country"
  data={countries}
  value={selectedCountry}
  onChange={(item) => setSelectedCountry(item.value)}
  search
  searchPlaceholder="Search countries..."
  placeholder="Select a country"
/>
```

## With Icons

```tsx
import { Ionicons } from '@expo/vector-icons';

<BaseDropdown
  label="Category"
  data={categories}
  value={category}
  onChange={(item) => setCategory(item.value)}
  leftIcon={<Ionicons name="list" size={20} color="#6B7280" />}
  placeholder="Select category"
/>;
```

## With Error Handling

```tsx
<BaseDropdown
  label="Required Field"
  data={options}
  value={value}
  onChange={(item) => setValue(item.value)}
  error={error}
  required
  placeholder="Please select"
/>
```

## With Helper Text

```tsx
<BaseDropdown
  label="Priority"
  data={priorities}
  value={priority}
  onChange={(item) => setPriority(item.value)}
  helperText="Select the priority level for this task"
  placeholder="Choose priority"
/>
```

## With React Hook Form

```tsx
import { Controller } from 'react-hook-form';

<Controller
  control={control}
  name="country"
  render={({ field: { onChange, value }, fieldState: { error } }) => (
    <BaseDropdown
      label="Country"
      data={countries}
      value={value}
      onChange={(item) => onChange(item.value)}
      error={error?.message}
      required
      placeholder="Select your country"
    />
  )}
/>;
```

## Props

### BaseDropdownOwnProps

| Prop                 | Type              | Default | Description                                     |
| -------------------- | ----------------- | ------- | ----------------------------------------------- |
| `label`              | `string`          | -       | Label text displayed above the dropdown         |
| `error`              | `string`          | -       | Error message (shows red border and error text) |
| `helperText`         | `string`          | -       | Helper text displayed below dropdown            |
| `required`           | `boolean`         | `false` | Shows asterisk (\*) next to label               |
| `containerClassName` | `string`          | `''`    | Tailwind classes for outer container            |
| `labelClassName`     | `string`          | `''`    | Tailwind classes for label                      |
| `dropdownClassName`  | `string`          | `''`    | Tailwind classes for dropdown container         |
| `errorClassName`     | `string`          | `''`    | Tailwind classes for error message              |
| `helperClassName`    | `string`          | `''`    | Tailwind classes for helper text                |
| `leftIcon`           | `React.ReactNode` | -       | Icon component displayed on the left            |
| `rightIcon`          | `React.ReactNode` | -       | Icon component displayed on the right           |

### Inherited from react-native-element-dropdown

| Prop                | Type                                    | Default              | Description                     |
| ------------------- | --------------------------------------- | -------------------- | ------------------------------- |
| `data`              | `DropdownItem[]`                        | **required**         | Array of dropdown items         |
| `value`             | `string \| number \| null`              | **required**         | Currently selected value        |
| `onChange`          | `(item: DropdownItem) => void`          | **required**         | Callback when selection changes |
| `placeholder`       | `string`                                | `'Select an option'` | Placeholder text                |
| `search`            | `boolean`                               | `false`              | Enable search functionality     |
| `searchPlaceholder` | `string`                                | `'Search...'`        | Placeholder for search input    |
| `labelField`        | `string`                                | `'label'`            | Field name for display label    |
| `valueField`        | `string`                                | `'value'`            | Field name for value            |
| `disable`           | `boolean`                               | `false`              | Disable the dropdown            |
| `maxHeight`         | `number`                                | `300`                | Maximum height of dropdown list |
| `renderItem`        | `(item: DropdownItem) => React.Element` | -                    | Custom item renderer            |
| `renderLeftIcon`    | `() => React.Element`                   | -                    | Custom left icon (internal)     |
| `renderRightIcon`   | `() => React.Element`                   | -                    | Custom right icon (internal)    |

## DropdownItem Type

```typescript
interface DropdownItem {
  label: string;
  value: string | number;
  [key: string]: any; // Allow additional properties
}
```

## Custom Styling

You can customize the dropdown using Tailwind classes:

```tsx
<BaseDropdown
  data={data}
  value={value}
  onChange={onChange}
  containerClassName="mb-6"
  labelClassName="text-lg font-bold"
  dropdownClassName="shadow-lg"
/>
```

## Advanced: Custom Item Renderer

```tsx
<BaseDropdown
  data={users}
  value={selectedUser}
  onChange={(item) => setSelectedUser(item.value)}
  renderItem={(item) => (
    <View className="flex-row items-center p-3">
      <Image source={{ uri: item.avatar }} className="mr-3 h-8 w-8 rounded-full" />
      <View>
        <BaseText text={item.label} className="font-semibold" />
        <BaseText text={item.email} variant="caption" color="foreground-secondary" />
      </View>
    </View>
  )}
/>
```

## Notes

- The component automatically adapts to light/dark theme
- Icons should be positioned using the `leftIcon` and `rightIcon` props
- Search is disabled by default; enable with `search={true}`
- Error state takes precedence over helper text
- All dropdown items must have `label` and `value` fields (or specify custom fields with `labelField` and `valueField`)

## Dependencies

- `react-native-element-dropdown`: ^2.12.1
- Requires NativeWind/Tailwind CSS setup
