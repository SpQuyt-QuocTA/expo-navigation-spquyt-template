import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { APP_ROUTES } from '@/navigation/routes';
import { OverviewScreenNavigationProp } from './types';
import { useItems } from './hooks/useItems';
import { useLogout } from './hooks/useLogout';
import { userStore } from '@/store/userStore';
import Header from '@/components/header/Header';
import BaseButton from '@/components/button/BaseButton';
import { ArrowRight } from '@/components/icons';

export default function OverviewScreen() {
  const navigation = useNavigation<OverviewScreenNavigationProp>();
  const { items, isLoading } = useItems();
  const { logout } = useLogout();
  const user = userStore((state) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <Header
        title="Overview"
        rightElement={
          <BaseButton
            title="Logout"
            onPress={logout}
            containerClassName="min-w-0 h-8 bg-transparent px-3 py-1"
            textClassName="text-sm font-semibold text-red-600"
          />
        }
        showBorder
      />

      {/* User Info Card */}
      {user && (
        <View className="mx-4 mt-4 rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
          <View className="flex-row items-center gap-x-2">
            <View>
              <Text className="text-lg font-bold text-gray-900">Welcome back</Text>
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <Text className="text-lg font-bold text-white">
                {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">{user.name || 'User'}</Text>
              <Text className="text-sm text-gray-600">{user.email}</Text>
            </View>
          </View>
        </View>
      )}

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
            className="mb-4 rounded-lg border border-gray-200 bg-white p-4"
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
                <Text className="mt-1 text-sm text-gray-600">{item.description}</Text>
                <View className="mt-2">
                  <Text className="text-xs font-medium text-blue-600">{item.category}</Text>
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
            <Text className="text-gray-500">No items available</Text>
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

