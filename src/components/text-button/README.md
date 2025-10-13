# TextButton Component

A text-only button component for inline text links. Supports both simple and advanced modes.

## Simple Mode (Link at End)

```tsx
import TextButton from '@/components/text-button/TextButton';

<TextButton
  text="Don't have an account?"
  linkText="Sign Up"
  onPress={() => navigation.navigate('SignUp')}
/>;
```

## Advanced Mode (Link Anywhere)

Use `children` for full control of text and link positioning:

```tsx
import { Text } from 'react-native';

// Link in the middle
<TextButton onPress={handleTerms}>
  <Text className="text-center text-gray-600">
    By signing up, you agree to our{' '}
    <Text className="text-blue-600 font-semibold">Terms of Service</Text>
    {' '}and Privacy Policy
  </Text>
</TextButton>

// Link at the beginning
<TextButton onPress={handleClick}>
  <Text className="text-center text-gray-600">
    <Text className="text-blue-600 font-semibold">Click here</Text>
    {' '}to continue
  </Text>
</TextButton>

// Multiple links (use multiple TextButton components)
<View>
  <TextButton onPress={handleTerms}>
    <Text className="text-center text-gray-600">
      Read our{' '}
      <Text className="text-blue-600 font-semibold">Terms</Text>
    </Text>
  </TextButton>
  <TextButton onPress={handlePrivacy}>
    <Text className="text-center text-gray-600">
      and{' '}
      <Text className="text-blue-600 font-semibold">Privacy Policy</Text>
    </Text>
  </TextButton>
</View>
```

## Props

| Prop                 | Type        | Default                         | Description                       |
| -------------------- | ----------- | ------------------------------- | --------------------------------- |
| `text`               | `string`    | -                               | Text before link (simple mode)    |
| `linkText`           | `string`    | -                               | Link text (simple mode)           |
| `children`           | `ReactNode` | -                               | Custom content (advanced mode)    |
| `textClassName`      | `string`    | `'text-center text-gray-600'`   | Text styles (simple mode only)    |
| `linkClassName`      | `string`    | `'text-blue-600 font-semibold'` | Link styles (simple mode only)    |
| `containerClassName` | `string`    | -                               | TouchableOpacity container styles |

Plus all `TouchableOpacityProps`.

## Examples

### Custom Styling (Simple Mode)

```tsx
<TextButton
  text="Already have an account?"
  linkText="Login"
  textClassName="text-left text-gray-700"
  linkClassName="text-green-600 underline"
  containerClassName="mt-6"
  onPress={handleLogin}
/>
```

### Complex Text Patterns

```tsx
// Link with icon
<TextButton onPress={handleHelp}>
  <View className="flex-row items-center justify-center">
    <Icon name="help-circle" size={16} color="#9CA3AF" />
    <Text className="ml-1 text-gray-600">
      Need help?{' '}
      <Text className="text-blue-600 font-semibold">Contact Support</Text>
    </Text>
  </View>
</TextButton>

// Multi-line with link
<TextButton onPress={handleMore}>
  <Text className="text-center text-gray-600">
    Want to learn more about our features?{'\n'}
    <Text className="text-blue-600 font-semibold">Read the documentation</Text>
  </Text>
</TextButton>
```
