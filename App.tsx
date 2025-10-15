import './global.css';
import 'react-native-gesture-handler';

import { ThemeProvider } from './src/context/ThemeContext';
import NavigationProvider from './src/navigation/NavigationProvider';
import RootStack from './src/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <RootStack />
      </NavigationProvider>
    </ThemeProvider>
  );
}
