import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, ActivityIndicator, ScrollView } from 'react-native'
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
import AsyncStorage from '@react-native-community/async-storage'
const axios = require('axios');



class AddFriend extends Component {

    constructor() {
        super()
        this.state = {
            page: 'add',
            loader: true,
            userData: '',
            friendData : [],
            addfriends : [],
        }
    }

    // state = {
    //     page: '',
    //     loader: true,
    // }

    componentDidMount() {
        AsyncStorage.getItem('userData').then((value) => {
            var userData = JSON.parse(value)
            this.setState({ userData: userData})
        })
         setTimeout(() => {
            this.fetchFriend()
         }, 1000);
    }

    fetchFriend() {
        const { userData } = this.state
        console.log('userDatafetchFriend' ,userData)
        var formData = new FormData()
        axios.get(
            `https://freeonlineskills.com/maddad/friends?id=${userData.id}`,
            //`https://freeonlineskills.com/maddad/friends?id=1`, //for test
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
                    // AsyncStorage.setItem('userData', JSON.stringify(response.data.collection))
                    this.setState({
                         loader: false,
                         friendData : response.data.collection
                        })
                  
                    //this.props.navigation.navigate('Login')
                }
                else {
                    console.log(response);
                    this.setState({ loader: false })
                    Alert.alert('', response.data.msg)
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

    fetchaAdd() {
        const { userData } = this.state
        console.log('userDatafetchFriend' ,userData)
        var formData = new FormData()
        axios.get(
            `https://freeonlineskills.com/maddad/friends?id=${userData.id}`,
            //`https://freeonlineskills.com/maddad/friends?id=1`, //for test
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
                    // AsyncStorage.setItem('userData', JSON.stringify(response.data.collection))
                    this.setState({
                         loader: false,
                         addfriends : response.data.collection
                        })
                  
                    //this.props.navigation.navigate('Login')
                }
                else {
                    console.log(response);
                    this.setState({ loader: false })
                    Alert.alert('', response.data.msg)
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


    render() {
        const { page } = this.state
        const { friendData , addfriends } = this.state
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>Add Friend</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 60, paddingVertical: 10, display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { this.setState({ page: 'friend' }) }} style={{ backgroundColor: page == 'friend' ? '#233ad8' : '#ffffff', flex: 1.5, borderRadius: 30, borderWidth: 1, borderColor: '#233ad8', marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: page == 'friend' ? '#ffffff' : '#233ad8' }}>Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setState({ page: 'add' }) }} style={{ backgroundColor: page == 'add' ? '#233ad8' : '#ffffff', flex: 1, borderRadius: 30, borderWidth: 1, borderColor: '#233ad8', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: page == 'add' ? '#ffffff' : '#233ad8' }}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setState({ page: 'request' }) }} style={{ backgroundColor: page == 'request' ? '#233ad8' : '#ffffff', flex: 1.5, borderRadius: 30, borderWidth: 1, borderColor: '#233ad8', marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: page == 'request' ? '#ffffff' : '#233ad8' }}>Request</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: 55, marginTop: 10, }}>
                        <TextInput
                            style={{
                                margin: 5, paddingLeft: 20, borderRadius: 25, backgroundColor: '#ffffff',
                                shadowOpacity: 10,
                                elevation: 4,
                                shadowRadius: 5
                            }}
                            onChangeText={(e) => { console.log(e, 'ddddddddddd') }}
                            multiline={true}
                            numberOfLines={2}
                            placeholder='Search friends'
                        />
                    </View>

                    <ScrollView style={{ marginTop: 2 }}>
                        {
                            page == 'friend' ?
                                //[1, 2, 3, 4]
                                friendData
                                .map((item , index) => (
                                    <View style={{ paddingLeft: 20, justifyContent: 'center', elevation: 2, height: 80, borderRadius: 15, margin: 10, backgroundColor: '#ffffff' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ color: 'grey' }}>{item.email}</Text>
                                    </View>
                                ))
                                :
                                page == 'add' ?
                                addfriends.map((item , index) => (
                                        <View style={{ flexDirection: 'row', paddingLeft: 20, alignItems: 'center', elevation: 2, height: 80, borderRadius: 15, margin: 10, backgroundColor: '#ffffff' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ color: 'grey' }}>{item.email}</Text>
                                            </View>
                                            <Entypo
                                                onPress={() => { }}
                                                name="plus" style={{ fontSize: 30, color: "#233ad8", paddingRight: 15 }}
                                            />
                                        </View>
                                    ))
                                    :
                                    [1, 2, 3, 4].map(() => (
                                        <View style={{ paddingLeft: 20, justifyContent: 'center', elevation: 2, height: 120, borderRadius: 15, margin: 10, backgroundColor: '#ffffff' }}>
                                            <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>M Yasir</Text>
                                                <Text style={{ color: 'grey' }}>yasir@gmail.com</Text>
                                            </View>
                                            <View style={{ flex: 1, paddingVertical: 10, display: 'flex', flexDirection: 'row' }}>
                                                <TouchableOpacity style={{ backgroundColor: '#233ad8', borderRadius: 30, marginHorizontal: 5, alignItems: 'center', flex: 1.5, justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 16, color: '#ffffff' }}>Confirm</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ backgroundColor: 'red', flex: 1.5, borderRadius: 30, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 16, color: '#ffffff' }}>Request</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))
                        }
                    </ScrollView>

                </View>

                {/* </ScrollView> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);


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
