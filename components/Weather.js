import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main:  '-',
        description: '-',
        icon: '-',
        temp: 0,
        tempmin: 0,
        tempmax: 0,
        pressure: 0,
        humidity: 0,
        place: '-',
        country: '-'
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=9e50b3e949ddb7b55c285daba415e63e`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    icon: json.weather[0].icon,
                    temp: json.main.temp,
                    tempmin: json.main.temp_min,
                    tempmax: json.main.temp_max,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity,
                    place: json.name,
                    country: json.sys.country });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View>
                <Text style={styles.stylefont}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    stylefont: {
        color: '#2E3D50',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop: 25
    },
})