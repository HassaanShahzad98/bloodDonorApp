
import React, { useState } from "react";
import {
    StyleSheet,
    Text, TouchableOpacity, View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

// AntDesign
import { Drawer, Icon } from 'native-base';
// import SideBar from '../Sidebar/index';

const Bottom = ({ ...props }) => {

    const [pageName, setpageName] = useState(props.pageName ? props.pageName : '')
    console.log(props.pageName, 'props_______pageName')
    const buttonCall = (pageName) => {
        setpageName(pageName)
        // console.log(props.navigation, 'props_________navigation')
        // props.navigation.navigate(pageName)
    }


    return (
        <View style={styles.mainView}>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Home') }}>
                    <AntDesign name="home" style={{ fontSize: 20, color: pageName == 'Home' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Home' ? "#04243d" : "grey", fontSize: 12 }}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Categories') }}>
                    <AntDesign name="database" style={{ fontSize: 20, color: pageName == 'Categories' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Categories' ? "#04243d" : "grey", fontSize: 12 }}>Location</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Cart') }}>
                    <AntDesign name="shoppingcart" style={{ fontSize: 20, color: pageName == 'Cart' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Cart' ? "#04243d" : "grey", fontSize: 12 }}>Camera</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Search') }}>
                    <AntDesign name="search1" style={{ fontSize: 20, color: pageName == 'Search' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Search' ? "#04243d" : "grey", fontSize: 12 }}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Account') }}>
                    <FontAwesome name="user-o" style={{ fontSize: 20, color: pageName == 'Account' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Account' ? "#04243d" : "grey", fontSize: 12 }}>Setting</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
};
export default Bottom;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row', height: 55, backgroundColor: '#ffffff',
    },
    tabsView: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    touchable: {
        alignItems: 'center', justifyContent: "center"
    }
})