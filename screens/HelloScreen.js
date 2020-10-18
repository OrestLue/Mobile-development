import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from "react-native";

class HelloScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 168, height: 128, marginBottom: '20%'}}
                       source={require('../assets/Sup.png')}/>
                <Text style={{color: 'white', fontSize: 15}}>Ah shit here we go again</Text>
            </View>
        );
    }
}

export default HelloScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center'
    },
});