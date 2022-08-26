import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.view}>
            <Text style={styles.fontmain}>{props.main}</Text>
            <Text style={styles.fontdescription}>{props.description}</Text>
            <Text style={styles.fonttemp}>{props.temp} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fontmain: {
        color: '#5A6E3A',
        fontSize: '35px',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: '20px',
        paddingTop: '15px'
    },
    fontdescription: {
        color: '#5A6C16',
        fontSize: '18px',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: '30px'
    },
    fonttemp: {
        color: '#667761',
        fontSize: '25px',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})