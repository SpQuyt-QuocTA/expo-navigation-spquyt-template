import { useNavigation } from '@react-navigation/native';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { AUTH_ROUTES } from '@/navigation/routes';
import { useSignUp } from './hooks/useSignUp';
import { SignUpScreenNavigationProp, SignUpFormData } from './types';
import { signUpSchema } from './schema';
import FormInput from '@/components/form/input/FormInput';
import FormCheckbox from '@/components/form/checkbox/FormCheckbox';
import FormRadioGroup from '@/components/form/radio/FormRadioGroup';
import FormDropdown from '@/components/form/dropdown/FormDropdown';
import BaseButton from '@/components/button/BaseButton';
import BaseText from '@/components/text/BaseText';
import OverlayLoading from '@/components/overlay-loading/OverlayLoading';
import { DropdownItem } from '@/components/dropdown/types';

const COUNTRIES: DropdownItem[] = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'China', value: 'cn' },
  { label: 'India', value: 'in' },
  { label: 'Vietnam', value: 'vn' },
  { label: 'Singapore', value: 'sg' },
  { label: 'South Korea', value: 'kr' },
  { label: 'Thailand', value: 'th' },
  { label: 'Malaysia', value: 'my' },
  { label: 'Philippines', value: 'ph' },
  { label: 'Indonesia', value: 'id' },
  { label: 'Brazil', value: 'br' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Spain', value: 'es' },
  { label: 'Italy', value: 'it' },
];

const INDUSTRIES: DropdownItem[] = [
  { label: 'Technology & Software', value: 'technology' },
  { label: 'Healthcare & Medical', value: 'healthcare' },
  { label: 'Finance & Banking', value: 'finance' },
  { label: 'Education', value: 'education' },
  { label: 'Retail & E-commerce', value: 'retail' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'Real Estate', value: 'realestate' },
  { label: 'Hospitality & Tourism', value: 'hospitality' },
  { label: 'Transportation & Logistics', value: 'transportation' },
  { label: 'Marketing & Advertising', value: 'marketing' },
  { label: 'Construction', value: 'construction' },
  { label: 'Entertainment & Media', value: 'entertainment' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Energy & Utilities', value: 'energy' },
  { label: 'Legal Services', value: 'legal' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Other', value: 'other' },
];

export default function SignUpScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const { signUp, loading } = useSignUp();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      accountType: 'personal',
      country: '',
      skills: [{ name: '', level: 'beginner' }],
      newsletter: false,
      terms: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  });

  const accountType = watch('accountType');

  const onSubmit = async (data: SignUpFormData) => {
    console.log('Form Data:', data);
    await signUp(data.name, data.email, data.password);
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1">
        <View className="p-6">
          <BaseText i18nKey="auth.createAccount" variant="h2" className="mb-6" />

          <View className="mb-6">
            <BaseText text="Account Type" variant="label" className="mb-3" />
            <FormRadioGroup
              control={control}
              name="accountType"
              direction="horizontal"
              options={[
                { value: 'personal', label: 'Personal' },
                { value: 'business', label: 'Business' },
              ]}
            />
          </View>

          <View className="mb-6">
            <BaseText text="Basic Information" variant="h4" className="mb-4" />

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

            <FormDropdown
              control={control}
              name="country"
              label="Country"
              data={COUNTRIES}
              placeholder="Select your country"
              search
              searchPlaceholder="Search countries..."
              required
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
              containerClassName="mb-4"
            />
          </View>

          {accountType === 'personal' && (
            <View className="mb-6 p-4 bg-background-secondary rounded-lg border border-border">
              <BaseText text="Personal Details" variant="h4" className="mb-4" />

              <FormInput
                control={control}
                name="dateOfBirth"
                label="Date of Birth"
                placeholder="YYYY-MM-DD"
                containerClassName="mb-4"
              />

              <View className="mb-4">
                <BaseText text="Gender" variant="label" className="mb-3" />
                <FormRadioGroup
                  control={control}
                  name="gender"
                  direction="horizontal"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
              </View>
            </View>
          )}

          {accountType === 'business' && (
            <View className="mb-6 p-4 bg-background-secondary rounded-lg border border-border">
              <BaseText text="Business Details" variant="h4" className="mb-4" />

              <FormInput
                control={control}
                name="companyName"
                label="Company Name"
                placeholder="Enter company name"
                containerClassName="mb-4"
              />

              <FormInput
                control={control}
                name="taxId"
                label="Tax ID / Business Number"
                placeholder="Enter tax ID"
                containerClassName="mb-4"
              />

              <FormDropdown
                control={control}
                name="industry"
                label="Industry"
                data={INDUSTRIES}
                placeholder="Select your industry"
                search
                searchPlaceholder="Search industries..."
                required
                helperText="Choose the industry that best describes your business"
                containerClassName="mb-4"
              />
            </View>
          )}

          <View className="mb-6 p-4 bg-blue-50 rounded-lg border border-primary">
            <View className="flex-row items-center justify-between mb-4">
              <BaseText text="Skills" variant="h4" />
              <BaseButton
                title="+ Add Skill"
                onPress={() => append({ name: '', level: 'beginner' })}
                containerClassName="h-8 px-3 bg-primary"
                textClassName="text-xs text-white"
              />
            </View>

            {fields.map((field, index) => (
              <View
                key={field.id}
                className="mb-4 p-3 bg-white rounded-lg border border-border"
              >
                <View className="flex-row items-center justify-between mb-2">
                  <BaseText text={`Skill ${index + 1}`} variant="label" />
                  {fields.length > 1 && (
                    <TouchableOpacity onPress={() => remove(index)}>
                      <BaseText text="✕" color="error" bold />
                    </TouchableOpacity>
                  )}
                </View>

                <FormInput
                  control={control}
                  name={`skills.${index}.name`}
                  label="Skill Name"
                  placeholder="e.g. JavaScript, Marketing"
                  containerClassName="mb-3"
                />

                <FormRadioGroup
                  control={control}
                  name={`skills.${index}.level`}
                  direction="horizontal"
                  options={[
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'expert', label: 'Expert' },
                  ]}
                  containerClassName="mb-3"
                />
              </View>
            ))}

            {errors.skills && (
              <BaseText
                text={errors.skills.message || 'Please add at least one skill'}
                variant="caption"
                color="error"
                className="mt-2"
              />
            )}
          </View>

          <View className="mb-6">
            <BaseText text="Preferences" variant="h4" className="mb-4" />

            <FormCheckbox
              control={control}
              name="newsletter"
              label="Subscribe to newsletter for updates and promotions"
              containerClassName="mb-3"
            />

            <FormCheckbox
              control={control}
              name="terms"
              label="I agree to the Terms and Conditions and Privacy Policy"
            />
          </View>

          <BaseButton onPress={handleSubmit(onSubmit)} title="Create Account" />

          <TouchableOpacity
            onPress={() => navigation.navigate(AUTH_ROUTES.LOGIN)}
            className="mt-4"
          >
            <BaseText align="center" color="foreground-secondary" className="mt-4">
              {t('auth.alreadyHaveAccount')}{' '}
              <BaseText color="primary" bold>
                {t('auth.login')}
              </BaseText>
            </BaseText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <OverlayLoading visible={loading} message={t('auth.creatingAccount')} />
    </SafeAreaView>
  );
}
