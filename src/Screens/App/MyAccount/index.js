import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import Bottom from '../../../Components/Bottom';
import AsyncStorage from '@react-native-community/async-storage';
const window = Dimensions.get('window');



class MyAccount extends Component {
    
    constructor() {
        super()
        this.state = {
            userData: {},
        }
    }
    //   signin = () => {
    //     this.props.authWithFacebook(this.props.navigation);
    //   }
    //   componentDidMount() {
    //     this.props.getUserSession(this.props.navigation);
    //   }
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData : userData })
        })
    }

    render() {
        const { userData } = this.state
        console.log('hassu',userData)
        return (
            <View style={styles.container} >
                <View style={{
                    height: window.width * 2, width: window.width * 2.15, borderRadius: window.width, marginTop: -window.width * 2 * 0.65,
                    paddingTop: window.width * 2 * 0.65, paddingHorizontal: window.width,
                    backgroundColor: '#ffffff', alignSelf: 'center',
                }}>
                    <View style={{
                        marginTop: 'auto', height: window.width * 2 * 0.35, width: window.width, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 50,
                        alignSelf: 'center',
                    }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ paddingTop: 10, paddingLeft: 10, }}>
                            <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#1713c0" />
                        </TouchableOpacity>
                        <View style={{ marginTop: 'auto' }}>
                            <Entypo name="user" style={{ textAlign: 'center' }} size={100} color="#1713c0" />
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>{userData.name}</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 15 }}>
                    <ScrollView>
                        {

                            [
                                {
                                    detailType: 'Email :',
                                    title: userData.email
                                },
                                {
                                    detailType: 'Phone :',
                                    title: userData.Phone
                                },
                                {
                                    detailType: 'Blood Group :',
                                    title: userData.blood_group
                                },
                                {
                                    detailType: 'Age :',
                                    title: userData.age
                                },
                                {
                                    detailType: 'Gender :',
                                    title: userData.gender
                                }
                            ].map((item, index) => (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                >
                                    <View
                                        key={index}
                                        style={
                                            {
                                                marginHorizontal: 10, marginVertical: 10, flexDirection: 'row', width: window.width - 60,
                                                borderWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)', borderLeftColor: 'rgba(0,0,0,0.1)', borderBottomColor: 'rgba(0,0,0,0.5)', borderRightColor: 'rgba(0,0,0,0.5)',
                                                justifyContent: 'flex-start', alignItems: 'center', height: 60, borderRadius: 10, backgroundColor: '#1713c0',
                                                elevation: 5,
                                                shadowColor: '#000000',
                                                shadowOffset: {
                                                    width: 5,
                                                    height: 5
                                                },
                                                shadowRadius: 5,
                                                shadowOpacity: 1.0
                                            }}>
                                        {/* <Entypo name={item.icon} style={{ textAlign: 'center', width: 30, marginHorizontal: 20 }} size={20} color="#fff" /> */}
                                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff', marginHorizontal: 20  }}>{item.detailType}</Text>
                                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>{item.title}</Text>
                                        <Text></Text>
                                        <Text></Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                {/* </ScrollView> */}
                <Bottom />
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


export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // flexDirection: "column",
        backgroundColor: "#1713c0"
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
