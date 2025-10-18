# BaseText Component

Comprehensive text component with i18n support, theming, and flexible styling.

## Features

- ✅ i18n translation support
- ✅ Translation interpolation
- ✅ Predefined variants (h1, h2, h3, body, caption, etc.)
- ✅ Theme-aware colors
- ✅ Text modifiers (bold, italic, underline)
- ✅ Text alignment
- ✅ Full accessibility support
- ✅ Custom styling with NativeWind
- ✅ All native Text props

## Basic Usage

### With i18n Key

```tsx
import BaseText from '@/components/text/BaseText';

// Simple translation
<BaseText i18nKey="auth.login" />

// With variant
<BaseText i18nKey="auth.login" variant="h1" />

// With color
<BaseText i18nKey="auth.email" color="primary" />
```

### With i18n Interpolation

```tsx
// Translation file: "welcome": "Hello, {{name}}!"
<BaseText i18nKey="common.welcome" i18nValues={{ name: 'John' }} />
// Output: "Hello, John!"
```

### With Direct Text

```tsx
<BaseText text="Hello World" />
<BaseText text="Welcome" variant="h2" color="primary" />
```

### With Children

```tsx
<BaseText variant="body" color="foreground-secondary">
  Custom text content
</BaseText>
```

## Variants

```tsx
<BaseText variant="h1">Heading 1</BaseText>       // text-4xl font-bold
<BaseText variant="h2">Heading 2</BaseText>       // text-3xl font-bold
<BaseText variant="h3">Heading 3</BaseText>       // text-2xl font-bold
<BaseText variant="h4">Heading 4</BaseText>       // text-xl font-semibold
<BaseText variant="body">Body Text</BaseText>     // text-base (default)
<BaseText variant="bodyLarge">Large Body</BaseText> // text-lg
<BaseText variant="bodySmall">Small Body</BaseText> // text-sm
<BaseText variant="caption">Caption</BaseText>     // text-xs
<BaseText variant="label">Label</BaseText>         // text-sm font-medium
<BaseText variant="button">Button Text</BaseText>  // text-base font-semibold
```

## Colors

```tsx
<BaseText color="primary">Primary color</BaseText>
<BaseText color="foreground">Foreground (default)</BaseText>
<BaseText color="foreground-secondary">Secondary text</BaseText>
<BaseText color="error">Error message</BaseText>
<BaseText color="success">Success message</BaseText>
<BaseText color="warning">Warning message</BaseText>
```

## Modifiers

```tsx
<BaseText bold>Bold Text</BaseText>
<BaseText italic>Italic Text</BaseText>
<BaseText underline>Underlined Text</BaseText>
<BaseText bold italic underline>All Modifiers</BaseText>
```

## Alignment

```tsx
<BaseText align="left">Left aligned</BaseText>
<BaseText align="center">Center aligned</BaseText>
<BaseText align="right">Right aligned</BaseText>
<BaseText align="justify">Justified text</BaseText>
```

## Custom Styling

```tsx
// Override with custom className
<BaseText
  i18nKey="auth.login"
  className="text-2xl text-red-500 uppercase"
/>

// Combine with variants
<BaseText
  variant="body"
  color="primary"
  className="mt-4 px-2"
/>
```

## Accessibility

```tsx
<BaseText
  i18nKey="auth.login"
  testID="login-title"
  accessibilityLabel="Login Screen Title"
  accessibilityHint="This is the main heading"
  accessibilityRole="header"
/>
```

## Real-World Examples

### Form Label

```tsx
<BaseText i18nKey="auth.email" variant="label" color="foreground-secondary" />
```

### Error Message

```tsx
<BaseText i18nKey="errors.invalidEmail" variant="bodySmall" color="error" />
```

### Page Title

```tsx
<BaseText i18nKey="overview.title" variant="h1" color="foreground" className="mb-4" />
```

### Greeting with Interpolation

```tsx
<BaseText i18nKey="common.greeting" i18nValues={{ name: user.name }} variant="h2" color="primary" />
```

### Button Text

```tsx
<BaseText i18nKey="common.save" variant="button" color="primary" />
```

### Caption with Custom Style

```tsx
<BaseText
  i18nKey="details.itemId"
  variant="caption"
  color="foreground-secondary"
  className="font-mono"
/>
```

## Props Reference

| Prop                       | Type                                   | Default        | Description                          |
| -------------------------- | -------------------------------------- | -------------- | ------------------------------------ |
| `i18nKey`                  | `string`                               | -              | Translation key from i18n files      |
| `i18nValues`               | `Record<string, string\|number>`       | -              | Values for translation interpolation |
| `text`                     | `string`                               | -              | Direct text content (if no i18nKey)  |
| `variant`                  | `TextVariant`                          | `'body'`       | Predefined text variant              |
| `color`                    | `TextColor`                            | `'foreground'` | Theme color                          |
| `bold`                     | `boolean`                              | `false`        | Bold text                            |
| `italic`                   | `boolean`                              | `false`        | Italic text                          |
| `underline`                | `boolean`                              | `false`        | Underline text                       |
| `align`                    | `'left'\|'center'\|'right'\|'justify'` | `'left'`       | Text alignment                       |
| `className`                | `string`                               | `''`           | Custom NativeWind classes            |
| `testID`                   | `string`                               | -              | Test identifier                      |
| `accessibilityLabel`       | `string`                               | -              | Accessibility label                  |
| `accessibilityHint`        | `string`                               | -              | Accessibility hint                   |
| `accessibilityRole`        | `string`                               | `'text'`       | Accessibility role                   |
| ...All native `Text` props | -                                      | -              | numberOfLines, ellipsizeMode, etc.   |
