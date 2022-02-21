import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    Dimensions,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Drawer, Icon } from 'native-base';
// import { venueDataSaveInStore } from "../../store/action/action";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {  TextInput } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';


// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../../../Components/AppContainer';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeColors } from 'react-navigation';
class Profile extends Component {
    constructor() {
        super()
        this.state = {
            language: '',
            userName: 'Zeeshan Jawed',
            email: 'zeeshanjawed@gmail.com',
            phoneNumber: '+92304020058',
            selectedImage: '',
            password: '',
            repeatPassword: '',
            edit: false,
            passShow: true,
            repeatPassShow: true
        }
    }

    uploadImage = (imagePath) => {
        const options = { quality: 1.0, maxWidth: 500, maxHeight: 500, storageOptions: { skipBackup: true } };
        launchImageLibrary(options, (response) => {
            console.log(response, 'response____________response')
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // setAttachmentIcon('checkmark-outline');
                if (Platform.OS === 'ios') {
                    // setImagePath(response.uri.replace('file://', ''));
                } else {
                    this.setState({ selectedImage: response.assets[0].uri })
                    console.log(response.assets[0].uri, 'ddddddddddddddddddd');
                    // setImagePath(response.uri);
                }
                // setImage('')
                // setImageTypes(response.type);
                // setImageName(response.fileName);
                // console.log(response.type);
                // console.log(response.fileName);
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.uri };
                // console.log(source)
            }
        });

    };


    render() {
        // console.log(ThemeColors, 'ThemeColors_____________________ThemeColors')
        const { edit,selectedImage, passShow, repeatPassShow, phoneNumber, email, userName, password, repeatPassword } = this.state
        // let logo = require('./../../../images/logo.png')
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                <View style={{ height: 60, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, flexDirection: 'row', backgroundColor: '#f79321', }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '700', color: '#ffffff' }}>Profile</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ edit: true }) }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {!edit ?
                            <FontAwesome5 name="user-edit" style={{ textAlign: 'center', width: 30 }} size={15} color="#ffffff" />
                            : null
                        }
                    </TouchableOpacity>
                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 150, marginVertical: 5, alignItems: "center", }}>
                        <TouchableOpacity onPress={() => { this.uploadImage() }} style={{ borderRadius: 20, marginTop: 10, overflow: 'hidden', height: 90, width: 90, shadowOpacity: 2, elevation: 5 }}>
                            <Image
                                style={{ flex: 1, height: '100%', width: '100%', }}
                                source={{ uri: selectedImage ? selectedImage : 'https://menshaircuts.com/wp-content/uploads/2021/05/tp-boys-haircuts-2.jpg' }}
                            />
                        </TouchableOpacity>
                        {!edit ?
                            <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '700', color: '#f79321' }}>{userName}</Text>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 5, paddingHorizontal: 5 }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, marginVertical: 10 }}>Contact Detail</Text>
                        {edit ?
                            <>
                                <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="user" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        onChangeText={(value) => { this.setState({ userName: value }) }}
                                        value={userName}
                                        placeholder="User Name"
                                    />
                                </View>
                                <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        onChangeText={(value) => { this.setState({ email: value }) }}
                                        value={email}
                                        placeholder="johndeo@gmail.com"
                                    />
                                </View>
                                <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="phone" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        onChangeText={(value) => { this.setState({ phoneNumber: value }) }}
                                        value={phoneNumber}
                                        placeholder="Phone Number"
                                    />
                                </View>
                                {/* <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="phone" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        onChangeText={(value) => { this.setState({ phoneNumber: value }) }}
                                        value={phoneNumber}
                                        placeholder="Phone Number"
                                    />
                                </View> */}
                                <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={(value) => { this.setState({ password: value }) }}
                                        value={password}
                                        placeholder="Password"
                                        secureTextEntry={passShow}
                                    />
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ passShow: !passShow }) }}>
                                        <Entypo name={passShow ? 'eye-with-line' : "eye"} style={{ textAlign: 'center', width: 30 }} size={18} color="#f79321" />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#f79321", flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name="email" style={{ textAlign: 'center', width: 30 }} size={20} color="#f79321" />
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={(value) => { this.setState({ repeatPassword: value }) }}
                                        value={repeatPassword}
                                        placeholder="Repeat Password"
                                        secureTextEntry={repeatPassShow}
                                    />
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ repeatPassShow: !repeatPassShow }) }}>
                                        <Entypo name={repeatPassShow ? 'eye-with-line' : "eye"} style={{ textAlign: 'center', width: 30 }} size={18} color="#f79321" />
                                    </TouchableOpacity>
                                </View>
                            </>
                            :
                            <>
                                <View style={{ backgroundColor: '#ffffff', alignItems: 'center', paddingHorizontal: 20, borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', borderRadius: 10, height: 60, marginVertical: 5, }}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: 'grey', fontWeight: '700', }}>Phone Number</Text>
                                    <Text style={{ flex: 1, textAlign: 'right', fontSize: 12, fontWeight: '700', color: '#f79321' }}>{phoneNumber}</Text>
                                </View>
                                <View style={{ backgroundColor: '#ffffff', alignItems: 'center', paddingHorizontal: 20, borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', borderRadius: 10, height: 60, marginVertical: 5, }}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: 'grey', fontWeight: '700', }}>Email</Text>
                                    <Text style={{ flex: 1, textAlign: 'right', fontSize: 12, fontWeight: '700', color: '#f79321' }}>{email}</Text>
                                </View>
                                <View style={{ backgroundColor: '#ffffff', alignItems: 'center', paddingHorizontal: 20, borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', borderRadius: 10, height: 60, marginVertical: 5, }}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: 'grey', fontWeight: '700', }}>Date of birth</Text>
                                    <Text style={{ flex: 1, textAlign: 'right', fontSize: 12, fontWeight: '700', color: '#f79321' }}>26-Feb-1997</Text>
                                </View>
                                <View style={{ backgroundColor: '#ffffff', alignItems: 'center', paddingHorizontal: 20, borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', borderRadius: 10, height: 60, marginVertical: 5, }}>
                                    <Text style={{ textAlign: 'left', fontSize: 12, color: 'grey', fontWeight: '700', }}>Password</Text>
                                    <Text style={{ flex: 1, textAlign: 'right', fontSize: 12, fontWeight: '700', color: '#f79321' }}>**********</Text>
                                </View>
                            </>
                        }
                    </View>
                    {edit ?
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.setState({ edit: false }) }} style={{ backgroundColor: '#f79321', alignItems: 'center', justifyContent: 'center', margin: 8, height: 55, borderRadius: 5 }}>
                            <Text style={{ color: '#ffffff' }}>Update Profile</Text>
                        </TouchableOpacity>
                        : null
                    }
                </ScrollView>
                {/* </View> */}



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
)(Profile)
