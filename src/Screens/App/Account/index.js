import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    Platform,
    Linking,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
import Share from 'react-native-share';
import InAppReview from 'react-native-in-app-review';
// import { Linking } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
// import Header from '../../Components/Header';
// import BottomTabs from '../../Components/Bottom';
// import CategoryCard from '../../Components/CategoryCard';
// import ProductsCard from '../../Components/ProductsCard';
// import Carousel from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../../Components/AppContainer';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Account extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }
    // https://play.google.com/store/apps/details?id=com.intown
    shareApp() {
        console.log('ssssssssssssssssssssssss')
        const url = 'https://play.google.com/store/apps/details?id=com.intown';
        const title = 'Share:';
        const message = `${['intown Online Shopping App by intown.'].map((item) => {
            return (
                `\n${item}`
            )
        }).join('')
            }
        `;
        const options = Platform.select({
            ios: {
                activityItemSources: [
                    {
                        placeholderItem: { type: 'url', content: url },
                        item: {
                            default: { type: 'url', content: url },
                        },
                        subject: {
                            default: title,
                        },
                        linkMetadata: { originalUrl: url, url, title },
                    },
                    {
                        placeholderItem: { type: 'text', content: message },
                        item: {
                            default: { type: 'text', content: message },
                            message: null, // Specify no text to share via Messages app.
                        },
                    },
                ],
            },
            default: {
                title,
                subject: title,
                message: `${message} ${url}`,
            },
        });
        Share.open(options)
            .then((res) => { console.log(res, 'response here**') })
            .catch((err) => { err && console.log(err); });
    }

    appReviews() {
        // InAppReview.RequestInAppReview()
        //     .then((hasFlowFinishedSuccessfully) => {
        //         console.log('InAppReview in android', hasFlowFinishedSuccessfully);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    render() {
        // let logo = require('./../../../images/logo.png')
        console.log(this.props.navigation, 'this.props.navigation________________')
        return (
            <AppContainer pageName={'Account'} navigation={this.props.navigation} header={false} >
                <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                    <View style={{ shadowOpacity: 5, elevation: 5, height: 120, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f79321', flexDirection: 'row' }}>
                        {/* <View style={{marginLeft:15, borderRadius: 50, overflow: 'hidden', height: 60, width: 60 }}>
                            <Image
                                style={{ flex: 1, height: '100%', width: '100%', }}
                                source={{ uri: 'https://menshaircuts.com/wp-content/uploads/2021/05/tp-boys-haircuts-2.jpg' }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10, }}>
                            <Text style={{ color: '#ffffff', fontSize: 14 }}>Zeeshan Jawed</Text>
                            <Text style={{ color: '#ffffff', fontSize: 12, marginTop: -3 }}>zeeshan@gmail.com</Text>
                        </View> */}

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }} activeOpacity={0.7} style={{ shadowOpacity: 5, elevation: 8, flex: 1, backgroundColor: '#f6f7f9', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', height: 55, borderRadius: 10, }}>
                            <Text style={{ fontWeight: 'bold', color: '#f79321' }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} activeOpacity={0.7} style={{ shadowOpacity: 5, elevation: 8, flex: 1, backgroundColor: '#f6f7f9', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', height: 55, borderRadius: 10, }}>
                            <Text style={{ fontWeight: 'bold', color: '#f79321' }}>Regester</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ paddingHorizontal: 5, paddingVertical: 10, }} showsVerticalScrollIndicator={false}>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Favourites') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <EvilIcons name="heart" style={{ textAlign: 'center', width: 50, fontSize: 23, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Favourites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Orders') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <FontAwesome5 name="clipboard-list" style={{ textAlign: 'center', width: 50, fontSize: 18, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Orders History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <FontAwesome name="user-o" style={{ textAlign: 'center', width: 50, fontSize: 18, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chats') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <MaterialIcons name="chat" style={{ textAlign: 'center', width: 50, fontSize: 18, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Chats</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Address') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <Entypo name="location" style={{ textAlign: 'center', width: 50, fontSize: 18, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Address</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Vouchers') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <Fontisto name="prescription" style={{ textAlign: 'center', width: 50, fontSize: 20, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Vouchers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('BankDetails') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <FontAwesome name="bank" style={{ textAlign: 'center', width: 50, fontSize: 17, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Bank details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('TrackOrder') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <MaterialIcons name="track-changes" style={{ textAlign: 'center', width: 50, fontSize: 20, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Track your Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('HelpCenter') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <MaterialIcons name="help" style={{ textAlign: 'center', width: 50, fontSize: 20, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Help center</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.shareApp() }} style={{ flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <Entypo name="share" style={{ textAlign: 'center', width: 50, fontSize: 20, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Share our App</Text>
                        </TouchableOpacity>
                        {/* this.appReviews() */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { Linking.openURL('https://play.google.com/store/apps/details?id=com.intown'); }} style={{ marginBottom: 20, flexDirection: 'row', marginHorizontal: 18, marginVertical: 5, padding: 15, borderRadius: 5, backgroundColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <MaterialIcons name="rate-review" style={{ textAlign: 'center', width: 50, fontSize: 20, color: "#f79321" }} />
                            <Text style={{ color: '#f79321', fontWeight: '600' }}>Rate our App</Text>
                        </TouchableOpacity>
                        {/* <View style={{ paddingLeft: 10, marginTop: 5, paddingTop: 20, borderColor: 'lightgrey', borderTopWidth: 0.5 }}>
                            <Text style={{ color: 'grey', marginTop: 10, fontWeight: 'bold' }}>Setting</Text>
                            <Text style={{ color: 'grey', marginTop: 10, fontWeight: 'bold' }}>Terms & Conditions / Privacy</Text>
                            <Text style={{ color: 'grey', marginTop: 10, fontWeight: 'bold' }}>Log out</Text>
                        </View> */}




                    </ScrollView>
                </View >
            </AppContainer>
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
)(Account)
