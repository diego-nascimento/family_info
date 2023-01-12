import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {
  async function saveAsync<t>(key: string, data: t) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async function getDataAsync<t>(key: string): Promise<t | void> {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }

  return {
    saveAsync,
    getDataAsync,
  };
};
