import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AUTH_ROUTES } from '@/navigation/routes';
import { useSignUp } from './hooks/useSignUp';
import { SignUpScreenNavigationProp } from './types';
import FormInput from '@/components/form-input/FormInput';
import BaseButton from '@/components/button/BaseButton';
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';
import { Text, TouchableOpacity, View } from 'react-native';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const { signUp, loading } = useSignUp();
  const { control, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    await signUp(data.name, data.email, data.password);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-6 justify-center">
        <Text className="text-3xl font-bold mb-8 text-foreground">Create Account</Text>

        <FormInput
          control={control}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
          containerClassName="mb-6"
        />

        <BaseButton onPress={handleSubmit(onSubmit)} title="Sign Up" />

        <TouchableOpacity
          onPress={() => navigation.navigate(AUTH_ROUTES.LOGIN)}
          className="mt-4"
        >
          <Text className="text-center text-foreground-secondary">
            Already have an account?{' '}
            <Text className="text-primary font-semibold">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <OverlayLoading visible={loading} message="Creating account..." />
    </SafeAreaView>
  );
}
