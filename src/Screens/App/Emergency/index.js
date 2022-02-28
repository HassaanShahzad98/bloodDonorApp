import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView,Alert } from 'react-native'
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




class Emergency extends Component {
    constructor() {
        super()
        this.state = {
            userData: {},
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData : userData })
        })

        // setTimeout(() => {
        //     this.getEmergencyApi()
        //  }, 1000);
    }

    getEmergencyApi(incidentId){
        const { userData } = this.state
        console.log('getemergencyApi' ,userData)
        var formData = new FormData()
        axios.get(
            `https://freeonlineskills.com/maddad/emergencyRequest?em_id=${incidentId}&user_id=${userData.id}`,
            //`https://freeonlineskills.com/maddad/emergencyRequest?em_id=2&user_id=6`, //for test
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
                         emergency : response.data.collection
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
    render() {
        const { userData , emergency } = this.state
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Emrergency</Text>
                </View>
                <ScrollView>
                {/* <View style={{ flex: 1 }}> */}
{
                    [
                        {
                            icon : require('../../../../images/heart-attack.png'),
                            englishDecscription :'Heart Attack'
                        },
                        {
                            icon : require('../../../../images/heating.png'),
                            englishDecscription :'Heat Stroke'
                        },
                        {
                            icon : require('../../../../images/accident.png'),
                            englishDecscription :'Accident'
                        },
                        {
                            icon : require('../../../../images/accident.png'),
                            englishDecscription :'Robbery '
                        },
                        {
                            icon : require('../../../../images/accident.png'),
                            englishDecscription :'Bleeding'
                        },
                        {
                            icon : require('../../../../images/accident.png'),
                            englishDecscription :'Breathing'
                        },
                        {
                            icon : require('../../../../images/accident.png'),
                            englishDecscription :'Fire'
                        }
                    ].map((item,index)=>(
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                            Alert.alert(
                                "Alert Title",
                                "My Alert Msg",
                                [
                                  {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                  },
                                  { text: "OK", onPress: () => {
                                      console.log("OK Pressed") 
                                      this.getEmergencyApi(index)
                                    }}
                                ]
                              );
                        }}
                        style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 20, height: 50, width: 50 }}
                                source={item.icon}
                            />
                            <Text style={{ flex: 2, paddingLeft: 50, fontSize: 20, }}>{item.englishDecscription}</Text>
                            <View style={{ height: 50, width: 50, marginRight: 30, borderRadius: 25, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <MaterialIcons name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))
}
                </ScrollView>
                {/* <Bottom /> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Emergency);


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
