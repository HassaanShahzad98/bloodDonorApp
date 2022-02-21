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
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductsCard from '../../../../Components/ProductsCard';

// import {  TextInput } from 'react-native-paper';

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
class Favourites extends Component {
    constructor() {
        super()
        this.state = {
            language: '',
            userName: '',
            email: '',
            password: '',
            repeatPassword: '',
            passShow: true,
            repeatPassShow: true
        }
    }


    render() {

        let cate1 = require('./../../../../../images/tshirt.jpg')
        let cate2 = require('./../../../../../images/pent.jpg')
        let cate3 = require('./../../../../../images/shoes.jpg')
        let cate4 = require('./../../../../../images/cap.jpg')
        let cate5 = require('./../../../../../images/glasses.jpg')

        var categories = [cate1, cate2, cate3, cate4, cate5,]

        // console.log(ThemeColors, 'ThemeColors_____________________ThemeColors')
        const { email, passShow, repeatPassShow, userName, password, repeatPassword } = this.state
        // let logo = require('./../../../images/logo.png')
        return (
            // <AppContainer pageName={'Register'} navigation={this.props.navigation} header={false} >
            <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                <View style={{ height: 60, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, flexDirection: 'row', backgroundColor: '#f79321', }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ marginRight: 40, flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '700', color: '#ffffff' }}>My Favourites</Text>
                    </View>
                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 5 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, marginTop: 10, alignItems: "center", justifyContent: 'center', backgroundColor: '#f6f7f9', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* <View> */}
                        {categories.map((key, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.9}>
                                    <ProductsCard data={key} />
                                </TouchableOpacity>
                            )
                        })}
                        {/* </View> */}
                    </View >

                </ScrollView>
                {/* </View> */}

                <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', flexDirection: 'row', paddingLeft: 30, height: 60, borderTopRightRadius: 15, borderTopLeftRadius: 15, padding: 10, flexDirection: 'row', backgroundColor: '#f79321', }}>
                    <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                        <Text style={{fontSize:18, color: '#ffffff', fontWeight: '700' }}>Cart</Text>
                        <AntDesign name="shoppingcart" style={{ fontSize: 18, paddingLeft: 10, color: "#ffffff" }} />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row',paddingRight:10, justifyContent:'flex-end' }}>
                        <View style={{borderRadius:15, backgroundColor:'#ffffff', height:22, width:22, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:10, color:'#f79321'}}>5</Text>
                        </View>
                    </View>
                </TouchableOpacity>

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
)(Favourites)
