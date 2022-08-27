import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Forecast(props) {
    const image = {uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}
    return (
        <View>
            <Text style={styles.fontplace}>{props.place} ( {props.country} )</Text>
            <View style={styles.view}>
                <Image style={styles.image} source={image}/>
                <View>
                    <Text style={styles.fontmain}>{props.main}</Text>
                    <Text style={styles.fontdescription}>{props.description}</Text>
                    <Text style={styles.fonttemp}>{props.temp} °C</Text>
                </View>
            </View>
            <View>
                <View style={styles.viewtemp}>
                    <Text style={styles.temp}>temp min  : {props.tempmin}</Text>
                    <Text style={styles.temp}>temp max : {props.tempmax}</Text>
                    <Text style={styles.temp}>pressure   : {props.pressure}</Text>
                    <Text style={styles.temp}>humidity   : {props.humidity}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fontplace: {
        fontSize: 35,
        color: '#5A6C16',
        paddingBottom: '15%',
        textAlign: 'center'
    },
    fontmain: {
        color: '#5A6E3A',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 20
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
        justifyContent: 'center',
        backgroundColor: 'rgba(48, 54, 49, 0.1)',
        width: '100%',
        height: '45%',
        alignItems: 'center',
        borderRadius: 40,
    },
    viewtemp: {
        paddingTop: 50,
        
    },
    temp: {
        fontSize: 18,
        color: '#5A6C16'
    }
})