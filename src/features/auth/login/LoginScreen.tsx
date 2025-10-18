import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AUTH_ROUTES } from '@/navigation/routes';
import { useLogin } from './hooks/useLogin';
import { LoginScreenNavigationProp } from './types';
import FormInput from '@/components/form/input/FormInput';
import BaseButton from '@/components/button/BaseButton';
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';
import BaseText from '@/components/text/BaseText';
import { TouchableOpacity, View } from 'react-native';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login, loading } = useLogin();
  const { control, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-6 justify-center gap-y-4">
        <BaseText i18nKey="auth.login" variant="h2" className="mb-8" />

        <FormInput
          control={control}
          name="email"
          label={t('auth.email')}
          placeholder={t('auth.enterEmail')}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <FormInput
          control={control}
          name="password"
          label={t('auth.password')}
          placeholder={t('auth.enterPassword')}
          secureTextEntry
        />

        <BaseButton onPress={handleSubmit(onSubmit)} title={t('auth.login')} />

        <TouchableOpacity
          onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_UP)}
          className="mt-4"
        >
          <BaseText align="center" color="foreground-secondary" className="mt-4">
            {t('auth.dontHaveAccount')}{' '}
            <BaseText color="primary" bold>{t('auth.signUp')}</BaseText>
          </BaseText>
        </TouchableOpacity>
      </View>

      <OverlayLoading visible={loading} message={t('auth.loggingIn')} />
    </SafeAreaView>
  );
}

