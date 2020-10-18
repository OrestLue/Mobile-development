import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

export default HomeScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});