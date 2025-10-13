# OverlayLoading Component

A full-screen overlay loading indicator with optional message.

## Features

- Full-screen modal overlay
- Customizable loading message
- Customizable spinner color
- Tailwind CSS styling
- TypeScript typed
- Smooth fade animation

## Basic Usage

```tsx
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';

const [loading, setLoading] = useState(false);

<OverlayLoading visible={loading} />;
```

## With Message

```tsx
<OverlayLoading visible={loading} message="Logging in..." />
```

## With Custom Color

```tsx
<OverlayLoading visible={loading} message="Processing..." loadingColor="#10B981" />
```

## Custom Styling

```tsx
<OverlayLoading
  visible={loading}
  message="Please wait..."
  overlayClassName="bg-black/70"
  containerClassName="bg-gray-900 p-8"
  messageClassName="text-white text-lg"
  loadingColor="#FFFFFF"
/>
```

## Props

| Prop                 | Type      | Default      | Description                   |
| -------------------- | --------- | ------------ | ----------------------------- |
| `visible`            | `boolean` | **Required** | Show/hide overlay             |
| `message`            | `string`  | -            | Optional loading message      |
| `loadingColor`       | `string`  | `'#3B82F6'`  | Spinner color                 |
| `overlayClassName`   | `string`  | -            | Overlay background styles     |
| `containerClassName` | `string`  | -            | Loading card container styles |
| `messageClassName`   | `string`  | -            | Message text styles           |

Plus all standard `ViewProps` from React Native.

## Default Styles

- **Overlay**: `flex-1 items-center justify-center bg-black/50` (semi-transparent black)
- **Container**: `rounded-2xl bg-white p-6 shadow-lg` (white card)
- **Message**: `mt-4 text-center text-base text-gray-700`

## Usage Examples

### In Form Submission

```tsx
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await api.login(email, password);
  } finally {
    setLoading(false);
  }
};

return (
  <>
    <Form onSubmit={handleSubmit} />
    <OverlayLoading visible={loading} message="Logging in..." />
  </>
);
```

### In Data Fetching

```tsx
const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      await api.fetchData();
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

return (
  <>
    <DataView />
    <OverlayLoading visible={loading} message="Loading data..." />
  </>
);
```

### Dark Theme

```tsx
<OverlayLoading
  visible={loading}
  message="Processing..."
  overlayClassName="bg-black/80"
  containerClassName="bg-gray-800"
  messageClassName="text-white"
  loadingColor="#60A5FA"
/>
```

### Minimal (No Message)

```tsx
<OverlayLoading visible={loading} />
```

## Notes

- Uses React Native's `Modal` component for overlay
- `transparent` prop for see-through background
- `animationType="fade"` for smooth transitions
- `statusBarTranslucent` for full-screen overlay on Android
- Automatically blocks user interaction when visible
