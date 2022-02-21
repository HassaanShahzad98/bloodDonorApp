import React, { Component } from 'react'
import {
    Image,
    Dimensions, Keyboard,
    StyleSheet,
    Text,
    ActivityIndicator,
    ImageBackground,
    Item, Icon, Button, Input, TextInput,
    View, PanResponder,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { changeLanguage } from "../../store/action/action";

class IntroScreens extends React.Component {
    constructor() {
        super()
        this.state = {
            showRealApp: false,
            slides: [
                {
                    key: 1,
                    title: 'SKIP',
                    // icon: require('./../../images/Logo.png'),
                    headingText: 'Welcome to intown',
                    text: 'intown is a multi vendor based E-commerce company with 100+ Catageries, thousands of products, Free delivery and benefits for both sellers and buyers',
                    // image: require('./../../images/bg-img.png'),
                    backgroundColor: 'green',
                },
                {
                    key: 2,
                    title: 'SKIP',
                    headingText: 'Choose your desired product',
                    text: 'intown offers thousands of products, So you can easily buy your desired product.',
                    // image: require('./../../images/bg-img.png'),
                    backgroundColor: '#febe29',
                },
                {
                    key: 3,
                    title: 'SKIP',
                    headingText: 'Complete your shopping',
                    text: 'A complete shopping destination where you can find and purchase  all your regarding products.',
                    // image: require('./../../images/bg-img.png'),
                    backgroundColor: '#22bcb5',
                },
                {
                    key: 4,
                    title: 'GET STARTED',
                    headingText: 'Get product at your door',
                    text: 'intown provides you free home  delivery just at one click you can get your products at your door step',
                    // image: require('./../../images/bg-img.png'),
                    backgroundColor: '#22bcb5',
                },
            ]
        }
    }


    renderItem = ({ item }) => {
        let logo = require('./../../../images/logo.png')

        console.log(item, 'item___________item')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>

                    {/* <ImageBackground source={item.image} style={styles.bg_image} > */}
                    <View style={{ flex: 1, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: 190, width: 190, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={logo} style={{ height: 75, width: 160 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25, }}>{item.headingText}</Text>
                            <Text style={{ color: '#fff', paddingHorizontal: 20, paddingVertical: 10, fontSize: 15, marginTop: 10, textAlign: 'center' }}>{item.text}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: '20%' }}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.props.navigation.navigate('App') }} style={styles.skipButton}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#f79321' }}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>

                {/* </ImageBackground> */}
            </View >
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    componentDidMount() {
        AsyncStorage.setItem('userData', JSON.stringify(true))

    }
    render() {
        // let logo = require('./../../images/splash.jpg')
        const { slides } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#f79321' }}>
                <AppIntroSlider renderItem={this.renderItem} data={slides} showNextButton={false} showDoneButton={false} onDone={this._onDone} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    skipButton: {
        borderWidth: 1,
        borderColor: 'red',
        height: 45,
        width: 220,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        borderColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg_image:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
})

function mapStateToProps({ root }) {
    // const { language } = root
    return {}
}

function mapDispatchToProps(dispatch) {
    return ({
        // actions: bindActionCreators({
        //     changeLanguage
        // }, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntroScreens)