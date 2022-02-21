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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {  TextInput } from 'react-native-paper';

// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import MessageCard from '../../../../Components/MessageCard';


// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeColors } from 'react-navigation';
class Chats extends Component {
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
            message: '',
            // messageDetails: [],
            messageDetails: [
                { name: 'Zeeshan', message: 'i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem', userId: 2, time: '10:33' },
                { name: 'Haseeb', message: 'i think just ever mind not a confirm this problem', userId: 2, time: '10:33' },
                { name: 'Hamza', message: 'i think just ever mind not a confirm this problem', userId: 2, time: '10:33' },
                { name: 'Waqas', message: 'i think just ever mind not a confirm this problem', userId: 1, time: '10:33' },
                { name: 'Zeeshan', message: 'i think just ever mind not a confirm ot a confirm this problem i think just ever mind not a confirm this problem', userId: 2, time: '10:33' },
                { name: 'Haseeb', message: 'i think just ever mind not a confirm this problem', userId: 1, time: '10:33' },
                { name: 'Hamza', message: 'i think just ever mind not a confirm this problem', userId: 2, time: '10:33' },
                { name: 'Waqas', message: 'i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem i think just ever mind not a confirm this problem', userId: 1, time: '10:33' },
            ]
        }
    }

    sendMessage() {
        const { message, messageDetails } = this.state
        messageDetails.push({ name: 'Waqas', message: message, userId: 1, time: '10:33' })
        this.setState({ messageDetails, message: '' })
    }

    render() {
        // var messageDetails = [1, 2, 3, 4, 1, 2, 3, 4,]

        // console.log(ThemeColors, 'ThemeColors_____________________ThemeColors')
        const { email, message, messageDetails, passShow, repeatPassShow, userName, password, repeatPassword } = this.state
        // let logo = require('./../../../images/logo.png')
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f9' }}>
                <View style={{ height: 60, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, flexDirection: 'row', backgroundColor: '#f79321', }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '700', color: '#ffffff' }}>Chats</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    </View>
                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <ScrollView
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight) => {
                            this.scrollView.scrollResponderScrollToEnd({ animated: true });
                        }}
                        style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
                        {
                            messageDetails && messageDetails.length ?
                                messageDetails.map((key, index) => {
                                    return (
                                        <TouchableOpacity activeOpacity={0.8} >
                                            <MessageCard details={key} />
                                        </TouchableOpacity>
                                    )
                                })
                                : <Text>No message</Text>
                        }
                    </ScrollView>
                </ScrollView>
                <View>
                    {/* <ScrollView > */}
                    <View style={{ borderWidth: 0.5, height: 60, borderRadius: 15, borderColor: '#f79321', paddingHorizontal: 5, marginHorizontal: 10, marginVertical: 5, overflow: 'hidden', flexDirection: 'row', alignItems: 'center' }}>

                        <TextInput
                            style={{ width: '90%', maxHeight: 120, }}
                            multiline={true}
                            numberOfLines={3}
                            placeholder="Type your message"
                            onChangeText={(value) => { this.setState({ message: value }) }}
                            value={message}
                        />
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { message ? this.sendMessage() : null }} >
                            <MaterialIcons size={25} color={message ? '#f79321' : 'grey'} name="send" />
                        </TouchableOpacity>
                    </View>
                    {/* </ScrollView> */}
                </View>
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
)(Chats)
