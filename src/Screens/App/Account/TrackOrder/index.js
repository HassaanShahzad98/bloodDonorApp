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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {  TextInput } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

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
class TrackOrders extends Component {
    constructor() {
        super()
        this.state = {
            language: '',
            userName: '',
            email: '',
            password: '',
            repeatPassword: '',
            passShow: true,
            repeatPassShow: true,
            helpCenter: ''
        }
    }


    render() {
        // console.log(ThemeColors, 'ThemeColors_____________________ThemeColors')
        const { email, helpCenter, passShow, repeatPassShow, userName, password, repeatPassword } = this.state
        // let logo = require('./../../../images/logo.png')
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                <View style={{ height: 60, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, backgroundColor: '#f79321', }}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: '#ffffff', height: 50, flexDirection: 'row', }}>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                        </TouchableOpacity>
                        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '700', color: '#ffffff' }}>Track Your Orders</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Text style={{ fontWeight: '700', color: '#ffffff' }}>Help Center</Text> */}
                        </View>
                    </View>
                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 25 }} showsVerticalScrollIndicator={false}>
                  
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
)(TrackOrders)
