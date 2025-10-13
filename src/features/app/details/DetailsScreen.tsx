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
      <SafeAreaView className="flex-1 bg-white" edges={['top']}>
        <Header title="Details" useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#3B82F6" />
        </View>
      </SafeAreaView>
    );
  }

  if (!item) {
    return (
      <SafeAreaView className="flex-1 bg-white" edges={['top']}>
        <Header title="Details" useDefaultBack showBorder />
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">Item not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <Header title={item.name} useDefaultBack showBorder />

      <ScrollView className="flex-1" contentContainerClassName="p-6">
        {/* Category Badge */}
        <View className="mb-4">
          <Text className="inline-flex self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            {item.category}
          </Text>
        </View>

        {/* Title */}
        <Text className="mb-2 text-2xl font-bold text-gray-900">{item.name}</Text>

        {/* Description */}
        <Text className="mb-6 text-base text-gray-600">{item.description}</Text>

        {/* Details Section */}
        <View className="mb-6">
          <Text className="mb-2 text-lg font-semibold text-gray-900">About</Text>
          <Text className="text-base leading-6 text-gray-700">{item.details}</Text>
        </View>

        {/* Features Section */}
        <View className="mb-6">
          <Text className="mb-3 text-lg font-semibold text-gray-900">Key Features</Text>
          {item.features.map((feature, index) => (
            <View key={index} className="mb-2 flex-row items-start">
              <Text className="mr-2 text-blue-600">•</Text>
              <Text className="flex-1 text-base text-gray-700">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Additional Info Card */}
        <View className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <Text className="mb-1 text-sm font-medium text-gray-900">Item ID</Text>
          <Text className="font-mono text-sm text-gray-600">{item.id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

