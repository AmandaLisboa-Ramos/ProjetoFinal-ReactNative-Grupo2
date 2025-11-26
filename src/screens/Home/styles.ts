import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 140,
  },
  input: {
    width: '80%',
    height: 55,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 25,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'MountainsofChristmas_700Bold',
    color: '#011802ff',
    textShadowColor: '#08692dff',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0.5,
    marginBottom: 85,
    marginTop: -30,
  },
  buttonSecondary: {
    width: '45%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#0B6623',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
});