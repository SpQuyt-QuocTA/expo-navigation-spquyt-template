import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { DetailsScreenProps } from './types';
import { useItemDetails } from './hooks/useItemDetails';
import Header from '@/components/header/Header';

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { itemId } = route.params;
  const { item, isLoading } = useItemDetails(itemId);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={['top']}>
        <Header title="Details" useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#3B82F6" />
        </View>
      </SafeAreaView>
    );
  }

  if (!item) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={['top']}>
        <Header title="Details" useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <Text className="text-foreground-secondary">Item not found</Text>
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
          <Text className="inline-flex self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-primary">
            {item.category}
          </Text>
        </View>

        {/* Title */}
        <Text className="mb-2 text-2xl font-bold text-foreground">{item.name}</Text>

        {/* Description */}
        <Text className="mb-6 text-base text-foreground-secondary">{item.description}</Text>

        {/* Details Section */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-foreground">About</Text>
          <Text className="text-base leading-6 text-foreground-secondary">{item.details}</Text>
        </View>

        {/* Features Section */}
        <View className="mb-6">
          <Text className="mb-3 text-lg font-semibold text-foreground">Key Features</Text>
          {item.features.map((feature, index) => (
            <View key={index} className="mb-2 flex-row items-start">
              <Text className="mr-2 text-primary">•</Text>
              <Text className="flex-1 text-base text-foreground-secondary">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Additional Info Card */}
        <View className="rounded-lg border border-border bg-background-secondary p-4">
          <Text className="mb-1 text-sm font-medium text-foreground">Item ID</Text>
          <Text className="font-mono text-sm text-foreground-secondary">{item.id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
