import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    PermissionsAndroid,
    TextInput,
    Dimensions,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Drawer, Icon } from 'native-base';
// import { venueDataSaveInStore } from "../../store/action/action";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'
import Header from '../../Components/Header';
import BottomTabs from '../../Components/Bottom';
import CategoryCard from '../../Components/CategoryCard';
import VendersCard from '../../Components/VendersCard';
import Carousel from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import GetLocation from 'react-native-get-location'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import AppContainer from '../../Components/AppContainer';


let shop1 = require('./../../../images/shop1.jpg')
let shop2 = require('./../../../images/shop2.jpg')
let shop3 = require('./../../../images/shop3.jpg')
let shop4 = require('./../../../images/shop4.jpg')
let shop5 = require('./../../../images/shop5.jpg')
var vendors = [shop1, shop2, shop3, shop4, shop5, shop1, shop2, shop3, shop4, shop5,]

// let cate1 = require('./../../../images/tshirt.jpg')
// let cate2 = require('./../../../images/pent.jpg')
// let cate3 = require('./../../../images/shoes.jpg')
// let cate4 = require('./../../../images/cap.jpg')
// let cate5 = require('./../../../images/glasses.jpg')

// var categories = [cate5, cate1, cate2, cate3, cate4, cate1, cate2, cate3, cate4, cate5, cate5, cate1, cate2, cate3, cate4, cate1, cate2, cate3, cate4, cate5]


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Shops extends Component {
    constructor() {
        super()
        this.state = {
            shops: 'all',
        }
    }
    getLocations() {
        console.log('locaiojjjjjjjjjjjjjjj')
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
            .then(granted => {
                console.log(granted, 'GET_ACCOUNTS___________GET_ACCOUNTS')
                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                })
                    .then(location => {
                        console.log(location, 'location___________________location');
                    })
                    .catch(error => {
                        const { code, message } = error;
                        // if(message == 'Location not available'){
                        //     console.log(message, 'error___________________error');
                        //     Alert.alert('','Please turn on your mobile location first')
                        // }
                    })
            })
    }

    componentDidMount() {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<font color='#ffffff'>Use Location ?</font>",
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
            this.getLocations()
            console.log(success, 'success_________success');
        }).catch((error) => {
            console.log(error.message);
        });
    }


    render() {
        let logo = require('./../../../images/logo.png')
        const { shops } = this.state
        return (
            <AppContainer pageName={'Shops'} navigation={this.props.navigation} header={true}>
                <ScrollView style={{ flex: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', paddingBottom: 10 }}>
                        <TouchableOpacity onPress={() => { this.setState({ shops: 'all' }) }} activeOpacity={0.9}>
                            <Text style={{ textAlign: 'center', paddingHorizontal: 10, color: shops == 'all' ? '#f79321' : 'grey', fontSize: 14, fontWeight: 'bold', borderBottomWidth: 3, padding: 5, borderColor: shops == 'all' ? '#f79321' : 'grey', }}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setState({ shops: 'nearby' }) }} activeOpacity={0.9}>
                            <Text style={{ textAlign: 'center', paddingHorizontal: 10, color: shops == 'nearby' ? '#f79321' : 'grey', fontSize: 14, fontWeight: 'bold', borderBottomWidth: 3, padding: 5, borderColor: shops == 'nearby' ? '#f79321' : 'grey', marginLeft: 10, }}>Nearby</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginTop: 5, alignItems: "center", justifyContent: 'space-around', backgroundColor: '#f6f7f9', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* <View> */}
                        {vendors.map((key, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.9}>
                                    <VendersCard data={key} />
                                </TouchableOpacity>
                            )
                        })}
                        {/* </View> */}
                    </View >
                </ScrollView>
            </AppContainer>
        )
    }
}
const styles = StyleSheet.create({

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
)(Shops)
