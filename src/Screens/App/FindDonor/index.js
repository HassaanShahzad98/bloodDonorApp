import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from 'react-native'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Bottom from '../../../Components/Bottom';
import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios');



class FindDonor extends Component {

    constructor() {
        super()
        this.state = {
            userData: {},
            bloodGroup: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData: userData })
        })
    }

    findDonorApi(bloodGroup) {
        const { userData } = this.state
        console.log('userDatafetchAddFriend', userData)
        var formData = new FormData()
        axios.get(
            `https://freeonlineskills.com/maddad/findDonor?group=${bloodGroup}&user_id=${userData.id}`,
            //`https://freeonlineskills.com/maddad/findDonor?group=O_PLUS&user_id=1`, //for test
            //formData,
            // {
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'multipart/form-data',
            //     } 
            // }
        )
            .then((response) => {
                //console.log('addFriendResponsse', response.data.collection)
                if (response && response.data && response.data.status == 'success') {
                    // AsyncStorage.setItem('userData', JSON.stringify(response.data.collection))
                    // this.setState({
                    //      loader: false,
                    //      addfriends : response.data.collection
                    //     })

                    this.props.navigation.navigate('Donors'
                        , {
                            response: response.data.collection
                        });
                }
                else {
                    console.log(response);
                    this.setState({ loader: false })
                    Alert.alert('', response.data.msg)
                }
                //handle success
            })
            .catch(function (error) {
                // handle error
                Alert.alert('', 'Network error')

            })
            .then(function () {
                // always executed
            });
    }
    //   signin = () => {
    //     this.props.authWithFacebook(this.props.navigation);
    //   }
    //   componentDidMount() {
    //     this.props.getUserSession(this.props.navigation);
    //   }

    render() {
        const { userData, bloodGroup } = this.state
        console.log('bloodGroupathassu', bloodGroup)
        return (
            <View style={styles.container} >
                <View style={{ height: 170, backgroundColor: '#e73630', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ paddingTop: 10, paddingLeft: 10, }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 22, fontWeight: 'bold', paddingBottom: 15 }}>FIND A DONOR</Text>
                        <Image style={{ height: 65, width: 70 }}
                            source={require('../../../../images/finda.png')}
                        />
                    </View>
                    {/* <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Emrergency</Text> */}
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 25 }}>
                    <Text style={{ color: '#e73630', fontSize: 23, textAlign: 'center' }}>Please select the blood group that you want !!</Text>

                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('A_PLUS')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'A_PLUS' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'A_PLUS' ? '#ffffff' : '#e73630' }}>A+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('O_PLUS')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'O_PLUS' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'O_PLUS' ? '#ffffff' : '#e73630' }}>O+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('B_PLUS')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'B_PLUS' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'B_PLUS' ? '#ffffff' : '#e73630' }}>B+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('AB_PLUS')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'AB_PLUS' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'AB_PLUS' ? '#ffffff' : '#e73630' }}>AB+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('A_NEG')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'A_NEG' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'A_NEG' ? '#ffffff' : '#e73630' }}>A-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('O_NEG')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'O_NEG' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'O_NEG' ? '#ffffff' : '#e73630' }}>O-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-around' }}>
                    <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('B_NEG')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'B_NEG' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'B_NEG' ? '#ffffff' : '#e73630' }}>B-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => {
                                this.findDonorApi('AB_NEG')
                            }}
                            style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: bloodGroup === 'AB_NEG' ? '#e73630' : '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: bloodGroup === 'AB_NEG' ? '#ffffff' : '#e73630' }}>AB-</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* </ScrollView> */}
                {/* <Bottom navigation={this.props.navigation} /> */}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.reducer.user,
        error: state.reducer.error,
        loader: state.reducer.loader

    })
}

function mapDispatchToProps(dispatch) {
    return ({
        authWithFacebook: (navigation) => {
            dispatch(authWithFacebook(navigation));
        },
        getUserSession: (navigation) => {
            dispatch(getUserSession(navigation));
        },
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(FindDonor);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // flexDirection: "column",
        backgroundColor: "#f3f3f3"
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
