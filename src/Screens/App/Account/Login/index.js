import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ActivityIndicator, Alert } from 'react-native'
// import AppLogo from '../../Components/AppLogo'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const axios = require('axios');

class Login extends Component {

    constructor() {
        super()
        this.state = {
            language: '',
            userName: '',
            email: 'abc@gmail.com',
            password: 'hdhdhhd',
            repeatPassword: '',
            passShow: true,
            repeatPassShow: true,
            loader: false
        }
    }

    // signin = () => {
    //   this.props.authWithFacebook(this.props.navigation);
    // }
    componentDidMount() {
        // this.props.getUserSession(this.props.navigation);
        // var na = this.props.navigation
        // console.log(na, 'na______________na')

        // AsyncStorage.getItem('userData').then((value) => {
        //   var userData = JSON.parse(value)
        //   console.log(userData, 'userData______userData')
        //   if (userData) {
        //     this.props.navigation.navigate('App')
        //   }
        //   else if (userData == null) {
        //     // this.props.navigation.navigate('IntroScreen')
        //   }
        // })

        // setTimeout(() => { this.props.navigation.navigate('IntroScreen') }, 2000)


    }

    signIn() {
        const { email, password, loader } = this.state
        var formData = new FormData()
        if (email == '' || password == '') {
            Alert.alert('', 'Please type email and password')
        }
        else {
            this.setState({ loader: true })
            formData.append('email', email);
            formData.append('password', password);
            axios.post('https://freeonlineskills.com/maddad/login', formData,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
                .then(function (response) {
                    if (response && response.data && response.data.status == 'success') {
                        AsyncStorage.setItem('userData', JSON.stringify(response.data.collection))
                        this.props.navigation.navigate('App')

                    }
                    // handle success
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
        // this.props.navigation.navigate('App')
    }

    render() {
        const { email, password, passShow, loader } = this.state
        // let logo = require('./../../../images/logo.png')
        let logo = require('../../../../../images/logo.png')
        let hand = require('../../../../../images/hand.png')
        // let hand = require('../../../../../images/')


        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                {/* <Text>PK Orders</Text> */}
                <View style={{ height: 60, }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#f01d1f" />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Image source={logo} style={{ height: 100, width: 180 }} />
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ color: '#1713c0', fontSize: 22, fontWeight: '700', marginBottom: 20 }}>Sign In</Text>

                    <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 10, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                        <TextInput
                            onChangeText={(value) => { this.setState({ email: value }) }}
                            value={email}
                            placeholder="Phone No./Username"
                        />
                    </View>

                    <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 10, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                        <TextInput
                            style={{ flex: 1 }}
                            onChangeText={(value) => { this.setState({ password: value }) }}
                            value={password}
                            placeholder="Password"
                            secureTextEntry={passShow}
                        />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ passShow: !passShow }) }}>
                            <Entypo name={passShow ? 'eye-with-line' : "eye"} style={{ textAlign: 'center', width: 30 }} size={18} color="#1713c0" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 25, marginTop: 30 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.signIn() }} style={{ marginTop: 10, backgroundColor: '#1713c0', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: '100%' }}>
                        {
                            loader ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#ffffff', fontWeight: '700' }}>Processing...  </Text>
                                    <ActivityIndicator size={18} color="#ffffff" />
                                </View>
                                :
                                <Text style={{ color: '#ffffff', fontWeight: '700' }}>Sign In</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return ({
        // user: state.reducer.user,
        // error: state.reducer.error,
        // loader: state.reducer.loader

    })
}

function mapDispatchToProps(dispatch) {
    return ({

    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#ffffff"
    },
    headingText: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 28
    },
    regularText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        color: "grey"
    },
    loader: {
        marginTop: 100
    },
    error: {
        color: 'red',
        marginTop: 25,
        fontSize: 15,
        textAlign: "center"
    }
})
