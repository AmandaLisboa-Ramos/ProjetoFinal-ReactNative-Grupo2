import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5196347b',
    borderRadius: 14,
    padding: 20,
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#8B4513',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  optionButton: {
    backgroundColor: '#154d1aff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: '#8B4513',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  correctOption: {
    backgroundColor: '#4caf50',
  },
  wrongOption: {
    backgroundColor: '#f44336',
  },
  correctText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  wrongText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
