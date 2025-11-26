import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styles from './styles';

const { width, height } = Dimensions.get('window');

interface Snowflake {
    id: number;
    animatedValue: Animated.Value;
    left: number;
    size: number;
    duration: number;
}

export default function BG({ children }: { children: React.ReactNode }) {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
    const videoRef = useRef<Video>(null);

    useEffect(() => {
        const newSnowflakes = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            animatedValue: new Animated.Value(0),
            left: Math.random() * width,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 3000 + 2000,
        }));

        newSnowflakes.forEach((snowflake) => {
            animateSnowflake(snowflake);
        });

        setSnowflakes(newSnowflakes);
    }, []);

    const animateSnowflake = (snowflake: Snowflake): void => {
        snowflake.animatedValue.setValue(0);
        Animated.timing(snowflake.animatedValue, {
            toValue: 1,
            duration: snowflake.duration,
            useNativeDriver: true,
        }).start(() => {
            animateSnowflake(snowflake);
        });
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('../../assets/BG_Video.mp4')}
                style={StyleSheet.absoluteFill}
                resizeMode={ResizeMode.COVER}
                shouldPlay
                isLooping
                isMuted
            />

            <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
                {snowflakes.map((snowflake) => {
                    const translateY = snowflake.animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, height + 20],
                    });

                    return (
                        <Animated.View
                            key={snowflake.id}
                            style={[
                                styles.snowflake,
                                {
                                    left: snowflake.left,
                                    width: snowflake.size,
                                    height: snowflake.size,
                                    transform: [{ translateY }],
                                },
                            ]}
                        />
                    );
                })}

                {children}
            </View>
        </View>
    );
}