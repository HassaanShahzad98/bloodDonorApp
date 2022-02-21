import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    ActivityIndicator,
    FlatList,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Drawer, Icon } from 'native-base';
// import MessageCard from '../../Components/MessageCard'
// import { venueDataSaveInStore } from "../../store/action/action";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios';
// import * as firebaseObj from "firebase";
// import { firebaseConfig } from "../../store/action/action";


// if (!firebaseObj.apps.length) {
//     firebaseObj.initializeApp(firebaseConfig);
// }

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Message extends Component {
    constructor() {
        super()
        this.state = {
            loader: false,
            error: '',
            message: '',
            // messageDetails: [],

        }
    }


    render() {
        let { firstName, surName, email, password, number, error, loader, messageDetails } = this.state
        const { userId, name, message, time } = this.props.details
        // var msg = this.props.details
        // console.log(sss, 'sss__________________________sss')
        // console.log(this.props.details, 'this_props_data')
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }
        return (
            <View style={{ flexDirection: userId == 1 ? 'row-reverse' : 'row', marginBottom: 15, }}>
                <View style={{ height: 40, width: 40, borderRadius: 50, overflow: 'hidden', }}>
                    <Image source={{ uri: 'https://menshaircuts.com/wp-content/uploads/2021/05/tp-boys-haircuts-2.jpg' }} style={{ height: 40, width: 40 }} />
                </View>
                <View style={{ shadowOpacity: 0.5, elevation: 2, shadowColor: '#ffffff', width: '80%', borderRadius: 10, marginHorizontal: 10, padding: 10, backgroundColor: userId == 1 ? '#f79321' : '#dcdcdc', display: 'flex' }}>
                    {/* <View style={{ flex: 1.1, display: 'flex', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 20, textAlignVertical: 'bottom', fontWeight: 'bold', color: '#2ec286' }}>JHON DOE</Text>
                    </View> */}
                    {/* <View style={{  display: 'flex', }}> */}
                    <Text style={{ width: '100%', color: userId == 1 ? '#fff' : null, fontSize: 12 }}>{message}</Text>
                    <Text style={{ width: '100%', textAlign: 'right', textAlignVertical: 'bottom', fontSize: 10, marginBottom: -5, color: userId == 1 ? '#fff' : 'grey', fontSize: 10, }}>{time} Pm</Text>


                    {/* </View> */}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})


function mapStateToProps({ root }) {
    // const { venueData } = root
    return {}
}

function mapDispatchToProps(dispatch) {
    return ({
        // actions: bindActionCreators({
        //     venueDataSaveInStore
        // }, dispatch),
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message)
