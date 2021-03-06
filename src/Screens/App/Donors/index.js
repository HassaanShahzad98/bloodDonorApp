
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView, Alert } from 'react-native'
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



class Donors extends Component {
    constructor() {
        super()
        this.state = {
            userData: {},
            Donors: [],
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData : userData })
            console.log('chk',this.props.navigation.getParam('response'))
            this.setState({ Donors : this.props.navigation.getParam('response') })
        })
    }

    render() {
        const { userData , Donors } = this.state
        console.log(Donors)
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Donors</Text>
                </View>
                <View style={{ flex: 1 }}>


                    {
                        Donors.map((item,index) => (
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => {}}
                                style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}
                            >
                                <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                                    <FontAwesome name="user-circle" style={{ height: 50, width: 50, textAlign: 'center', textAlignVertical: 'center', marginLeft: 10 }} size={40} color="#000" />
                                    <View>

                                        <Text style={{ paddingLeft: 10, fontSize: 20, }}>{item.name}</Text>
                                        <Text style={{ paddingLeft: 10, fontSize: 15, color: '#5eb2c0' }}>{item.phone}</Text>
                                        {/* <Text style={{ paddingLeft: 10, fontSize: 15, color: '#4b7a73'}}>{item.blood_group}</Text> */}

                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))

                    }

                    {/* <TouchableOpacity activeOpacity={0.5}
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
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                        }}
                        style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}
                    >
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <FontAwesome name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            <Text style={{ flex: 2, paddingLeft: 50, fontSize: 20, }}>headache</Text>
                            <View style={{ height: 50, width: 50, marginRight: 30, borderRadius: 25, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <MaterialIcons name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            </View>
                        </View>
                    </TouchableOpacity>             
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
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                        }}
                        style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}
                    >
                 
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <MaterialIcons name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            <Text style={{ flex: 2, paddingLeft: 50, fontSize: 20, }}>Heating</Text>
                            <View style={{ height: 50, width: 50, marginRight: 30, borderRadius: 25, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <MaterialIcons name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            </View>

                        </View>
                  
                    </TouchableOpacity>
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
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                        }}
                        style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}
                    >
                    
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 20, height: 50, width: 50 }}
                                source={require('../../../../images/accident.png')}
                            />
                            <Text style={{ flex: 2, paddingLeft: 50, fontSize: 20, }}>Accident</Text>
                            <View style={{ height: 50, width: 50, marginRight: 30, borderRadius: 25, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <MaterialIcons name="send" style={{ height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center' }} size={20} color="#fff" />
                            </View>

                        </View>
                 
                    </TouchableOpacity>
                */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Donors);


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
