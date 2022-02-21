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
import VendersCard from '../../Components/VendersCard';

import Carousel from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../Components/AppContainer';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: 'red', height: '80%' }}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={item}
                />
            </View>
        );
    }

    // componentWillUpdate() {
    //     const { language } = this.props
    //     this.setState({ language: language })
    //     console.log(language,'languagel_____llanguage')
    // }


    render() {
        const { language } = this.props
        var d = new Date();
        var time = d.getMinutes()
        var hours = d.getHours();
        console.log(hours.toString().length, 'language__ddd________language')
        let image = require('./../../../images/banner.jpg')
        let image2 = require('./../../../images/banner2.jpg')

        let cate1 = require('./../../../images/tshirt.jpg')
        let cate2 = require('./../../../images/pent.jpg')
        let cate3 = require('./../../../images/shoes.jpg')
        let cate4 = require('./../../../images/cap.jpg')
        let cate5 = require('./../../../images/glasses.jpg')

        let shop1 = require('./../../../images/shop1.jpg')
        let shop2 = require('./../../../images/shop2.jpg')
        let shop3 = require('./../../../images/shop3.jpg')
        let shop4 = require('./../../../images/shop4.jpg')
        let shop5 = require('./../../../images/shop5.jpg')

        let produ = require('./../../../images/shoess.png')


        // let logo = require('./../../images/logo.png')
        let { button, vendorData, loader, AddsOns, vendorId, } = this.state
        var array = [image, image2, image, image2, image, image2,]
        var categories = [cate1, cate2, cate3, cate4, cate5, cate1, cate2, cate3, cate4, cate5]
        var products = [produ, cate4, cate3, cate4, cate1, cate2, cate3, cate4,]
        var vendors = [shop1, shop2, shop3, shop4, shop5,shop1, shop2, shop3, shop4, shop5, ]



        return (
            <AppContainer pageName={'Home'} navigation={this.props.navigation} header={true}>
                <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                    {/* <Header /> */}
                    {/* BANNER_____________________BANNER */}
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={{ height: 160, paddingVertical: 5, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
                            <Carousel
                                // ref={(c) => { this._carousel = c; }}
                                data={array}
                                loop={true}
                                autoplay={true}
                                layout={'default'}
                                renderItem={this._renderItem}
                                sliderWidth={windowWidth}
                                itemWidth={windowWidth - 50}
                                slideStyle={{ backgroundColor: 'green', borderRadius: 15, overflow: 'hidden', alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ height: 100, marginTop: 10 }}>
                            <View style={styles.headingView}>
                                <Text style={[styles.headingText, { flex: 1 }]}>Categories</Text>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('MainCategory') }} >
                                    <Text style={styles.headingText}>View All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {categories.map((key, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.5}>
                                                <CategoryCard data={key} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>

                        </View>
                        <View style={{ height: 190, marginTop: 10 }}>
                            <View style={styles.productHeadingView}>
                                <Text style={[styles.headingText, { flex: 1 }]}>Polular Products</Text>
                                <Text style={styles.headingText}>View All</Text>
                            </View>
                            <View style={styles.productCardView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {products.map((key, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.9}>
                                                <ProductsCard data={key} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                        <View style={{ height: 190, marginTop: 5 }}>
                            <View style={styles.productHeadingView}>
                                <Text style={[styles.headingText, { flex: 1 }]}>Products</Text>
                                <Text style={styles.headingText}>View All</Text>
                            </View>
                            <View style={styles.productCardView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {products.map((key, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.9}>
                                                <ProductsCard data={key} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                        <View style={{ height: 190, marginTop: 5 }}>
                            <View style={styles.productHeadingView}>
                                <Text style={[styles.headingText, { flex: 1 }]}>Products</Text>
                                <Text style={styles.headingText}>View All</Text>
                            </View>
                            <View style={styles.productCardView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {products.map((key, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.9}>
                                                <ProductsCard data={key} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                        <View style={{ height: 190, marginTop: 5 }}>
                            <View style={styles.productHeadingView}>
                                <Text style={[styles.headingText, { flex: 1 }]}>Popular Vendors</Text>
                                <Text style={styles.headingText}>View All</Text>
                            </View>
                            <View style={styles.productCardView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {vendors.map((key, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.9}>
                                                <VendersCard data={key} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                    </ScrollView>
                    {/* <Text>Wellcome to home</Text> */}
                    {/* <BottomTabs navigation={this.props.navigation} /> */}
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
    productHeadingView: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginTop: 5, height: '15%', borderColor: 'red'
    },
    productCardView: {
        height: '85%', flexDirection: 'row', marginTop: -5, marginHorizontal: 5, borderBottomWidth: 0.5, borderBottomColor: 'lightgrey'
    }


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
)(Home)
