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


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Search extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }

    // _renderItem = ({ item, index }) => {
    //     return (
    //         <View style={{ backgroundColor: 'red', height: '80%' }}>
    //             <Image
    //                 style={{ height: '100%', width: '100%' }}
    //                 source={item}
    //             />
    //         </View>
    //     );
    // }

    // componentWillUpdate() {
    //     const { language } = this.props
    //     this.setState({ language: language })
    //     console.log(language,'languagel_____llanguage')
    // }


    render() {
        let logo = require('./../../../images/logo.png')
        return (
            <AppContainer pageName={'Search'} navigation={this.props.navigation} header={false} >
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#f6f7f9' }}>
                    <View style={{ width: '100%' }}>

                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 70, width: 150, }}
                                source={logo}
                            />
                        </View>
                        <View style={{ borderWidth: 1, height: 40, borderColor: '#f79321', margin: 15, paddingHorizontal: 5, flexDirection: 'row', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flex: 1, padding: 5, }}>
                                <TextInput
                                    style={{ padding: 5 }}
                                    onChangeText={() => { }}
                                    placeholder="Search"
                                />
                            </View>
                            <AntDesign name="search1" style={{ paddingHorizontal: 10, fontSize: 20, color: "#f79321" }} />
                        </View>
                    </View>
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
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginTop: 5, height: '10%', borderColor: 'red'
    },
    productCardView: {
        height: '85%', flexDirection: 'row', marginTop: -5, borderBottomWidth: 0.5, borderBottomColor: 'lightgrey'
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
)(Search)
