import React from 'react'
import {StyleSheet, View, Alert, Text} from 'react-native'
import firebase from "../api/firebase/firebase";
import {TextInput, Button} from 'react-native-paper';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        passVisibility: true
    };

    handleEmailChange = email => {
        this.setState({email})
    };

    handlePasswordChange = password => {
        this.setState({password})
    };

    handlePasswordVisibilityChange = () => {
        const passVisibility = !this.state.passVisibility;
        this.setState({passVisibility});
    };

    login = () => {
        const {email, password} = this.state;

        /*
        try {
            if (email.length > 0 && password.length > 0) {
                // this.props.navigation.navigate('App');
                console.log('1');
            }
        } catch (error) {
            alert(error);
        }
        */
        console.log('2');

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                console.log(res);
                console.log('3');
                console.log('User logged-in successfully!');
                this.setState({
                    isLoading: false,
                    email: '',
                    password: ''
                });
                this.props.navigation.navigate('App');
                console.log('4');
            })
            .catch(error => {
                Alert.alert(
                    "Ooops",
                    `${error}`,
                    [
                        {text: "OK", onPress: () => this.props.navigation.navigate('Auth')}
                    ],
                    {cancelable: true}
                );
            })
    };

    goToSignup = () => this.props.navigation.navigate('Signup');

    render() {
        const {email, password, passVisibility} = this.state;

        return (
            <View style={styles.container}>
                {console.log('5')}
                <View>
                    <Text style={styles.topLoginText}>Login</Text>
                    <Text style={styles.topWelcomeText}>Welcome back</Text>
                </View>
                <View style={styles.loginFieldContainer}>
                    <View style={styles.emailTextInput}>
                    <View style={{marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 5}}>
                        <TextInput
                            style={styles.textField}
                            mode='outlined'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            autoCapitalize='none'
                            theme={{
                                colors: {
                                    placeholder: 'grey', text: 'white', primary: '#007AFF',
                                    underlineColor: 'transparent',
                                }
                            }}
                            onChangeText={this.handleEmailChange}
                        />
                    </View>
                    <View style={{marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 5}}>
                        <TextInput
                            style={styles.textField}
                            theme={{
                                colors: {
                                    placeholder: 'grey', text: 'white', primary: '#007AFF',
                                    underlineColor: 'transparent',
                                }
                            }}
                            right={<TextInput.Icon
                                style={{color: 'red'}}
                                size={18}
                                color='grey'
                                name="eye"
                                onPress={this.handlePasswordVisibilityChange}
                            />}
                            mode='outlined'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            secureTextEntry={passVisibility}
                            onChangeText={this.handlePasswordChange}
                        />
                    </View>
                    </View>
                    <Button
                        style={styles.loginButton}
                        title={"Login"}
                        mode="contained"
                        onPress={this.login}
                    >Login
                    </Button>
                    <Button
                        title='Signup'
                        onPress={this.goToSignup}>
                        <Text style={{color:"#007AFF"}}>Signup</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020202',
        justifyContent: 'center'
    },
    loginFieldContainer: {
        alignItems: 'center',
    },
    topLoginText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,
    },
    topWelcomeText: {
        fontWeight: '100',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,

    },
    emailTextInput: {
        margin: 5,
        width: '100%',
    },
    textField: {
        height: 50,
        backgroundColor: '#0E0E0F',
    },
    loginButton: {
        width: 165,
        height: 45,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#007AFF',
        borderRadius: 100,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});