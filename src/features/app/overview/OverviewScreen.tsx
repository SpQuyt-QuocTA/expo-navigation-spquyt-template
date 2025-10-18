import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { APP_ROUTES } from '@/navigation/routes';
import { OverviewScreenNavigationProp } from './types';
import { useItems } from './hooks/useItems';
import { useLogout } from './hooks/useLogout';
import { userStore } from '@/store/userStore';
import BaseHeader from '@/components/header/BaseHeader';
import BaseButton from '@/components/button/BaseButton';
import ThemeToggle from '@/components/theme-toggle/ThemeToggle';
import LanguageSelector from '@/components/language-selector/LanguageSelector';
import BaseText from '@/components/text/BaseText';
import { ArrowRight } from '@/components/icons';

export default function OverviewScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<OverviewScreenNavigationProp>();
  const { items, isLoading } = useItems();
  const { logout } = useLogout();
  const user = userStore((state) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <BaseHeader
        title={t('overview.title')}
        leftElement={
          <View className="flex-row gap-x-2">
            <ThemeToggle containerClassName="h-8 px-2 py-1" textClassName="text-xs" />
          </View>
        }
        rightElement={
          <BaseButton
            title={t('common.logout')}
            onPress={logout}
            containerClassName="min-w-0 h-8 bg-transparent px-3 py-1"
            textClassName="text-sm font-semibold text-error"
          />
        }
        showBorder
      />

      {user && (
        <View className="mx-4 mt-4 rounded-lg border border-border bg-blue-50 p-4">
          <View className="flex-row items-center gap-x-2">
            <View>
              <BaseText i18nKey="overview.welcomeBack" variant="bodyLarge" bold />
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-full bg-primary">
              <BaseText variant="bodyLarge" bold className="text-white">
                {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
              </BaseText>
            </View>
            <View className="flex-1">
              <BaseText text={user.name || 'User'} variant="body" bold />
              <BaseText text={user.email} variant="bodySmall" color="foreground-secondary" />
            </View>
          </View>
        </View>
      )}

      <View className='my-4 mx-4'>
        <LanguageSelector containerClassName="h-8 px-2 py-1" textClassName="text-xs" />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(APP_ROUTES.DETAILS, {
                itemId: item.id,
              })
            }
            className="mb-4 rounded-lg border border-border bg-card p-4"
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <BaseText text={item.name} variant="bodyLarge" bold />
                <BaseText text={item.description} variant="bodySmall" color="foreground-secondary" className="mt-1" />
                <View className="mt-2">
                  <BaseText text={item.category} variant="caption" color="primary" bold />
                </View>
              </View>
              <View className="ml-3">
                <ArrowRight width={20} height={20} fill="#9CA3AF" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <BaseText i18nKey="overview.noItems" color="foreground-secondary" />
          </View>
        }
        refreshing={isLoading}
        onRefresh={() => {
          // TODO: Implement refresh
        }}
      />
    </SafeAreaView>
  );
}
