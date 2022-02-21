import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    // Text,
    ImageBackground,
    View,
    TextInput,
    Dimensions,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
// import { Drawer, Icon } from 'native-base';
// // import { venueDataSaveInStore } from "../../store/action/action";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


// import AsyncStorage from '@react-native-community/async-storage'
import Headers from './Header';
import BottomTabs from './Bottom';
// import CategoryCard from '../../Components/CategoryCard';
// import ProductsCard from '../../Components/ProductsCard';
// import Carousel from 'react-native-snap-carousel';
// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;
import Home from './../Screens/App/home';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';



// import axios from 'axios';

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }

    render() {
        var { pageName, children, navigation, header } = this.props

        return (
            <>
                {header ? <Headers pageName={pageName} /> : null}
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <View style={{
                    height: 55, backgroundColor: '#f79321', bottom: 0
                }}>

                    <Footer>
                        <FooterTab style={{ backgroundColor: '#f79321', padding: 5, paddingHorizontal: 10, }}>
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Home') }}>
                                <Entypo name="home" style={{ fontSize: 20, color: pageName == 'Home' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Home' ? "#04243d" : "#ffffff", fontSize: 12 }}>Home</Text>
                            </TouchableOpacity>
                            {/* onPress={() => { navigation.navigate('Categories') }} */}
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('MainCategory') }} >
                                <AntDesign name="database" style={{ fontSize: 20, color: pageName == 'Categories' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Categories' ? "#04243d" : "#ffffff", fontSize: 12 }}>Categories</Text>
                            </TouchableOpacity>
                            {/* onPress={() => { navigation.navigate('Cart') }} */}
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Cart') }}  >
                                <Feather name="shopping-cart" style={{ fontSize: 20, color: pageName == 'Cart' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Cart' ? "#04243d" : "#ffffff", fontSize: 12 }}>Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Search') }}>
                                <AntDesign name="search1" style={{ fontSize: 20, color: pageName == 'Search' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Search' ? "#04243d" : "#ffffff", fontSize: 12 }}>Search</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Chat') }}>
                                <Entypo name="chat" style={{ fontSize: 20, color: pageName == 'Chat' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Chat' ? "#04243d" : "#ffffff", fontSize: 12 }}>Chat</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Shops') }}>
                                <Entypo name="shop" style={{ fontSize: 20, color: pageName == 'Shops' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Shops' ? "#04243d" : "#ffffff", fontSize: 12 }}>Shops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('GuideLine') }}>
                                <View style={{ height: 20, width: 20, overflow: 'hidden', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 30, width: 30 }}
                                        source={require('../../images/Explainer-Video-Mobile-Device-GIF.gif')}
                                    />
                                </View>
                                <Text style={{ fontWeight: 'bold', color: pageName == 'GuideLine' ? "#04243d" : "#ffffff", fontSize: 12 }}>Guide</Text>
                            </TouchableOpacity>
                            {/* onPress={() => { navigation.navigate('Account') }} */}
                            <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { navigation.navigate('Account') }}>
                                <FontAwesome name="user-o" style={{ fontSize: 20, color: pageName == 'Account' ? "#04243d" : "#ffffff" }} />
                                <Text style={{ fontWeight: 'bold', color: pageName == 'Account' ? "#04243d" : "#ffffff", fontSize: 12 }}>Account</Text>
                            </TouchableOpacity>
                        </FooterTab>
                    </Footer>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    touchable: {
        alignItems: 'center', justifyContent: "center"
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
)(AppContainer)
