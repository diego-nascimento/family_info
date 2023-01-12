import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Wrapper: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 7,
    backgroundColor: '#fff',
  },

  Container: {
    flexDirection: 'column',
  },
  Document: {
    flexDirection: 'row',
  },

  Label: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#111',
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: '#666',
  },

  DateInfoContainer: {
    marginTop: 10,
  },

  DateInfoLabel: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#111',
  },

  DateInfoValue: {
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#111',
  },
});
