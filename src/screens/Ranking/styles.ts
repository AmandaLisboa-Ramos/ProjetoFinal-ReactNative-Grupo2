import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#ffb300ff',
    },
    rankingContainer: {
        backgroundColor: '#5196347b',
        borderRadius: 14,
        padding: 16,
        flex: 1,
        marginBottom: 80,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#5C1A1A',
    },
    headerText: {
        color: '#ffb300ff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    listContent: {
        paddingTop: 8,
    },
    rankingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#154d1aff',
        borderRadius: 8,
        padding: 12,
        marginVertical: 6,
    },
    positionBadge: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#ffb300ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    positionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemInfo: {
        flex: 1,
    },
    nameText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    scoreText: {
        color: '#ffb300ff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#154d1aff',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
