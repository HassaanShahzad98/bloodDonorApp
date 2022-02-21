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
class HelpCenter extends Component {
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
                <View style={{ height: 160, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, backgroundColor: '#f79321', }}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: '#ffffff', height: 50, flexDirection: 'row', }}>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                        </TouchableOpacity>
                        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '700', color: '#ffffff' }}>Help Center</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Text style={{ fontWeight: '700', color: '#ffffff' }}>Help Center</Text> */}
                        </View>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', paddingHorizontal: 15, }}>
                        <Text style={{ color: '#ffffff', fontWeight: '700', fontSize: 13, marginBottom: 3, }}>Hi, how can we help?</Text>
                        <View onPress={() => { this.props.navigation.navigate('Address') }} activeOpacity={0.7} style={{ flexDirection: 'row', marginVertical: 5, borderRadius: 5, backgroundColor: '#ffffff', shadowColor: '#ffffff', shadowOpacity: 50, elevation: 2 }}>
                            <AntDesign name="search1" style={{ textAlignVertical: 'center', textAlign: 'center', width: '12%', height: 45, fontSize: 18, color: "#f79321" }} />
                            <TextInput
                                style={{ width: '85%', height: 45, fontSize: 12, }}
                                onChangeText={(value) => { this.setState({ helpCenter: value }) }}
                                value={helpCenter}
                                placeholder="Search for question. Like: How to return?"

                            />
                        </View>
                    </View>

                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 25 }} showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 5, marginTop: 15 }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>How to cancel the order ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{ marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>What is intown return policy ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>Why am I unable to apply Voucher ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={{ marginVertical: 5, }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>How to cancel the order ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>What is intown return policy ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Collapse>
                            <CollapseHeader activeOpacity={0.7}>
                                <View style={{ alignItems: 'center', borderWidth: 0.3, borderColor: '#f79321', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: 5, padding: 10, }}>
                                    <Text style={{ flex: 1, color: '#f79321', }}>Why am I unable to apply Voucher ?</Text>
                                    <EvilIcons name="chevron-right" size={25} style={{marginRight: -8, color: "#f79321" }} />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ borderWidth: 0.5, borderColor: '#ffffff', marginTop: -5, padding: 10, borderRadius: 5, backgroundColor: '#f79321' }}>
                                <Text style={{ color: '#ffffff', fontSize: 13 }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
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
)(HelpCenter)
