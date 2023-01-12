import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  modalView: {
    margin: 10,
    width: 300,
    paddingVertical: 90,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(256, 256, 256, 1)',
    flexDirection: 'column',
    borderRadius: 10,
  },

  ButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});
