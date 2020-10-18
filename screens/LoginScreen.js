import React, {Component, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import firebase from "../api/firebase/firebase";



class LoginScreen extends Component {
    state = {
        isMailValid: true,
        isPassValid: true,
    };

    checkMail = (email) => {

        if (email === "") {
            return this.setState({isMailValid: true});
        }

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({isMailValid: (re.test(email) ? true : false)});
    };

    checkPass = (pass) => {

        if (pass === "") {
            return this.setState({isPassValid: true});
        }

        let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

        this.setState({isPassValid: (re.test(pass) ? true : false)});
    };

    render() {
        const {isMailValid, isPassValid} = this.state;
        return (
            <View style={styles.container}>
                <Image style={{width: 168, height: 128, marginBottom: '20%'}}
                       source={require('../assets/Sup.png')}/>

                <TextInput style={styles.inputBox}
                           numberOfLines={1}
                           placeholder='Email'
                           keyboardType='email-address'
                           placeholderTextColor='#DDDDDD'
                           color='white'
                           onChangeText={(text) => this.checkMail(text)}
                />

                <Text style={{color: isMailValid ? '#1C1E21' : 'red'}}>
                    Email incorrect
                </Text>

                <TextInput
                    style={styles.inputBox}
                    numberOfLines={1}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#DDDDDD'
                    color='#DDDDDD'
                    onChangeText={(text) => this.checkPass(text)}
                />

                <Text style={{color: isPassValid ? '#1C1E21' : 'red'}}>
                    Pass incorrect
                </Text>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.props.navigation.navigate('Hello')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <Button
                        title={"Sign up"}
                        style={styles.signupButtonStyle}
                        onPress={() => this.props.navigation.navigate('Signup')}>
                        Sign up
                    </Button>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: 300,
        height: 50,
        fontSize: 15,
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: '#25272A',
        marginTop: 0,
        marginBottom: 0,
    },
    alertColor: {
        color: '#ff4040',
        fontSize: 11,
    },
    button: {
        marginTop: 15
    },
    buttonContainer: {
        width: 180,
        height: 45,
        backgroundColor: '#007AFF',
        borderRadius: 100,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    signupTextCont: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    signupButtonStyle: {
        fontSize: 16,
        color: 'red',
        width: 90
    },
    signupText: {
        fontSize: 16,
        color: '#3A3D3F',
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

});