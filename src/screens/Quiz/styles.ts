import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    title: {
        fontSize: 45,
        fontFamily: 'MountainsofChristmas_700Bold',
        marginBottom: 25,
        color: '#ff9d00ff',
        textShadowColor: '#8B4513',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 1,
    },
    subtitle: {
        fontSize: 14,
        color: '#ffb300ff',
    },
    questionCard: {
        backgroundColor: '#5196347b',
        borderRadius: 14,
        padding: 16,
        marginBottom: 20,
        alignItems: 'center',
    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: '#8B4513',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    optionsContainer: {
        width: '100%',
    },
    optionButton: {
        backgroundColor: '#154d1aff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 6,
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
    progressText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff9d00ff',
        marginBottom: 10,
        textShadowColor: '#8B4513',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  },
  loadingText: {
  marginTop: 12,
  color: '#ffb300ff',
  fontSize: 16,
  textAlign: 'center',
},

errorText: {
  color: '#ffb300ff',
  fontSize: 16,
  textAlign: 'center',
  paddingHorizontal: 20,
}
});