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

var categories = [cate5, cate1, cate2, cate3, cate4, cate1, cate2, cate3, cate4, cate5]


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class SubCategory extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }


    render() {
        let logo = require('./../../../images/logo.png')
        return (
            <AppContainer pageName={'Sub Categories'} navigation={this.props.navigation} header={true}>
                <ScrollView style={{ flex: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#f6f7f9' }}>
                        {/* <View> */}
                        {categories.map((key, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('ChildCategory')}}>
                                    <View style={{
                                        flexDirection: 'row', height: 85, marginVertical: 10, borderRadius: 5, width: '90%',
                                        shadowColor: "#ffffff",
                                        shadowOpacity: 0.20,
                                        shadowRadius: 5,
                                        elevation: 3,
                                    }}>
                                        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                            <CategoryCard data={key} />
                                        </View>
                                        <View style={{ flex: 3, justifyContent: 'center' }}>
                                            <Text style={{ fontWeight: 'bold' }}>Shoes</Text>
                                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'grey', }}>1200 Items</Text>
                                        </View>
                                        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                                            <Entypo name="chevron-right" style={{ fontSize: 25, color: "#f79321" }} />
                                        </View>
                                    </View>
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
)(SubCategory)
