import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import firebase from "../api/firebase/firebase";
import { Button, TextInput } from 'react-native-paper';

export default class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        phone: '',
        name: '',
        emailError: false,
        passwordError: false,
        phoneError: false,
        nameError: false,
        passVisibility: true
    };

    handleNameChange = name => {
        this.setState({name})
    };

    handlePhoneChange = phone => {
        this.setState({phone})
    };

    handleEmailChange = email => {
        this.setState({email});
        // this.emailValidation();
    };

    handlePasswordChange = password => {
        this.setState({password});
        // this.passwordValidation();
    };

    handlePasswordVisibilityChange = () => {
        const passVisibility = !this.state.passVisibility;
        this.setState({passVisibility});
    };

    onSignup = () => {
        const email = this.emailValidation();
        const password = this.passwordValidation();
        const name = this.nameValidation();
        const phone = this.phoneValidation();
        if (email && password && name && phone) {
            this.setState({
                isLoading: true,
            });
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.name,
                        phone: this.state.phone
                    });
                    console.log('User registered successfully!');
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(this.state.email, this.state.password)
                        .then((res) => {
                            console.log(res);
                            this.props.navigation.navigate('App')
                        })
                        .catch(error => {
                            Alert.alert(
                                "Error",
                                `${error}`,
                                [
                                    { text: "OK", onPress: () => this.props.navigation.navigate('Auth') }
                                ],
                                { cancelable: true }
                            );
                        });
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: '',
                        name: '',
                        phone: ''
                    });
                })
                .catch(error =>
                    Alert.alert(
                        "Error",
                        `${error}`,
                        [
                            { text: "OK", onPress: () => this.props.navigation.navigate('Auth') }
                        ],
                        { cancelable: true }
                    )
                )
        } else {
            if (!email) { this.setState({emailError: true})}
            if (!password) { this.setState({passwordError: true})}
            if (!name) { this.setState({nameError: true})}
            if (!phone) { this.setState({phoneError: true})}
        }
    };
registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to sign up!')
    } else {
        this.setState({
            isLoading: true,
        });
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: this.state.displayName
                });
                console.log('User registered successfully!');
                this.setState({
                    isLoading: false,
                    displayName: '',
                    email: '',
                    password: ''
                });
                this.props.navigation.navigate('Login')
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }
};

nameValidation = () => {
    if (this.state.name.trim().length < 1) {
        this.setState({nameError: true});
        return false
    } else {
        this.setState({nameError: false});
        return true
    }
};

phoneValidation = () => {
    if (this.state.phone.length < 10) {
        this.setState({phoneError: true});
        return false
    } else {
        this.setState({phoneError: false});
        return true
    }
};

emailValidation = () => {
    if (this.state.email === '') {
        this.setState({emailError: true});
        return false
    }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let reCheck = re.test(this.state.email);
    if (reCheck) {
        this.setState({emailError: false});
        return true
    } else {
        this.setState({emailError: true});
        return false
    }
};

passwordValidation = () => {
    if (this.state.password.length < 8) {
        this.setState({passwordError: true});
        return false
    } else {
        this.setState({passwordError: false});
        return true
    }
};

goToLogin = () => this.props.navigation.navigate('Login');
render() {
    const {passVisibility} = this.state;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.topSignupText}>Sup!</Text>
                <Text style={styles.topJoinText}>Welcome</Text>
            </View>
            <View style={styles.signupFieldContainer}>
                <View style={styles.emailTextInput}>
            <View style={styles.textInputePosition}>
                <TextInput
                    style={styles.textField}
                    name='name'
                    value={this.state.name}
                    placeholder='Enter name'
                    autoCapitalize='none'
                    onChangeText={this.handleNameChange}
                    onBlur={() => this.nameValidation()}
                    mode='outlined'
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'white', primary: '#007AFF',
                            underlineColor: 'transparent',
                        }
                    }}
                />
                <Text
                    style={styles.error}>
                    {this.state.nameError ? 'error' : ''}
                </Text>
            </View>
            <View style={styles.textInputePosition}>
                <TextInput
                    style={styles.textField}
                    name='phone'
                    value={this.state.phone}
                    placeholder='Enter phone'
                    autoCapitalize='none'
                    keyboardType='numeric'
                    onChangeText={this.handlePhoneChange}
                    onBlur={() => this.phoneValidation()}
                    mode='outlined'
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'white', primary: '#007AFF',
                            underlineColor: 'transparent',
                        }
                    }}
                />
                <Text
                    style={styles.error}>
                    {this.state.phoneError ? 'error' : ''}
                </Text>
            </View>
            <View style={styles.textInputePosition}>
                <TextInput
                    style={styles.textField}
                    name='email'
                    value={this.state.email}
                    placeholder='Enter email'
                    autoCapitalize='none'
                    onChangeText={this.handleEmailChange}
                    onBlur={() => this.emailValidation()}
                    mode='outlined'
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'white', primary: '#007AFF',
                            underlineColor: 'transparent',
                        }
                    }}
                />
                <Text
                    style={styles.error}>
                    {this.state.emailError ? 'error' : ''}
                </Text>
            </View>
            <View style={styles.textInputePosition}>
                <TextInput
                    style={styles.textField}
                    name='password'
                    value={this.state.password}
                    placeholder='Enter password'
                    secureTextEntry={passVisibility}
                    onChangeText={this.handlePasswordChange}
                    onBlur={() => this.passwordValidation()}
                    mode='outlined'
                    right={<TextInput.Icon
                        style={{color: 'red'}}
                        size={18}
                        color='grey'
                        name="eye"
                        onPress={this.handlePasswordVisibilityChange}/>}
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'white', primary: '#007AFF',
                            underlineColor: 'transparent',
                        }
                    }}
                />
                <Text
                    style={styles.error}>
                    {this.state.passwordError ? 'error' : ''}
                </Text>
            </View>
            </View>
            <Button title='Signup'
                    style={styles.signupButton}
                    mode="contained"
                    onPress={this.onSignup}
            >Signup
            </Button>
            <Button title='Go to Login' onPress={this.goToLogin}>
                <Text style={{color:"#007AFF"}}>Go to Login</Text>
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
    signupFieldContainer: {
        alignItems: 'center',
    },
    emailTextInput: {
        margin: 5,
        width: '100%',
    },
    textInputePosition: {
        marginLeft: 15,
        marginRight: 15,
    },
    topSignupText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,
    },
    topJoinText: {
        fontWeight: '100',
        color: 'white',
        fontSize: 35,
        marginLeft: 15,
    },
    error: {
        color: 'red',
        marginBottom: 0
    },
    textField: {
        height: 50,
        backgroundColor: '#0E0E0F',
    },
    signupButton: {
        width: 165,
        height: 45,
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#007AFF',
        borderRadius: 100,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});