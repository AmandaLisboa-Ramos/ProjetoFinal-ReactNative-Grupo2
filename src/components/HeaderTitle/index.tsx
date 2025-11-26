import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
    title: string;
    subtitle?: string;
    showDecorative?: boolean;
};

export default function HeaderTitle({
    title,
    subtitle,
    showDecorative = true
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            {showDecorative && <View style={styles.decorativeLine} />}
        </View>
    );
}