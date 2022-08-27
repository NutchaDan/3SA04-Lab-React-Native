import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Forecast(props) {
    const imageicon = {url: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}
    return (
        <View>
            <Text style={styles.fontmain}>{props.place}</Text>
            <View style={styles.view}>
                <Image style={styles.image} source={imageicon} resizeMode={'contain'}/>
                <View>
                    <Text style={styles.fontmain}>{props.main}</Text>
                    <Text style={styles.fontdescription}>{props.description}</Text>
                    <Text style={styles.fonttemp}>{props.temp} °C</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fontmain: {
        color: '#5A6E3A',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 20,
        paddingTop: 15
    },
    fontdescription: {
        color: '#5A6C16',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 25
    },
    fonttemp: {
        color: '#667761',
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    view: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        paddingTop: '30%'
    }
})