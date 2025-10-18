# BaseHeader Component

A flexible header component with left/right elements and title.

## Features

- Left/right element support (back button, icons, etc.)
- Optional title (centered)
- Optional border
- Fully customizable via className props
- TypeScript typed
- Tailwind CSS styling

## Basic Usage

```tsx
import BaseHeader from '@/components/header/BaseHeader';

<BaseHeader title="Screen Title" />;
```

## With Default Back Button

The easiest way to add a back button - automatically checks `canGoBack()`:

```tsx
<BaseHeader title="Details" useDefaultBack />
```

This is much cleaner than manually passing the back button component!

## With Custom Back Handler

```tsx
<BaseHeader
  title="Details"
  useDefaultBack
  onBackPress={() => {
    // Custom logic before going back
    console.log('Going back...');
    navigation.goBack();
  }}
/>
```

## With Custom Back Button

```tsx
<BaseHeader
  title="Details"
  leftElement={
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#111827" />
    </TouchableOpacity>
  }
/>
```

## With Right Action

```tsx
<BaseHeader
  title="Settings"
  rightElement={
    <TouchableOpacity onPress={handleSave}>
      <Text className="font-semibold text-blue-600">Save</Text>
    </TouchableOpacity>
  }
/>
```

## With Both Left and Right

```tsx
<BaseHeader
  title="Edit Profile"
  leftElement={
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#111827" />
    </TouchableOpacity>
  }
  rightElement={
    <TouchableOpacity onPress={handleSave}>
      <Icon name="check" size={24} color="#10B981" />
    </TouchableOpacity>
  }
  showBorder
/>
```

## Custom Styling

```tsx
// Dark header
<BaseHeader
  title="Dashboard"
  containerClassName="bg-gray-900 h-16"
  titleClassName="text-white text-xl"
/>

// With border
<BaseHeader
  title="Home"
  showBorder
/>

// Custom height
<BaseHeader
  title="Notifications"
  containerClassName="h-20"
/>
```

## Props

| Prop                 | Type        | Default | Description                             |
| -------------------- | ----------- | ------- | --------------------------------------- |
| `title`              | `string`    | -       | Header title (centered)                 |
| `leftElement`        | `ReactNode` | -       | Left side element                       |
| `rightElement`       | `ReactNode` | -       | Right side element                      |
| `useDefaultBack`     | `boolean`   | `false` | Show default back button (if canGoBack) |
| `onBackPress`        | `function`  | -       | Custom back press handler               |
| `showBorder`         | `boolean`   | `false` | Show bottom border                      |
| `containerClassName` | `string`    | -       | Header container styles                 |
| `titleClassName`     | `string`    | -       | Title text styles                       |
| `leftClassName`      | `string`    | -       | Left container styles                   |
| `rightClassName`     | `string`    | -       | Right container styles                  |

Plus all standard `ViewProps` from React Native.

## Default Styles

- **Container**: `h-14 px-4 flex-row items-center justify-between bg-white`
- **Title**: `text-lg font-semibold text-gray-900`
- **Border**: `border-b border-gray-200` (when `showBorder={true}`)

## Advanced Examples

### Multiple Actions

```tsx
<BaseHeader
  title="Messages"
  leftElement={
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#111827" />
    </TouchableOpacity>
  }
  rightElement={
    <View className="flex-row gap-x-4">
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="search" size={24} color="#111827" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMenu}>
        <Icon name="more-vertical" size={24} color="#111827" />
      </TouchableOpacity>
    </View>
  }
/>
```

### With Avatar

```tsx
<BaseHeader
  title="Profile"
  leftElement={
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={24} color="#111827" />
    </TouchableOpacity>
  }
  rightElement={<Image source={{ uri: user.avatar }} className="h-8 w-8 rounded-full" />}
/>
```

### No Title (Just Elements)

```tsx
<BaseHeader
  leftElement={<Image source={require('@/assets/logo.png')} className="h-8 w-24" />}
  rightElement={
    <TouchableOpacity onPress={handleNotifications}>
      <Icon name="bell" size={24} color="#111827" />
    </TouchableOpacity>
  }
/>
```

### With SafeAreaView

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView edges={['top']} className="bg-white">
  <BaseHeader title="Home" leftElement={<Icon name="menu" size={24} />} showBorder />
</SafeAreaView>;
```
