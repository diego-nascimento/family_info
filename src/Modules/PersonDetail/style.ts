import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#dfd',
  },
  container: {
    flex: 1,
    width: width,
    background: '#ddd',
  },
});
