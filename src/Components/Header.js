
import React from "react";
import {
    StyleSheet, Image,
    Text, TouchableOpacity, View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import { Drawer, Icon } from 'native-base';
// import SideBar from '../Sidebar/index';
let logo = require('./../../images/whiteLogo.png')

const Header = ({ ...props }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.menuView}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Feather name="menu" style={{ fontSize: 30, color: "#ffffff" }} />
                </TouchableOpacity>
            </View>
            <View style={styles.logoView}>
                {/* <Image
                    style={{ height: '68%', width: '60%', }}
                    source={logo}
                /> */}
                <Text style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>{props.pageName}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', paddingRight: 10, justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable}>
                    <FontAwesome5 name="coins" style={{ fontSize: 18, color: "#ffffff" }} />
                </TouchableOpacity>
            </View>
            {props.pageName == 'Account' ?
                <View style={styles.notificationView}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.touchable}>
                        {/* <Text style={{ fontSize: 14, color: '#ffffff', paddingRight: 5 }}>intown Wallet</Text> */}
                        <MaterialIcons name="settings" style={{ fontSize: 22, textAlignVertical: 'bottom', color: "#ffffff" }} />
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.notificationView}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.touchable}>
                        {/* <Text style={{ fontSize: 14, color: '#ffffff', paddingRight: 5 }}>intown Wallet</Text> */}
                        <MaterialIcons name="notifications" style={{ fontSize: 22, textAlignVertical: 'bottom', color: "#ffffff" }} />
                    </TouchableOpacity>
                </View>
            }
            <View style={{ alignItems: 'flex-end', paddingRight: 5, justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchable}>
                    {/* <Text style={{ fontSize: 14, color: '#ffffff', paddingRight: 5 }}>intown Wallet</Text> */}
                    <Entypo name="wallet" style={{ fontSize: 22, color: "#ffffff" }} />
                </TouchableOpacity>
            </View>

        </View>

    );
};
export default Header;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row', height: 55, backgroundColor: '#f79321',
    },
    menuView: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    logoView: {
        flex: 4, paddingLeft: 10, justifyContent: 'center',
    },
    notificationView: {
        paddingRight: 10, alignItems: 'flex-end', justifyContent: 'center',
    },
    touchable: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    }
})
