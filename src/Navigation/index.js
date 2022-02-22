
// import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../Screens/SplashScreen';
// import Login from '../Screens/Authentication/login';
// import PhoneVerification from '../Screens/Authentication/phoneVerification';
// import CountryLists from '../Screens/Authentication/countryLists';
// import EnterOTPCode from '../Screens/Authentication/enterOTP';
// import Menu from '../Screens/App/menu';
import Home from '../Screens/App/Home';
import Emergency from '../Screens/App/Emergency';
import BloodBank from '../Screens/App/BloodBank';
import FindDonor from '../Screens/App/FindDonor';
import FirstAid from '../Screens/App/FirstAid';
import Modals from '../Screens/App/Modals';
import Accident from '../Screens/App/Accident';
import AddFriend from '../Screens/App/AddFriend';
import HelpLine from '../Screens/App/HelpLine';
import FreeFood from '../Screens/App/FreeFood';
import MyAccount from '../Screens/App/MyAccount';
import Emergencies from '../Screens/App/Emergencies';









import Search from '../Screens/App/search';
import Category from '../Screens/App/mainCategory';
import Cart from '../Screens/App/cart';
import Account from '../Screens/App/Account';
import SubCategories from '../Screens/App/subCategories';
import Categories from '../Screens/App/categories';
import MainCategory from '../Screens/App/mainCategory';
import ChildCategory from '../Screens/App/childCategory';
import Chat from '../Screens/App/chat';
import Shops from '../Screens/App/shops';
import GuideLine from '../Screens/App/GuideLine';



import Register from '../Screens/App/Account/Register';
import Login from '../Screens/App/Login';

import Favourites from '../Screens/App/Account/Favourites';
import Orders from '../Screens/App/Account/Orders';
import Profile from '../Screens/App/Account/Profile';
import Chats from '../Screens/App/Account/Chats';
import Address from '../Screens/App/Account/Address';
import Vouchers from '../Screens/App/Account/Vouchers';
import HelpCenter from '../Screens/App/Account/HelpCenter';
import TrackOrder from '../Screens/App/Account/TrackOrder';
import BankDetails from '../Screens/App/Account/BankDetails';









// mainCategory





import AppContainer from '../Components/AppContainer';



import IntroScreen from '../Screens/Authentication/introScreen';


//Authentication Routs
const AuthStack = createStackNavigator({
  // Home: { screen: Home },
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  Register: { screen: Register },

  
  // PhoneVerification: { screen: PhoneVerification },
  // CountryLists: { screen: CountryLists },
  // EnterOTPCode: { screen: EnterOTPCode },
},
  {
    headerMode: 'none',
  }
);

// App Routs
const AppStack = createStackNavigator(
  {
    Home: { screen: Home },
    Emergency: { screen: Emergency },
    BloodBank: { screen: BloodBank },
    FindDonor: { screen: FindDonor },
    FirstAid: { screen: FirstAid },
    Modals: { screen: Modals },
    Accident: { screen: Accident },
    AddFriend: { screen: AddFriend },
    HelpLine: { screen: HelpLine },
    FreeFood: { screen: FreeFood },
    MyAccount: {screen : MyAccount},
    Emergencies: {screen : Emergencies},




    

    
    // Search: { screen: Search },
    // Category: { screen: Category },
    // Cart: { screen: Cart },
    // Account: { screen: Account },
    // SubCategories: { screen: SubCategories },
    // Categories: { screen: Categories },
    // MainCategory: { screen: MainCategory },
    // ChildCategory: { screen: ChildCategory },
    // Chat: { screen: Chat },
    // Shops: { screen: Shops },
    // GuideLine: { screen: GuideLine },

    // Favourites: { screen: Favourites },
    // Orders: { screen: Orders },
    // Profile: { screen: Profile },
    // Chats: { screen: Chats },
    // Address: { screen: Address },
    // Vouchers: { screen: Vouchers },
    // HelpCenter: { screen: HelpCenter },
    // TrackOrder: { screen: TrackOrder },
    // BankDetails: { screen: BankDetails },

  },
  {
    headerMode: 'none',
  },
);


export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
)

