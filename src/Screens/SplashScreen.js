import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
// import AppLogo from '../../Components/AppLogo'
// import FbLogIn from '../../Components/ButtonLoginFacebook'
// import { authWithFacebook, getUserSession } from '../../store/action/user';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { TouchableOpacity } from 'react-native'

class Splash extends Component {



  // signin = () => {
  //   this.props.authWithFacebook(this.props.navigation);
  // }
  componentDidMount() {
    // this.props.getUserSession(this.props.navigation);
    // var na = this.props.navigation
    // console.log(na, 'na______________na')

    AsyncStorage.getItem('userData').then((value) => {
      var userData = JSON.parse(value)
      console.log(userData, 'userData______userData')
      if (userData !== null) {
        this.props.navigation.navigate('App')
      }
      // else if (userData == null) {
      //   this.props.navigation.navigate('Login')
      // }
    })

    // setTimeout(() => { this.props.navigation.navigate('App') }, 1000)


  }

  render() {
    // let logo = require('./../../../images/logo.png')
    let logo = require('./../../images/logo.png')
    let hand = require('./../../images/hand.png')


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgrey' }}>
        {/* <Text>PK Orders</Text> */}
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
          <Image source={logo} style={{ height: 100, width: 180 }} />
          <Text style={{ fontSize: 22, fontWeight: '700', }}>MADDAD</Text>
          <Image source={hand} style={{ borderWidth: 1, height: 250, transform: [{ rotate: '-50deg' }] }} />

          {/* <ActivityIndicator style={{ marginTop: 20, }} color="#f79321" size={35} /> */}
          <View style={{}}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }} activeOpacity={0.7} style={{ marginBottom: 10, backgroundColor: '#e3e0eb', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 270, borderWidth: 1, borderColor: '#1713c0' }}>
              <Text style={{ color: '#1713c0', fontWeight: '700' }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} activeOpacity={0.7} style={{ marginTop: 10, backgroundColor: '#1713c0', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 270, }}>
              <Text style={{ color: '#ffffff', fontWeight: '700' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return ({
    // user: state.reducer.user,
    // error: state.reducer.error,
    // loader: state.reducer.loader

  })
}

function mapDispatchToProps(dispatch) {
  return ({

  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff"
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
