import React, { Component } from 'react'
import { StyleSheet, TextInput, Alert, View, Text, PermissionsAndroid, Image, ActivityIndicator, ScrollView, Modal } from 'react-native'
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
import GetLocation from 'react-native-get-location'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";



class Accident extends Component {
    state = {
        modalVisible: false,
        emergency: '',
        location: null
    };

    requestLocationPermission = async () => {
        console.log('ssssssssssssssssssssssssssssssssssssssssssss')
        let permissions = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,]
        if (Platform.OS === 'android') {
            await PermissionsAndroid.requestMultiple(permissions)
            try {
                GetLocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 15000, })
                    .then(location => { this.setState({ location, newAddress: true }) })
                    .catch(error => {
                        console.log(error, 'error______error')
                        const { code, message } = error;
                        if (message == 'Location not available') {
                            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                                message: "<font color='#ffffff'>Use Location Allow? </font>",
                                ok: "YES",
                                cancel: "NO",
                                style: { // (optional)
                                    backgroundColor: '#233ad8',// (optional)

                                    positiveButtonTextColor: '#ffffff',// (optional)
                                    positiveButtonBackgroundColor: '#233ad8',// (optional)

                                    negativeButtonTextColor: '#ffffff',// (optional)
                                    negativeButtonBackgroundColor: '#233ad8'// (optional)
                                }
                            }).then((success) => {
                                this.setState({ newAddress: true })
                            }).catch((error) => {
                                console.log(error.message);
                            });
                        }
                    })
            }
            catch (e) {
                return console.log(e, 'Error');
            }
        }
    };

    componentDidMount() {
        this.requestLocationPermission()
        // LocationServicesDialogBox.checkLocationServicesIsEnabled({
        //     message: "<font color='#ffffff'>Use Location Allow ? </font>",
        //     ok: "YES",
        //     cancel: "NO",
        //     style: { // (optional)
        //         backgroundColor: '#233ad8',// (optional)

        //         positiveButtonTextColor: '#ffffff',// (optional)
        //         positiveButtonBackgroundColor: '#233ad8',// (optional)

        //         negativeButtonTextColor: '#ffffff',// (optional)
        //         negativeButtonBackgroundColor: '#233ad8'// (optional)
        //     }
        // }).then((success) => {
        //     // this.getLocations()
        //     console.log(success, 'success_________success');
        // }).catch((error) => {
        //     console.log(error.message);
        // });
    }

    sendData() {
        const { location } = this.state
        console.log(location, 'location______location')
    }

    render() {
        const { modalVisible, emergency } = this.state
        // var pageName = this.props.navigation.getParam('pageName')
        // var text = this.props.navigation.getParam('text')
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Accident</Text>
                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Emergency:</Text>
                    <TextInput
                        style={{
                            margin: 5, marginTop: 10, borderRadius: 5, backgroundColor: '#ffffff',
                            shadowOpacity: 10,
                            elevation: 5,
                            shadowRadius: 5
                        }}
                        onChangeText={(e) => { console.log(e, 'ddddddddddd') }}
                        multiline={true}
                        numberOfLines={6}
                        value={emergency}
                    />

                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Location:</Text>
                    <TextInput
                        style={{
                            margin: 5, marginTop: 10, borderRadius: 5, backgroundColor: '#ffffff',
                            shadowOpacity: 10,
                            elevation: 4,
                            shadowRadius: 5
                        }}
                        onChangeText={(e) => { console.log(e, 'ddddddddddd') }}
                        multiline={true}
                        numberOfLines={2}
                        value={emergency}
                    />

                </View>
                <View style={{ flex: 0.8, paddingHorizontal: 20, alignItems: "center", justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { this.sendData() }} activeOpacity={0.8} style={{ elevation: 4, shadowOpacity: 0.5, alignItems: "center", justifyContent: 'center', height: 50, width: '100%', backgroundColor: '#233ad8', borderRadius: 15 }} >
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#ffffff' }}>Send</Text>
                    </TouchableOpacity>
                </View>

                {/* </ScrollView> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Accident);


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
