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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'
import Header from '../../Components/Header';
import BottomTabs from '../../Components/Bottom';
import CategoryCard from '../../Components/CategoryCard';
import ProductsCard from '../../Components/ProductsCard';
import Carousel from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../Components/AppContainer';



let cate1 = require('./../../../images/tshirt.jpg')
let cate2 = require('./../../../images/pent.jpg')
let cate3 = require('./../../../images/shoes.jpg')
let cate4 = require('./../../../images/cap.jpg')
let cate5 = require('./../../../images/glasses.jpg')

var categories = [cate5, cate1, cate2, cate3, cate4, cate1, cate2, cate3, cate4, cate5, cate5, cate1, cate2, cate3, cate4, cate1, cate2, cate3, cate4, cate5]


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Categories extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }


    render() {
        let logo = require('./../../../images/logo.png')
        return (
            <AppContainer pageName={'Categories'} navigation={this.props.navigation} header={true}>
                <ScrollView style={{ flex: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, marginTop:10, alignItems: "center",justifyContent:'center', backgroundColor: '#f6f7f9', flexDirection:'row', flexWrap:'wrap' }}>
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
)(Categories)
