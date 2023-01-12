import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Label: {
    position: 'absolute',
    top: -22,
    left: 12,
    fontSize: 16,
    fontWeight: '500',
  },

  Input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginLeft: 10,
    backgroundColor: 'white',
  },
});
