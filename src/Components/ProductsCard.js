
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

const ProductsCard = ({ ...props }) => {
    return (
        <View style={styles.mainView}>
            <View style={{ height: '100%', width: '80%', }}>
                <View style={{ flex: 1.5, alignItems: 'center', padding: 10, flexDirection: 'row' }}>
                    <View style={{ height: '100%' }}>
                        <View style={{
                            backgroundColor: '#f79321', borderRadius: 25, marginLeft: -12, height: 18, width: 18, alignItems: 'center', justifyContent: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 10,
                                height: 10,
                            },
                            shadowOpacity: 0.50,
                            shadowRadius: 1,
                            elevation: 5,
                        }}>
                            <Text style={{ fontSize: 5, fontStyle: 'italic', color: '#ffffff', fontWeight: 'bold' }}>20%</Text>
                            <Text style={{ fontSize: 5, fontStyle: 'italic', color: '#ffffff', marginTop: -1.5, fontWeight: 'bold' }}>OFF</Text>
                        </View>
                        {/* <FontAwesome name="tag" style={{ fontSize: 25,marginLeft:-10, color: "orange" }} /> */}
                    </View>
                    {/* <View>

                    </View> */}
                    <Image
                        style={{ flex: 1, height: '95%', width: '90%' }}
                        source={props.data}
                    />
                </View>
                <View style={{ flex: 1, borderColor: 'red' }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: -5, }}>Nike Air</Text>
                    <Text style={{ fontSize: 10, marginTop: -5, fontWeight: 'bold' }}>Max 270</Text>
                    <Text style={{ fontSize: 6, color: 'grey', fontWeight: 'bold', }}>Nike Sneakers</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, paddingRight: 3, justifyContent: 'flex-end', }}>
                        {/* <Text>d</Text> */}
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
                    <View style={{ flex: 0.6, borderColor: 'green', alignItems: 'center', paddingBottom: 3, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 5, marginBottom: -2, color: 'grey', paddingLeft: 1, fontWeight: 'bold' }}>Price</Text>
                        <Text style={{ fontSize: 5, color: 'grey', fontWeight: 'bold', marginBottom: -1, color: "#f79321" }}>1499</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{ flex: 0.6, borderColor: 'green', marginRight: -2, paddingBottom: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <AntDesign name="hearto" style={{ fontSize: 10, color: "#f79321" }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};
export default ProductsCard;

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 12, overflow: 'hidden', height: 130, width: 100, margin: 8, backgroundColor: '#ffffff', alignItems: 'center',
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 10,
        //     height: 10,
        // },
        shadowOpacity: 0.50,
        shadowRadius: 1,
        elevation: 5,
    },
})
