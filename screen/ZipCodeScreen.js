import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10110' },
    { place: 'Nakhon Sawan', code: '60130' },
    { place: 'Surat Thani', code: '84130' },
    { place: 'Trang', code: '92110' },
    { place: 'Yala', code: '95120' },
    { place: 'Ayutthaya', code: '13150' },
    { place: 'Si Sa Ket', code: '33240' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#94B0B7',
        padding: 15
    },
    zipPlace: {
        fontSize: 20,
        paddingLeft: 40
    },
    zipCode: {
        fontSize: 20,
        paddingRight: 50,
        color: '#1C2135'
    }
})