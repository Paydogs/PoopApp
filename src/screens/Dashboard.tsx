import { StyleSheet, Text, View} from 'react-native'
import { useLayoutEffect } from 'react';
import { Font, Colors } from '../theme';
import React from  'react'

type Props = {
    navigation: any;
};

export function Dashboard({ navigation }: Props) {
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={styles.container} >
            <Text style={styles.text } >PoopApp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: Font.bold,
        color: Colors.Light.theme_70,
        fontSize: 64
    }
});