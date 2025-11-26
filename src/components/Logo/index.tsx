import React from 'react';
import { View, Image } from 'react-native';
import { styles} from './styles';

export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/Logo.png')} 
                style={styles.logoImage}
            />
        </View>
    );
}