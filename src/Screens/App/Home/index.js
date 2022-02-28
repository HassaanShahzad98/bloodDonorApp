import React, { Component } from 'react'
import { StyleSheet, View, Alert, Text, Image, ActivityIndicator, ScrollView } from 'react-native'
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
import AsyncStorage from '@react-native-community/async-storage'




class Home extends Component {
    constructor() {
        super()
        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData, })
        })
    }

    render() {
        const { userData } = this.state
        var username = 'userNAme'
        if (userData.name) {
            username = userData.name
        }

        console.log(userData, 'asdasdasd')
        return (
            <View style={styles.container} >
                <View style={{ flex: 1, backgroundColor: '#233ad8', overflow: 'hidden', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                    <View style={{ flex: 0.8, borderBottomWidth: 1, borderColor: '#ffffff', flexDirection: 'row', alignItems: "center", paddingHorizontal: 10 }}>
                        <Text style={{ flex: 1, fontSize: 25, fontWeight: 'bold', color: '#ffffff', }}>Maddad</Text>
                        <MaterialIcons
                            onPress={() => { }}
                            name="notifications" style={{ fontSize: 25, color: "#ffffff", paddingRight: 15 }}
                        />
                        <Fontisto
                            onPress={() => { this.props.navigation.navigate('Emergencies') }}
                            name="messenger" style={{ fontSize: 22, color: "#ffffff" }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={{ borderWidth: 1, borderColor: '#060352', height: 50, width: 50, borderRadius: 50 ,backgroundColor:'#fff' }}>
                        <Entypo name="user" style={{ textAlign: 'center',marginTop:'auto',marginBottom:'auto'}} size={30} color="#233ad8" />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff', paddingLeft: 10 }}>{username[0].toUpperCase() + username.slice(1)}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.navigation.navigate('AddFriend') }} style={{ elevation: 4, shadowOpacity: 0.5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: 1, height: 45, backgroundColor: '#060352', marginRight: 5, borderRadius: 25 }}>
                            <Entypo
                                onPress={() => { }}
                                name="plus" style={{ fontSize: 22, color: "#ffffff", paddingRight: 5, fontWeight: 'bold', }}
                            />
                            <Text style={{ color: '#ffffff', paddingLeft: 5 }}>Add Friend</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('MyAccount')}} activeOpacity={0.8} style={{ elevation: 4, shadowOpacity: 0.5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: 1, height: 45, backgroundColor: '#ffffff', marginLeft: 5, borderRadius: 25 }}>
                            <FontAwesome5
                                name="address-card" style={{ fontSize: 22, color: "#060352", paddingRight: 5 }}
                            />
                            <Text style={{ color: '#060352', paddingLeft: 5, fontWeight: 'bold', }}>My Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <ScrollView> */}
                <View style={{ flex: 1.5, }}>
                    <View style={{ flex: 0.8, paddingHorizontal: 20, alignItems: "center", justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Emergency') }} activeOpacity={0.8} style={{ elevation: 4, shadowOpacity: 0.5, alignItems: "center", justifyContent: 'center', height: 50, width: '100%', backgroundColor: 'red', borderRadius: 15 }} >
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#ffffff' }}>Emergency</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('FirstAid') }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <View style={{ flex: 0.9, width: '90%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', elevation: 4, shadowOpacity: 0.5, }}>
                                <Image style={{ height: 40, width: 40 }}
                                    source={require('../../../../images/first-aid-sign.png')}
                                />
                            </View>
                            <Text style={{ marginBottom: -5, marginTop: 5 }}>First Aid</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('HelpLine') }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <View style={{
                                flex: 0.9, width: '90%', borderRadius: 10, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', elevation: 4, shadowOpacity: 0.5,
                            }}>
                                <Image style={{ height: 40, width: 40 }}
                                    source={require('../../../../images/helpline_(3).png')}
                                />
                            </View>
                            <Text style={{ marginBottom: -5, marginTop: 5 }}>Helpines</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('FreeFood') }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <View style={{ flex: 0.9, width: '90%', borderRadius: 10, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', elevation: 4, shadowOpacity: 0.5, }}>
                                <Image style={{ height: 40, width: 40 }}
                                    source={require('../../../../images/restaurant.png')}
                                />
                            </View>
                            <Text style={{ marginBottom: -5, marginTop: 5 }}>Free Food</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('BloodBank') }} style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, flexDirection: 'row' }}>
                            <Image style={{ marginHorizontal: 30, marginRight: 40, height: 50, width: 50 }}
                                source={require('../../../../images/blood_bank_logo-2.png')}
                            />
                            <Text style={{ flex: 2, fontSize: 20, fontWeight: 'bold', }}>Blood Bank</Text>
                        </TouchableOpacity>
                    </View>

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


export default connect(mapStateToProps, mapDispatchToProps)(Home);


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
