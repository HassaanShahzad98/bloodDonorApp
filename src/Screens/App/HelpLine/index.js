import React, { Component } from 'react'
import { StyleSheet, View, Text, Linking, Image, ActivityIndicator, ScrollView } from 'react-native'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import Bottom from '../../../Components/Bottom'



class HelpLine extends Component {
    //   signin = () => {
    //     this.props.authWithFacebook(this.props.navigation);
    //   }
    //   componentDidMount() {
    //     this.props.getUserSession(this.props.navigation);
    //   }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>HelpLine</Text>
                </View>
                <View style={{ flex: 1 }}>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL(`tel:${115}`) }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Text style={{ fontSize: 20, }}>Edhi Ambulance</Text>
                                <Text style={{ fontSize: 20, }}>ایدھی ایمبولینس</Text>
                            </View>
                            <Text style={{ fontSize: 20, }}>115</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL(`tel:${99215960}`) }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Text style={{ fontSize: 20, }}>Civil Hospital</Text>
                                <Text style={{ fontSize: 20, }}>سول ہسپتال</Text>
                            </View>
                            <Text style={{ fontSize: 20, }}>992 15960</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL(`tel:${2413232}`) }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Text style={{ fontSize: 20, }}> Edhi Welfare Centre</Text>
                                <Text style={{ fontSize: 20, }}>ایدھی ویلفیئر سینٹر</Text>
                            </View>
                            <Text style={{ fontSize: 20, }}>241 3232</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL(`tel:${1122}`) }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <Text style={{ fontSize: 20, }}>Rescue Service</Text>
                            <Text style={{ fontSize: 20, }}>ریسکیو سروس</Text>
                            </View>
                            <Text style={{ fontSize: 20, }}>1122</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <View style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <Text style={{ flex: 2, fontSize: 20, }}>Civil Hospital</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <Text style={{ flex: 2, fontSize: 20, }}>Edhi Welfare Centre</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <View style={{ elevation: 3, shadowOpacity: 0.5, alignItems: 'center', height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                            <Text style={{ flex: 2, fontSize: 20, }}>Rescue Service</Text>
                        </View>
                    </View> */}
                </View>

                {/* </ScrollView> */}
                {/* <Bottom navigation={this.props.navigation} /> */}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.reducer.user,
        error: state.reducer.error,
        loader: state.reducer.loader

    })
}

function mapDispatchToProps(dispatch) {
    return ({
        authWithFacebook: (navigation) => {
            dispatch(authWithFacebook(navigation));
        },
        getUserSession: (navigation) => {
            dispatch(getUserSession(navigation));
        },
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(HelpLine);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // flexDirection: "column",
        backgroundColor: "#f3f3f3"
    },
    headingText: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 28
    },
    regularText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        color: "grey"
    },
    loader: {
        marginTop: 100
    },
    error: {
        color: 'red',
        marginTop: 25,
        fontSize: 15,
        textAlign: "center"
    }
})
