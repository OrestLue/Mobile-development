import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-paper';
import firebase from "../api/firebase/firebase";


export default class Home extends React.Component {
    state = {
        uid: '',
        displayName: ''
    };

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        };

        return (
            <View style={styles.container}>
                <View style={styles.topText}>
                    <Text style = {styles.textStyle}>
                        Hello,
                    </Text>
                    <Text style = {styles.textStyleName}>
                        {this.state.displayName}
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Button
                        style={styles.logoutButton}
                        color="white"
                        title="Logout"
                        onPress={() => this.signOut()}>
                        Logout
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020202',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,
    },
    textStyleName: {
        fontWeight: '300',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,
    },
    logoutButton: {
        width: 165,
        height: 45,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#292929',
        borderRadius: 100,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});