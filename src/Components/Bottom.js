
import React, { useState } from "react";
import {
    StyleSheet,
    Text, TouchableOpacity, View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

// AntDesign
import { Drawer, Icon } from 'native-base'; 
// import SideBar from '../Sidebar/index';

const Bottom = ({ navigation }) => {

    const [pageName, setpageName] = useState(navigation?.state.routeName? navigation?.state.routeName :'')
    console.log(navigation?.state.routeName, 'props_______pageName')
    const buttonCall = (pageName) => {
        // setpageName(pageName)
        navigation.navigate(pageName)
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
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Emergency') }}>
                    <AntDesign name="notification" style={{ fontSize: 20, color: pageName == 'Categories' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Categories' ? "#04243d" : "grey", fontSize: 12 }}>Emergency</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('Emergencies') }}>
                    <FontAwesome5 name="first-aid" style={{ fontSize: 20, color: pageName == 'Cart' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Cart' ? "#04243d" : "grey", fontSize: 12 }}>Emergencies</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('HelpScreen') }}>
                    <AntDesign name="search1" style={{ fontSize: 20, color: pageName == 'Search' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Search' ? "#04243d" : "grey", fontSize: 12 }}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsView}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable} onPress={() => { buttonCall('MyAccount') }}>
                    <FontAwesome name="user-o" style={{ fontSize: 20, color: pageName == 'Account' ? "#04243d" : "grey" }} />
                    <Text style={{ fontWeight: 'bold', color: pageName == 'Account' ? "#04243d" : "grey", fontSize: 12 }}>My Account</Text>
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