import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, ScrollView, Alert } from 'react-native'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import Bottom from '../../../Components/Bottom'
import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios');



class BloodBank extends Component {
    constructor() {
        super()
        this.state = {
            userData: {},
            emergencies: [],
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData : userData })
        })
    }

      becomeDonorApi(){
        const { userData } = this.state
        console.log('  becomeDonorApi' ,userData)
        var formData = new FormData()
        axios.post(
            `https://freeonlineskills.com/maddad/becomeDonor?id=${userData.id}`,
            //`https://freeonlineskills.com/maddad/becomeDonor?id=21`, //for test
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
                    console.log('hassu',response.data.collection)
                    this.setState({
                         loader: false,
                         emergencies : response.data.collection
                        })
                  
                    //this.props.navigation.navigate('Login')
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
  
    //   }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ height: 230, backgroundColor: '#e73630', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ paddingTop: 10, paddingLeft: 10, }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        {/* <ImageBackground source={require('../../../../images/heart.png')} style={{ opacity: 0.2, height: 130, }}>
                            <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
                        </ImageBackground> */}
                        <View style={{ flex: 1, alignContent:'center' , alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ color: '#ffffff', fontSize: 20 }}>GIVE THE Gift OF LIFE</Text>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Text style={{ color: '#ffffff', fontSize: 25, fontWeight: 'bold' }}>DONATE</Text>
                                <Text style={{ color: '#e73630', backgroundColor: '#ffffff', paddingHorizontal: 10, marginLeft: 8, fontSize: 25, fontWeight: 'bold' }}>BLOOD</Text>
                            </View>
                        </View>

                        {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 2 }}>
                                <Text style={{ color: '#ffffff', fontSize: 25 }}>150 +</Text>
                                <Text style={{ color: '#ffffff', fontSize: 12 }}>New Blood Request</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: '#ffffff', fontSize: 25 }}>300 +</Text>
                                <Text style={{ color: '#ffffff', fontSize: 12 }}>Blood Donors</Text>
                            </View>
                        </View> */}
                        <View style={{ flex: 0.5 }}>

                        </View>
                    </View>
                    {/* <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Emrergency</Text> */}
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 120, marginTop: 15, flexDirection: 'row', paddingHorizontal: 10, marginLeft: 10, }}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(
                                    "Are you sure",
                                    "",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        {
                                            text: "OK", onPress: () => {
                                                this.becomeDonorApi()
                                            }
                                        }
                                    ]
                                );
                            }}
                            style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 60, width: 90 }}
                                source={require('../../../../images/become_donor.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>Become a Donor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('FindDonor') }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, marginLeft: 20, marginRight: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 60, width: 70 }}
                                source={require('../../../../images/find-donor.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Find a Donor</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <View style={{ marginTop: 30, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 20, height: 50, width: 50 }}
                                source={require('../../../../images/accident.png')}
                            />
                            <Text style={{ flex: 2, paddingLeft: 30, fontSize: 18, }}>BLOOD REQUESTS</Text>
                        </View>
                    </View> */}
                </View>

                {/* </ScrollView> */}
                <Bottom navigation={this.props.navigation} />
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


export default connect(mapStateToProps, mapDispatchToProps)(BloodBank);


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
