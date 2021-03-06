import { StyleSheet } from 'react-native';

export const index = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  isLoading: {
    flex: 1,
    paddingTop: 20,
  },
  listContainer: {
    flex: 9,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  formButton: {
    backgroundColor: '#c0c0c0',
    borderWidth: 0,
    borderRadius: 20,
    margin: 20,
  },
});

export const EmptyTags = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 100,
  },
  text: {
    fontSize: 20,
  },
});
