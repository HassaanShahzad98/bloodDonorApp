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



class FreeFood extends Component {
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
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>FreeFood</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/Uum9aYF1iAFVTQUXA') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Punjab Chowrangi</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/fLKSBDWR9b1pTBFf8') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Numaish</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/KUSFKGPEpLXvhG2t7') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Gulshan Maskan</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/TjD4wY7vH9T5FiBz8') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Civil</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/dkLVvEwtFLNr3mdE8') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Saddar</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/cuL8qdPejriqkcbT6') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Paposh Nagar </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/v6wTh6mxNV9ZYHbY6') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Bahadurabad</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { Linking.openURL('https://maps.app.goo.gl/VABVzCiA4BXK5bjd6') }} style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <View style={{ elevation: 3, shadowOpacity: 0.5, justifyContent: 'center', alignItems: "center", height: 90, backgroundColor: '#ffffff', borderRadius: 15, }}>
                                <Text style={{ fontSize: 20, }}>Korangi 4</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* </ScrollView> */}
                {/* <Bottom /> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(FreeFood);


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
