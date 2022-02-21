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
class Cart extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }


    render() {
        let logo = require('./../../../images/logo.png')
        return (
            <AppContainer pageName={'Cart'} navigation={this.props.navigation} header={false} >
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#f6f7f9' }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'center' }}>Cart</Text>
                    </View>
                </View >
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
)(Cart)
