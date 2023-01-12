import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  ButtonContainer: {
    minWidth: 150,
    justifyContent: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#555',
  },
  ButtonText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  ButtonSave: {
    backgroundColor: '#0df',
  },
  ButtonCancel: {
    backgroundColor: 'transparent',
    borderColor: '#555',
  },
});
