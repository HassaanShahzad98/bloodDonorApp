import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    PermissionsAndroid,
    TextInput,
    VirtualizedList,
    Dimensions,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Drawer, Icon } from 'native-base';
// import { venueDataSaveInStore } from "../../store/action/action";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {  TextInput } from 'react-native-paper';

// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import GetLocation from 'react-native-get-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

import AppContainer from '../../../../Components/AppContainer';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeColors } from 'react-navigation';
class Address extends Component {
    constructor() {
        super()
        this.state = {
            language: 'ddddddddddddddd',
            helpCenter: '',
            userName: '',
            email: '',
            password: '',
            repeatPassword: '',
            noteToRider: '',
            passShow: true,
            repeatPassShow: true,
            newAddress: false,
            selectedAddress: {},
            address: [
                { placeName: 'Home', address: 'Gulshan-e-iqbal karachi', des: 'Aleem Memon my name' },
                { placeName: 'Office', address: 'Nazimabad 2 no block-h karachi', des: 'Aleem Memon my name' },
                { placeName: 'Place', address: 'Sadder', des: 'Aleem Memon my name' },
                { placeName: 'Third home', address: 'karachi', des: 'Aleem Memon my name' },
            ]
        }
    }




    requestLocationPermission = async () => {
        console.log('ssssssssssssssssssssssssssssssssssssssssssss')
        let permissions = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,]
        if (Platform.OS === 'android') {
            await PermissionsAndroid.requestMultiple(permissions)
            try {
                GetLocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 15000, })
                    .then(location => {  this.setState({ newAddress: true })  })
                    .catch(error => {
                        const { code, message } = error;
                        if (message == 'Location not available') {
                            console.log(message, 'error___________________error');
                            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                                message: "<font color='#ffffff'>Use Location ? </font>",
                                ok: "YES",
                                cancel: "NO",
                                style: { // (optional)
                                    backgroundColor: '#f79321',// (optional)
                    
                                    positiveButtonTextColor: '#ffffff',// (optional)
                                    positiveButtonBackgroundColor: '#f79321',// (optional)
                    
                                    negativeButtonTextColor: '#ffffff',// (optional)
                                    negativeButtonBackgroundColor: '#f79321'// (optional)
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
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<font color='#ffffff'>Use Location ? </font>",
            ok: "YES",
            cancel: "NO",
            style: { // (optional)
                backgroundColor: '#f79321',// (optional)

                positiveButtonTextColor: '#ffffff',// (optional)
                positiveButtonBackgroundColor: '#f79321',// (optional)

                negativeButtonTextColor: '#ffffff',// (optional)
                negativeButtonBackgroundColor: '#f79321'// (optional)
            }
        }).then((success) => {
            // this.getLocations()
            console.log(success, 'success_________success');
        }).catch((error) => {
            console.log(error.message);
        });
    }


    render() {
        const { email, address, selectedAddress, language, noteToRider, helpCenter, newAddress, passShow, repeatPassShow, userName, password, repeatPassword } = this.state
        // console.log(selectedAddress.structured_formatting.main_text, 'newAddress_____________________newAddress')
        // let logo = require('./../../../images/logo.png')
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                <View style={{ height: newAddress ? 60 : 60, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, backgroundColor: '#f79321', }}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: '#ffffff', height: 50, flexDirection: 'row', }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { newAddress ? this.setState({ newAddress: false, selectedAddress: {} }) : this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                        </TouchableOpacity>
                        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '700', color: '#ffffff' }}>{newAddress ? 'New Address' : 'Address'}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.requestLocationPermission() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {!newAddress ?
                                <MaterialIcons name="add-location" style={{ textAlign: 'center', width: 30 }} size={25} color="#ffffff" />
                                : null
                            }
                        </TouchableOpacity>

