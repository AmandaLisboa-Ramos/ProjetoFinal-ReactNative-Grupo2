import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    title: TextStyle;
    subtitle: TextStyle;
    decorativeLine: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
        alignItems: 'center',
        marginBottom: 24,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 1,
    },

    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#e8f5e9',
        textAlign: 'center',
        marginBottom: 12,
        opacity: 0.95,
    },

    decorativeLine: {
        width: 60,
        height: 4,
        backgroundColor: '#c41e3a',
        borderRadius: 2,
        marginTop: 8,
    },
});