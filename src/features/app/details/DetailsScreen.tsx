import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { DetailsScreenProps } from './types';
import { useItemDetails } from './hooks/useItemDetails';
import Header from '@/components/header/Header';
import BaseText from '@/components/text/BaseText';

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { t } = useTranslation();
  const { itemId } = route.params;
  const { item, isLoading } = useItemDetails(itemId);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={['top']}>
        <Header title={t('details.title')} useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#3B82F6" />
        </View>
      </SafeAreaView>
    );
  }

  if (!item) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={['top']}>
        <Header title={t('details.title')} useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <BaseText i18nKey="details.itemNotFound" color="foreground-secondary" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <Header title={item.name} useDefaultBack showBorder />

      <ScrollView className="flex-1" contentContainerClassName="p-6">
        {/* Category Badge */}
        <View className="mb-4">
          <BaseText
            text={item.category}
            variant="caption"
            color="primary"
            bold
            className="inline-flex self-start rounded-full bg-blue-100 px-3 py-1"
          />
        </View>

        {/* Title */}
        <BaseText text={item.name} variant="h3" className="mb-2" />

        {/* Description */}
        <BaseText text={item.description} variant="body" color="foreground-secondary" className="mb-6" />

        {/* Details Section */}
        <View className="mb-6">
          <BaseText i18nKey="details.about" variant="h4" className="mb-2" />
          <BaseText text={item.details} variant="body" color="foreground-secondary" className="leading-6" />
        </View>

        {/* Features Section */}
        <View className="mb-6">
          <BaseText i18nKey="details.keyFeatures" variant="h4" className="mb-3" />
          {item.features.map((feature, index) => (
            <View key={index} className="mb-2 flex-row items-start">
              <BaseText text="•" color="primary" className="mr-2" />
              <BaseText text={feature} variant="body" color="foreground-secondary" className="flex-1" />
            </View>
          ))}
        </View>

        {/* Additional Info Card */}
        <View className="rounded-lg border border-border bg-background-secondary p-4">
          <BaseText i18nKey="details.itemId" variant="bodySmall" bold className="mb-1" />
          <BaseText text={item.id} variant="bodySmall" color="foreground-secondary" className="font-mono" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