                    </View>
                </View>
                {newAddress ?
                    <View style={{ justifyContent: 'flex-start', marginTop: 20, paddingHorizontal: 15, }}>
                        {/* <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13, marginBottom: 3, }}>Hi, how can we help?</Text> */}
                        {/* <ScrollView keyboardShouldPersistTaps={'handled'}> */}
                        <View style={{ flexDirection: 'row', marginVertical: 5, borderRadius: 5, backgroundColor: '#ffffff', shadowColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <AntDesign name="search1" style={{ textAlignVertical: 'center', textAlign: 'center', width: '12%', height: 45, fontSize: 18, color: "#f79321" }} />
                            {/* <VirtualizedList> */}

                            <ScrollView keyboardShouldPersistTaps={'handled'}>
                                <GooglePlacesAutocomplete
                                    style={{}}
                                    returnKeyType={'default'}
                                    fetchDetails={true}
                                    keyboardAppearance={'light'}
                                    enablePoweredByContainer={false}
                                    value={language}
                                    onChangeText={address => console.log(address, 'address_________________address')}
                                    // minLength={1}
                                    // numberOfLines={10}
                                    // isRowScrollable={true}
                                    // value={'karachi'}
                                    placeholder="Search your address"
                                    onPress={(data, details = null) => {
                                        const { geometry } = details
                                        const { location } = geometry
                                        // console.log(data, 'geometry_______________________geometry')
                                        this.setState({ selectedAddress: data, })
                                        // Alert.alert(
                                        //     'Selected Location',
                                        //     `Latitude  : ${location.lat} \nLongitude : ${location.lng}`,
                                        //     [
                                        //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                                        //     ]
                                        // )
                                    }}
                                    renderDescription={(row) => row.terms[0].value}
                                    query={{
                                        // key: 'AIzaSyBxtizc2Z4j5FAqmO1Q2796gqMS7-SXbG4&libraries',
                                        key: 'AIzaSyB6ZV79q_0P-aDXMt6RKssrLPb7xyOG0xo',
                                        language: "en", // language of the results
                                        types: ['address'],
                                        // types: ['(cities)'],
                                        componentRestrictions: { country: "pakistan" }
                                    }}
                                    // textInputProps = {{
                                    // }}
                                    textInputProps={{
                                        // onFocus: () => focusInput(),
                                        // onBlur: () => blurInput(),
                                        // onChangeText: (text) => onChange(text),
                                        style: {
                                            width: '100%',
                                            height: 45,
                                            // borderWidth: 1,
                                        },
                                    }}
                                    styles={{
                                        listView: {
                                            width: 200,
                                            height: 200
                                        }
                                    }}

                                />

                            </ScrollView>
                            {/* </VirtualizedList> */}
                            {/* <TextInput
                                    style={{ width: '85%', height: 45, fontSize: 12, }}
                                    onChangeText={(value) => { this.setState({ helpCenter: value }) }}
                                    value={helpCenter}
                                    placeholder="Search for question. Like: How to return?"

                                /> */}
                        </View>
                        {/* </ScrollView> */}
                    </View>
                    : null
                }

                <ScrollView style={{ flex: 1, paddingHorizontal: 5 }} showsVerticalScrollIndicator={false}>
                    {
                        newAddress ?
                            <View style={{ paddingHorizontal: 10 }}>
                                {
                                    selectedAddress.structured_formatting ?
                                        <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                            <MaterialIcons name="location-on" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                            <TextInput
                                                onChangeText={(value) => { this.setState({ userName: value }) }}
                                                value={userName}
                                                placeholder="Name"
                                            />
                                        </View>
                                        : null
                                }

                                {/* .main_text */}
                                {
                                    selectedAddress.structured_formatting ?
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ color: '#f79321', fontSize: 12, marginBottom: 10 }}>Selected Address</Text>
                                            <View style={{ borderWidth: 0.5, borderColor: '#f79321', padding: 10, borderRadius: 8 }}>
                                                <Text >{selectedAddress.structured_formatting.main_text}</Text>
                                            </View>
                                        </View>
                                        : null
                                }

                                {
                                    selectedAddress.structured_formatting ?
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ color: '#f79321', fontSize: 12, marginBottom: 10 }}>Note to Rider</Text>
                                            <View style={{ borderWidth: 0.5, borderColor: '#f79321', padding: 10, borderRadius: 8 }}>
                                                <TextInput
                                                    style={{ justifyContent: 'flex-start', fontSize: 12 }}
                                                    multiline={true}
                                                    numberOfLines={4}
                                                    onChangeText={(value) => { this.setState({ noteToRider: value }) }}
                                                    value={noteToRider}
                                                    placeholder="Note to Rider"
                                                />
                                            </View>
                                        </View>
                                        : null
                                }

                            </View>
                            :

                            <View style={{ flex: 1, marginVertical: 5, alignItems: "center", }}>
                                {address.map((key, index) => {
                                    return (
                                        <TouchableOpacity activeOpacity={0.7} >
                                            <View style={{ flexDirection: 'row', height: 70, marginVertical: 10, borderBottomWidth: 0.5, borderColor: '#f79321', width: '95%', }}>
                                                <View style={{ flex: 0.5, }}>
                                                    {key.placeName == 'Place' ?
                                                        <MaterialIcons name="location-on" style={{ textAlign: 'center', width: 30 }} size={22} color="#f79321" />
                                                        : key.placeName == 'Home' ?
                                                            <MaterialIcons name="home" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                                            :
                                                            <FontAwesome5 name="building" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                                    }
                                                </View>
                                                <View style={{ flex: 4, }}>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={{ flex: 1, fontWeight: '700' }}>{key.placeName}</Text>
                                                        <MaterialIcons name="edit" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                                        <MaterialIcons name="delete" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                                    </View>
                                                    <View style={{ flex: 1, }}>
                                                        <Text style={{ color: 'grey', fontSize: 12 }}>{key.address}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, }}>
                                                        <Text style={{ color: 'grey', fontSize: 12, marginTop: -5 }}>Note to rider : {key.des}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View >
                    }
                </ScrollView>
                {selectedAddress.structured_formatting && newAddress ?
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ newAddress: false }) }} style={{ backgroundColor: '#f79321', alignItems: 'center', justifyContent: 'center', margin: 8, height: 55, borderRadius: 5 }}>
                        <Text style={{ color: '#ffffff' }}>Save Address</Text>
                    </TouchableOpacity>
                    : null
                }

            </View >
        )
    }
}
const styles = StyleSheet.create({
    headingView: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, height: '20%', borderColor: 'red'
    },
    headingText: {
        color: '#f79321', fontWeight: 'bold', fontSize: 12
    },
    cardView: {
        height: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: "flex-start", borderBottomWidth: 0.5, borderBottomColor: 'lightgrey'
    },
})


function mapStateToProps({ root }) {
    // const { language } = root
    return {}
}

function mapDispatchToProps(dispatch) {
    return ({
        // actions: bindActionCreators({
        //     venueDataSaveInStore
        // }, dispatch),
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Address)
