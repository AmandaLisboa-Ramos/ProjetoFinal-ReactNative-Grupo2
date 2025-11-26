import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    question: TextStyle;
    optionButton: ViewStyle;
    optionText: TextStyle;
    correctOption: ViewStyle;
    wrongOption: ViewStyle;
    correctText: TextStyle;
    wrongText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
        backgroundColor: '#0a3100ff',
        padding: 20,
        borderRadius: 16,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#c41e3a', // Christmas red border
    },

    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#0f3d0f', // Dark green matching your theme
        textAlign: 'center',
        lineHeight: 28,
    },

    optionButton: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#e0e0e0ff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },

    optionText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        textAlign: 'center',
    },

    correctOption: {
        backgroundColor: '#4caf50', // Green for correct
        borderColor: '#2e7d32',
    },

    wrongOption: {
        backgroundColor: '#e53935', // Red for wrong
        borderColor: '#c62828',
    },

    correctText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

    wrongText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
