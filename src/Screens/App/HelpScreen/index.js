
import React, { Component } from 'react'
import { StyleSheet, Alert, View, Text, Image, ActivityIndicator, ScrollView, Modal,TextInput } from 'react-native'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import Bottom from '../../../Components/Bottom';
import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios');



class HelpScreen extends Component {

    constructor() {
        super()
        this.state = {
            userData: {},
            description : '',
        }
    }

    sendHelpDescription(){
        const { userData ,description } = this.state
        var formData = new FormData()
        axios.post(
            `https://freeonlineskills.com/maddad/quiries?user_id=${userData.id}&description=${description}`,
            //`https://freeonlineskills.com/maddad/quiries?user_id=3&description=hdfgwydwcf`, //for test
            //formData,
            // {
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'multipart/form-data',
            //     } 
            // }
        )
            .then((response) => {
                //console.log('addFriendResponsse', response.data.collection)
                if (response && response.data && response.data.status == 'success') {
                    this.setState({
                         loader: false,
                        })
                  
                        Alert.alert(
                            "",
                            "Your Response has been submitted",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                }
                else {
                    console.log(response);
                    this.setState({ loader: false })
                    Alert.alert('', 'Network Error')
                }
                //handle success
            })
            .catch(function (error) {
                // handle error
                Alert.alert('', 'Network error')
    
            })
            .then(function () {
                // always executed
            });
    }

   
    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData : userData })
        })
    }


    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }


    render() {
        const { modalVisible , description } = this.state
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Help</Text>
                </View>
                <View style={{ flex: 1 , justifyContent:'center', alignContent:'center',alignItems:'center' }}>
                    {/* <TextInput
                        style={{  backgroundColor:'grey', width:'80%' }}
                       // onChangeText={(value) => { this.setState({ repeatPassword: value }) }}
                       // value={repeatPassword}
                        placeholder="type your problem here..."
                       // secureTextEntry={repeatPassShow}
                    /> */}
                
                     <View style={{ borderRadius: 10, paddingHorizontal: 10, marginVertical: 5,marginBottom:10, backgroundColor: "#c1d7ef", flexDirection: 'row' }}>
                            <FontAwesome name="question-circle" style={{ textAlign: 'center', width: 30,marginTop:10 }} size={20} color="#1713c0" />
                            <TextInput
                                style={{ width: '80%', height:200 ,textAlignVertical: 'top'}}
                                onChangeText={(value) => { this.setState({ description: value }) }}
                                value={description}
                                placeholder="Type your Problem Here..."
                            />
                        </View>

                    <TouchableOpacity
                    style={{backgroundColor: '#233ad8' , height:40 , width:80,justifyContent:'center',borderRadius:10}}
                    onPress={()=>{
                        this.sendHelpDescription()
                    }}
                    >
                        <Text style={{textAlign:'center' , color:'#fff'}}>SUBMIT</Text>
                    </TouchableOpacity>


                </View>

                {/* </ScrollView> */}
                <Bottom navigation={this.props.navigation} />
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


export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen);


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
