
import React from "react";
import {
    StyleSheet,
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { Drawer, Icon } from 'native-base';
// import SideBar from '../Sidebar/index';

const CategoryCard = ({ ...props }) => {
    return (
        <View style={styles.mainView}>
            {/* <Text>{key}</Text> */}
            <Image
                style={{ height: '100%', width: '100%', }}
                source={props.data}
            />
        </View>

    );
};
export default CategoryCard;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: 10, height: 55, width: 55, margin: 10, alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 1,
        elevation: 5,
    },
})
