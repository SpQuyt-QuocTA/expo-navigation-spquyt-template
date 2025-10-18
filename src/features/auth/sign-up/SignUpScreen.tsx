import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AUTH_ROUTES } from '@/navigation/routes';
import { useSignUp } from './hooks/useSignUp';
import { SignUpScreenNavigationProp } from './types';
import FormInput from '@/components/form-input/FormInput';
import BaseButton from '@/components/button/BaseButton';
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';
import BaseText from '@/components/text/BaseText';
import { TouchableOpacity, View } from 'react-native';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const { signUp, loading } = useSignUp();
  const { control, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    await signUp(data.name, data.email, data.password);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-6 justify-center">
        <BaseText i18nKey="auth.createAccount" variant="h2" className="mb-8" />

        <FormInput
          control={control}
          name="name"
          label={t('auth.fullName')}
          placeholder={t('auth.enterFullName')}
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="email"
          label={t('auth.email')}
          placeholder={t('auth.enterEmail')}
          keyboardType="email-address"
          autoCapitalize="none"
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="password"
          label={t('auth.password')}
          placeholder={t('auth.enterPassword')}
          secureTextEntry
          containerClassName="mb-4"
        />

        <FormInput
          control={control}
          name="confirmPassword"
          label={t('auth.confirmPassword')}
          placeholder={t('auth.confirmPasswordPlaceholder')}
          secureTextEntry
          containerClassName="mb-6"
        />

        <BaseButton onPress={handleSubmit(onSubmit)} title={t('auth.signUp')} />

        <TouchableOpacity
          onPress={() => navigation.navigate(AUTH_ROUTES.LOGIN)}
          className="mt-4"
        >
          <BaseText align="center" color="foreground-secondary" className="mt-4">
            {t('auth.alreadyHaveAccount')}{' '}
            <BaseText color="primary" bold>{t('auth.login')}</BaseText>
          </BaseText>
        </TouchableOpacity>
      </View>

      <OverlayLoading visible={loading} message={t('auth.creatingAccount')} />
    </SafeAreaView>
  );
}
