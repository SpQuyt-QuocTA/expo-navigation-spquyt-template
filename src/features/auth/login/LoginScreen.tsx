import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AUTH_ROUTES } from '@/navigation/routes';
import { useLogin } from './hooks/useLogin';
import { LoginScreenNavigationProp } from './types';
import FormInput from '@/components/form-input/FormInput';
import BaseButton from '@/components/button/BaseButton';
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';
import { Text, TouchableOpacity, View } from 'react-native';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login, loading } = useLogin();
  const { control, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-6 justify-center gap-y-4">
        <Text className="text-3xl font-bold mb-8 text-gray-900">Login</Text>

        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <FormInput
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <BaseButton onPress={handleSubmit(onSubmit)} title="Login" />

        <TouchableOpacity
          onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_UP)}
          className="mt-4"
        >
          <Text className="text-center text-gray-600">
            Don't have an account?{' '}
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <OverlayLoading visible={loading} message="Logging in..." />
    </SafeAreaView>
  );
}

