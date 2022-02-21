import React, { Component } from 'react'
import { StyleSheet, Alert, View, Text, Image, ActivityIndicator, ScrollView, Modal } from 'react-native'
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



class FirstAid extends Component {
    state = {
        modalVisible: false,
        hartAttact: ["Call 911 or your local emergency number. Don't ignore the symptoms of a heart attack.", "Chew and swallow an aspirin while waiting for emergency help. Aspirin helps keep your blood from clotting. When taken during a heart attack", "Begin CPR if the person is unconscious. If the person isn't breathing or you don't find a pulse, begin CPR to keep blood flowing after you call for emergency medical help", "Push hard and fast on the center of the person's chest in a fairly rapid rhythm — about 100 to 120 compressions a minute"],
        breathing: ["Check the person's airway, breathing, and pulse. If necessary, begin CPR", "Help the person use any prescribed medicine (such as an asthma inhaler or home oxygen).", "Continue to monitor the person's breathing and pulse until medical help arrives. DO NOT assume that the person's condition is improving if you can no longer hear abnormal breath sounds, such as wheezing.", "If there are open wounds in the neck or chest, they must be closed immediately, especially if air bubbles appear in the wound. Bandage such wounds at once."],
        heatstroke: ["If you suspect heatstroke, call 911 or your local emergency number. Then immediately move the person out of the heat, remove excess clothing, and cool him or her by whatever means available,", "Place in a tub of cool water or a cool shower", "Spray with a garden hose.", "Fan while misting with cool water.", "Place ice packs or cool wet towels on the neck, armpits and groin."],
        earthquake: ["Unplug these as they could start fires when electricity is restored.", "If you see downed power lines, consider them energized and stay well away from them. Keep others away from them. Never touch downed power lines or any objects in contact with them.", "Stay away from chimneys and walls made of brick or block. They may be weakened and could topple during aftershocks. Don't use a fireplace with a damaged chimney. ", "Use extreme caution. Clean up any spilled medicines, drugs, or other non-toxic substances. Potentially harmful materials such as bleach, lye, garden chemicals, and gasoline or other petroleum products should be isolated or covered with an absorbent such as dirt or cat litter. When in doubt, leave your home."],
        bleeding: ["Remove any clothing or debris on the wound. Don't remove large or deeply embedded objects. Don't probe the wound or attempt to clean it yet. Your first job is to stop the bleeding. Wear disposable protective gloves if available.", "Stop the bleeding. Place a sterile bandage or clean cloth on the wound. Press the bandage firmly with your palm to control bleeding", "Don't remove the gauze or bandage. If the bleeding seeps through the gauze or other cloth on the wound, add another bandage on top of it. And keep pressing firmly on the area."],
        burn: ["Protect the burned person from further harm Make certain that the person burned is breathing", "Remove jewelry, belts and other restrictive items, especially from around burned areas and the neck. Burned areas swell rapidly.", "Cover the area of the burn. Use a cool, moist bandage or a clean cloth.", "Don't immerse large severe burns in water. Doing so could cause a serious loss of body heat (hypothermia).", "Apply lotion. Once a burn is completely cooled, apply a lotion, such as one that contains aloe vera or a moisturizer. This helps prevent drying and provides relief."],
    };


    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }


    render() {
        const { modalVisible } = this.state
        return (
            <View style={styles.container} >
                <View style={{ height: 80, backgroundColor: '#233ad8' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.pop() }} style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                        <Entypo name="back" style={{ textAlign: 'center', width: 30 }} size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingBottom: 15 }}>First Aid & Emrergency Tips</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 100, marginTop: 15, flexDirection: 'row', paddingHorizontal: 10, marginLeft: 10, }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Heart Attact', text: this.state.hartAttact }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/heart-attack.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Heart Attact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Breathing difficulties', text: this.state.breathing }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/bre.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Breathing</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: 100, marginTop: 15, flexDirection: 'row', paddingHorizontal: 10, marginLeft: 10, }}>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Heatstroke', text: this.state.heatstroke }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/heating.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Heatstroke</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Earthquake', text: this.state.earthquake }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/earth.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Earthquake</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: 100, marginTop: 15, flexDirection: 'row', paddingHorizontal: 10, marginLeft: 10, }}>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Bleeding', text: this.state.bleeding }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/bleeding.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Bleeding</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate('Modals', { pageName: 'Burn', text: this.state.burn }) }} style={{ backgroundColor: '#ffffff', flex: 1, elevation: 3, shadowOpacity: 0.5, borderRadius: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                            <Image style={{ height: 50, width: 50 }}
                                source={require('../../../../images/burn.png')}
                            />
                            <Text styFle={{ marginBottom: -15, marginTop: 5, fontSize: 5, fontWeight: 'bold' }}>Burn</Text>
                        </TouchableOpacity>

                    </View>



                </View>

                {/* </ScrollView> */}
                <Bottom />
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


export default connect(mapStateToProps, mapDispatchToProps)(FirstAid);


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
