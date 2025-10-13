# BaseButton Component

A flexible, accessible button component with customizable styling.

## Features

- Loading state with spinner
- Icon support (left/right)
- Disabled state
- Fully customizable via className props
- TypeScript typed
- Tailwind CSS styling

## Basic Usage

```tsx
import BaseButton from '@/components/button/BaseButton';

<BaseButton title="Submit" onPress={() => console.log('Pressed')} />;
```

## With Loading State

```tsx
const [loading, setLoading] = useState(false);

<BaseButton
  title="Submit"
  loading={loading}
  onPress={async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  }}
/>;
```

## With Icons

```tsx
import Icon from 'react-native-vector-icons/Feather';

<BaseButton
  title="Save"
  leftIcon={<Icon name="save" size={20} color="#FFFFFF" />}
  onPress={handleSave}
/>

<BaseButton
  title="Next"
  rightIcon={<Icon name="arrow-right" size={20} color="#FFFFFF" />}
  onPress={handleNext}
/>
```

## Custom Styling

```tsx
// Primary button (default)
<BaseButton title="Primary" onPress={handlePress} />

// Secondary button
<BaseButton
  title="Secondary"
  containerClassName="bg-gray-200"
  textClassName="text-gray-800"
  onPress={handlePress}
/>

// Outline button
<BaseButton
  title="Outline"
  containerClassName="bg-transparent border-2 border-blue-600"
  textClassName="text-blue-600"
  onPress={handlePress}
/>

// Large button
<BaseButton
  title="Large Button"
  containerClassName="h-14 px-8"
  textClassName="text-lg"
  onPress={handlePress}
/>

// Full width button
<BaseButton
  title="Full Width"
  containerClassName="w-full"
  onPress={handlePress}
/>
```

## Props

| Prop                 | Type        | Default     | Description                    |
| -------------------- | ----------- | ----------- | ------------------------------ |
| `title`              | `string`    | -           | Button text                    |
| `loading`            | `boolean`   | `false`     | Shows loading spinner          |
| `leftIcon`           | `ReactNode` | -           | Icon on the left side          |
| `rightIcon`          | `ReactNode` | -           | Icon on the right side         |
| `disabled`           | `boolean`   | `false`     | Disables button                |
| `containerClassName` | `string`    | -           | Button container styles        |
| `textClassName`      | `string`    | -           | Button text styles             |
| `loadingColor`       | `string`    | `'#FFFFFF'` | Color of loading spinner       |
| `children`           | `ReactNode` | -           | Custom content (replaces text) |

Plus all standard `TouchableOpacityProps` from React Native.

## Default Styles

- **Container**: `h-11 px-6 rounded-lg bg-blue-600 flex-row items-center justify-center`
- **Text**: `text-base font-semibold text-white`
- **Disabled**: Automatically adds `opacity-50`

Simply pass className props to override or extend these defaults.

## Advanced Examples

### Button with custom content

```tsx
<BaseButton containerClassName="bg-green-600" onPress={handlePress}>
  <Icon name="check" size={20} color="#FFFFFF" />
  <Text className="ml-2 font-bold text-white">Success</Text>
</BaseButton>
```

### Disabled button

```tsx
<BaseButton title="Disabled" disabled onPress={handlePress} />
```

### Loading button

```tsx
<BaseButton title="Loading..." loading loadingColor="#FFFFFF" onPress={handlePress} />
```
