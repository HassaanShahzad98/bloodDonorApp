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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker from 'react-native-country-picker-modal'
// import ModalDropdown from 'react-native-modal-dropdown';
const axios = require('axios');


import { ScrollView } from 'react-native'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            language: '',
            phone: '',
            age: '',
            fullName: '',
            email: '',
            password: '',
            repeatPassword: '',
            passShow: true,
            repeatPassShow: true,
            loader: false,
            showDropdown: false,
            bloodGroup: 'Select Blood Group',
            gender: ''
        }
    }


    signUp() {
        const { email, password, repeatPassword, phone, fullName, loader, bloodGroup, gender, age } = this.state
        var formData = new FormData()
        if (email == '' || password == '' || phone == '' || fullName == '' || bloodGroup == 'Select Blood Group' || gender == '', age == '') {
            Alert.alert('', 'All fields are required')
        }
        else if (password !== repeatPassword) {
            Alert.alert('', 'Password does not match')
        }
        else {

            this.setState({ loader: true })
            formData.append('name', fullName);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);
            formData.append('gender', gender);
            formData.append('blood_group', bloodGroup);
            formData.append('age', age);
            axios.post('https://freeonlineskills.com/maddad/log', formData,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
                .then((response) => {
                    if (response && response.data && response.data.status == 'success') {
                        // AsyncStorage.setItem('userData', JSON.stringify(response.data.collection))
                        this.setState({ loader: false })
                        Alert.alert(
                            "Please check you mail",
                            "Your password has been sent to your mail",
                            [
                                // {
                                //     text: "Cancel",
                                //     onPress: () => console.log("Cancel Pressed"),
                                //     style: "cancel"
                                // },
                                { text: "continue", onPress: () => this.props.navigation.navigate('Login') }
                            ]
                        );

                    }
                    else {
                        console.log(response);
                        this.setState({ loader: false })
                        Alert.alert('', response.data.msg)
                    }
                    // handle success
                })
                .catch(function (error) {
                    // handle error
                    Alert.alert('', 'Network error')

                })
                .then(function () {
                    // always executed
                });
        }
        // this.props.navigation.navigate('App')
    }

    render() {
        const { email, password, passShow, repeatPassword, repeatPassShow, fullName, phone, age, loader, showDropdown, bloodGroup, gender } = this.state
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
                <ScrollView>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ color: '#1713c0', fontSize: 22, fontWeight: '700', marginBottom: 20 }}>Register Yourself!</Text>

                        <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="user" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ width: '100%' }}
                                onChangeText={(value) => { this.setState({ fullName: value }) }}
                                value={fullName}
                                placeholder="Full Name"
                            />
                        </View>

                        <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="phone" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ width: '100%' }}
                                onChangeText={(value) => { this.setState({ phone: value }) }}
                                value={phone}
                                placeholder="Phone No./Username"
                            />
                        </View>

                        <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ width: '100%' }}
                                onChangeText={(value) => { this.setState({ email: value }) }}
                                value={email}
                                placeholder="Email"
                            />
                        </View>

                        {/* <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="lock" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
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
                        <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="lock" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ flex: 1 }}
                                onChangeText={(value) => { this.setState({ repeatPassword: value }) }}
                                value={repeatPassword}
                                placeholder="Confirm Password"
                                secureTextEntry={repeatPassShow}
                            />
                            <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ repeatPassShow: !repeatPassShow }) }}>
                                <Entypo name={repeatPassShow ? 'eye-with-line' : "eye"} style={{ textAlign: 'center', width: 30 }} size={18} color="#1713c0" />
                            </TouchableOpacity>
                        </View>
 */}

                        <View style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="child" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ width: '100%' }}
                                onChangeText={(value) => { this.setState({ age: value }) }}
                                value={age}
                                placeholder="Age"
                            />
                        </View>

                        {/* <View style={{ flexDirection: 'row', backgroundColor: 'pink', justifyContent: "space-between" }}> */}
                        {/* blood group dropdown */}
                        <View>
                            <TouchableOpacity
                                style={{ borderRadius: 50, paddingHorizontal: 10, marginVertical: 5, backgroundColor: "#c1d7ef", alignItems: 'center' }}
                                onPress={() => {
                                    showDropdown ?
                                        this.setState({ showDropdown: false })
                                        :
                                        this.setState({ showDropdown: true })
                                }}
                            >
                                <Text style={{ color: 'grey', paddingVertical: 15, fontWeight: 'bold' }}>{bloodGroup}</Text>
                            </TouchableOpacity>
                            <View style={{ borderRadius: 10, paddingHorizontal: 10, paddingVertical: showDropdown ? 10 : 0, marginVertical: 1, backgroundColor: "#c1d7ef", alignItems: 'center' }}>


                                {/* dropdown opt */}
                                <View style={{ display: showDropdown ? 'flex' : 'none' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'a_plus'
                                            })
                                        }}
                                    >
                                        <Text>A+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'o_plus'
                                            })
                                        }}
                                    >
                                        <Text>O+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'b_plus'
                                            })
                                        }}
                                    >
                                        <Text>B+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'ab_plus'
                                            })
                                        }}
                                    >
                                        <Text>AB+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'ab_neg'
                                            })
                                        }}
                                    >
                                        <Text>AB-</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'a_neg'
                                            })
                                        }}
                                    >
                                        <Text>A-</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'b__neg'
                                            })
                                        }}
                                    >
                                        <Text>B-</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                showDropdown: false,
                                                bloodGroup: 'o_neg'
                                            })
                                        }}
                                    >
                                        <Text>O-</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        {/* gender radio btn */}
                        <View>
                            <Text>Select Your Gender : </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            this.setState({
                                                gender: 'Male'
                                            })
                                        }
                                    }
                                    style={{ borderRadius: 50, width: '40%', marginVertical: 5, backgroundColor: gender === 'Male' ? "#1713c0" : "#c1d7ef", padding: 10, alignItems: 'center' }}
                                >
                                    <Text style={{ color: gender === 'Male' ? '#fff' : 'grey', fontWeight: '800' }}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            this.setState({
                                                gender: 'Female'
                                            })
                                        }
                                    }
                                    style={{ borderRadius: 50, width: '40%', marginVertical: 5, backgroundColor: gender === 'Female' ? "#1713c0" : "#c1d7ef", padding: 10, alignItems: 'center' }}
                                >
                                    <Text style={{ color: gender === 'Female' ? '#fff' : 'grey', fontWeight: '800' }}>female</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    {/* </View> */}

                    {/* //buttons view */}
                    <View style={{ alignItems: 'center', marginHorizontal: 25, marginTop: 10 }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.signUp() }} style={{ marginTop: 10, backgroundColor: '#1713c0', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: '100%' }}>
                            {
                                loader ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#ffffff', fontWeight: '700' }}>Processing...  </Text>
                                        <ActivityIndicator size={18} color="#ffffff" />
                                    </View>
                                    :
                                    <Text style={{ color: '#ffffff', fontWeight: '700' }}>Sign Up</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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


export default connect(mapStateToProps, mapDispatchToProps)(Register);


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
