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
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {  TextInput } from 'react-native-paper';

// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-community/async-storage'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import AppContainer from '../../../../Components/AppContainer';

import CategoryCard from '../../../../Components/CategoryCard';

// import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeColors } from 'react-navigation';
class Orders extends Component {
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
        // images/tshirt.jpg

        let cate1 = require('./../../../../../images/tshirt.jpg')
        let cate2 = require('./../../../../../images/pent.jpg')
        let cate3 = require('./../../../../../images/shoes.jpg')
        let cate4 = require('./../../../../../images/cap.jpg')
        let cate5 = require('./../../../../../images/glasses.jpg')

        var categories = [cate1, cate2, cate3, cate4, cate5, cate1, cate2, cate3, cate4, cate5]
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
                        <Text style={{ fontWeight: '700', color: '#ffffff' }}>Order list</Text>
                    </View>
                </View>

                {/* <View style={{ paddingTop: 20, }}> */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, marginVertical: 5, alignItems: "center", }}>
                        {/* <View> */}
                        {categories.map((key, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.7} >
                                    <View style={{
                                        backgroundColor: '#ffffff',
                                        flexDirection: 'row', overflow: 'hidden', height: 85, marginVertical: 5, borderRadius: 10, width: '90%',
                                        shadowOpacity: 5,
                                        elevation: 2,
                                    }}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            {/* <CategoryCard data={key} /> */}
                                            <Image
                                                style={{ height: '90%', width: '90%', }}
                                                source={key}
                                            />
                                        </View>
                                        <View style={{ flex: 2, paddingLeft: 5 }}>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 2, justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: '#f79321', fontWeight: '700' }}>Tshirt</Text>
                                                </View>
                                                <View style={{ shadowOpacity: 3, elevation: 2, flex: 1, borderBottomLeftRadius: 10, backgroundColor: '#f79321', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: '#ffffff' }}>699</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                                <Text style={{ flex: 2, color: 'grey', fontSize: 10, paddingRight:5 }}>seem like such minor parts of a website in the grand </Text>
                                                <Text style={{ flex: 1, fontSize: 10, color: '#f79321', fontWeight: '700', textAlign: 'center', textAlignVertical: 'bottom' }}>Delivered</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                    {[1, 2, 3, 4, 5].map(() => { return <AntDesign name="star" style={{ fontSize: 10, color: "#f79321" }} /> })}
                                                </View>
                                                <View style={{ flex: 1, alignItems:'center', justifyContent:"center"  }}>
                                                    <Text style={{fontSize:10, color:'grey'}}>Qty : 2</Text>
                                                </View>
                                                <View style={{ flex: 1, alignItems:'center', justifyContent:"center"  }}>
                                                    <Text style={{fontSize:10, color:'grey'}}>2 days ago</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        {/* </View> */}
                    </View >

                </ScrollView>
                {/* </View> */}



            </View >
            // {/* </AppContainer> */}
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
)(Orders)
