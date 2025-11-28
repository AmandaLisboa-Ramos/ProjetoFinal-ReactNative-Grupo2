import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styles from './styles';

export default function BG({ children }: { children: React.ReactNode }) {
    const videoRef = useRef<Video>(null);

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('../../assets/BG_Video.mp4')}
                style={StyleSheet.absoluteFill}
                resizeMode={ResizeMode.COVER}
                shouldPlay
                isLooping
                isMuted={true}
            />

            <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
                {children}
            </View>
        </View>
    );
}