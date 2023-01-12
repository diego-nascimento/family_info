import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    gap: 2,
  },
  ImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  CircularPhoto: {
    width: 40,
    height: 40,
  },
  Name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    position: 'absolute',
    right: -5,
    bottom: -1,
  },
});
