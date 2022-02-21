
import React from "react";
import {
    StyleSheet,
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// FontAwesome
// AntDesign
import { Drawer, Icon } from 'native-base';
// import SideBar from '../Sidebar/index';

const VendorsCard = ({ ...props }) => {
    return (
        <View style={styles.mainView}>
            <View style={{ height: '100%', width: '100%', }}>
                <View style={{ flex: 3.5, borderRadius: 10, overflow: 'hidden', alignItems: 'center', shadowOpacity: 0.50, elevation: 2, }}>
                    <Image
                        style={{ flex: 1, height: '100%', width: '100%' }}
                        source={props.data}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 5, paddingBottom: 5 }}>
                    <View style={{ flex: 2, justifyContent: 'flex-end', paddingHorizontal: 5 }}>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', }}>Shop Name</Text>
                        {/* <Text style={{ fontSize: 10, marginTop: -5, fontWeight: 'bold' }}>Max 270</Text> */}
                        <Text style={{ fontSize: 6, color: 'grey', fontWeight: 'bold', }}>Gulshan-e-Iqbal, Karachi</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ paddingHorizontal: 5, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 6, color: 'grey', fontWeight: 'bold', marginLeft: 0.5 }}>Rating</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {[1, 2, 3, 4, 5].map(() => { return <AntDesign name="star" style={{ fontSize: 8, color: "#f79321" }} /> })}
                            </View>

                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, borderColor: 'green', alignItems: 'center', justifyContent: 'flex-end', }}>
                            <AntDesign name="hearto" style={{ fontSize: 11, color: "#f79321" }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, paddingRight: 3, justifyContent: 'flex-end', }}>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            alignItems: 'center', justifyContent: 'center', backgroundColor: '#f79321', height: 20, width: 20, borderTopEndRadius: 30, borderTopLeftRadius: 30,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: -10,
                                height: -10,
                            },
                            shadowOpacity: 0.50,
                            shadowRadius: 1,
                            elevation: 5,
                        }}>
                            <Entypo name="plus" style={{ fontSize: 12, color: "#ffffff" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, paddingBottom: 3, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 5, color: 'grey', paddingLeft: 1, fontWeight: 'bold' }}>Rating</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {[1, 2, 3, 4, 5].map(() => { return <AntDesign name="star" style={{ fontSize: 3.5, color: "#f79321" }} /> })}
                        </View>

                    </View>
                    
                </View> */}
            </View>
        </View>

    );
};
export default VendorsCard;

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 10, overflow: 'hidden', height: 140, width: 160, margin: 8, backgroundColor: '#ffffff', alignItems: 'center',
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 10,
        //     height: 10,
        // },
        shadowOpacity: 0.50,
        shadowRadius: 1,
        elevation: 3,
    },
})
