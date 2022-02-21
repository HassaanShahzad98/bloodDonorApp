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

// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../../Components/AppContainer';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeColors } from 'react-navigation';
class GuideLine extends Component {
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
        // console.log(ThemeColors, 'ThemeColors_____________________ThemeColors')
        const { email, passShow, repeatPassShow, userName, password, repeatPassword } = this.state
        // let logo = require('./../../../images/logo.png')
        return (
            <AppContainer pageName={'GuideLine'} navigation={this.props.navigation} header={false} >
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#f6f7f9' }}>
                    <Text>Guide Line</Text>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={require('../../../../images/Explainer-Video-Mobile-Device-GIF.gif')}
                    />
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
)(GuideLine)
