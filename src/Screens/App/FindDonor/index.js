import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, ScrollView } from 'react-native'
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



class FindDonor extends Component {
    //   signin = () => {
    //     this.props.authWithFacebook(this.props.navigation);
    //   }
    //   componentDidMount() {
    //     this.props.getUserSession(this.props.navigation);
    //   }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ height: 170, backgroundColor: '#e73630', borderBottomLeftRadius: 150, borderBottomRightRadius: 150 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ paddingTop: 10, paddingLeft: 10, }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 22, fontWeight: 'bold', paddingBottom: 15 }}>FIND A DONOR</Text>
                        <Image style={{ height: 65, width: 70 }}
                            source={require('../../../../images/finda.png')}
                        />
                    </View>
                    {/* <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Emrergency</Text> */}
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 25 }}>
                    <Text style={{ color: '#e73630', fontSize: 23, textAlign: 'center' }}>Please select the blood group that you want !!</Text>
                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#e73630', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#ffffff' }}>A+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>O+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>B+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>AB+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>A-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>O-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', marginTop: 20, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>B-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ elevation: 3, shadowOpacity: 0.5, backgroundColor: '#ffffff', height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Text style={{ fontSize: 28, color: '#e73630' }}>AB-</Text>
                        </TouchableOpacity>
                    </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(FindDonor);


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
