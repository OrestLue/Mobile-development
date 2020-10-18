import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";

class SignupScreen extends Component {
    state = {
        isMailValid: true,
    };

    checkMail = (email) => {

        if (email === ""){
            return this.setState({isMailValid: true});
        }

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({isMailValid: (re.test(email) ? true : false)});
    };

    render() {
        const { isMailValid } = this.state;
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           numberOfLines={1}
                           placeholder='Email'
                           keyboardType='email-address'
                           placeholderTextColor='#DDDDDD'
                           color= 'red'
                           onChangeText={(text) => this.checkMail(text)}/>

                <Text style={{color: isMailValid ? '#1C1E21' : 'red'}}>
                    Email incorrect
                </Text>

                <TextInput
                    style={styles.inputBox}
                    numberOfLines={1}
                    placeholder='Name'
                    placeholderTextColor='#DDDDDD'
                    color= '#DDDDDD'
                />

                <Text/>

                <TextInput
                    style={styles.inputBox}
                    numberOfLines={1}
                    placeholder='Phone'
                    placeholderTextColor='#DDDDDD'
                    color= '#DDDDDD'
                />

                <Text/>

                <TextInput
                    style={styles.inputBox}
                    numberOfLines={1}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#DDDDDD'
                    color= '#DDDDDD'
                />

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Do back</Text>
                    <Button
                        title={"Login"}
                        style={styles.signupButtonStyle}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        Sign up
                    </Button>
                </View>
            </View>
        );
    }
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width:300,
        height: 50,
        borderRadius: 12,
        fontSize: 15,
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
        marginTop: 15,
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
        fontSize: 18,
        color: '#3A3D3F',
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
});