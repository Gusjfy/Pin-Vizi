import React from 'react'
import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Group from './screens/Group'
import AddPhoto from './screens/AddPhoto'
import Register from './screens/Register'
import NewFeed from './screens/NewFeed'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login'}},
    Register: {screen: Register, navigationOptions: { title: 'Register'}}
}, { initialRouteName: 'Login'})


const LoginOrProfileRouter = createSwitchNavigator(
    {
        Profile: Profile,
        Auth: authRouter
    }, {
        initialRouteName: 'Profile'
    }
)


const MainRoutes = {
    Group: {
        name: 'Group',
        screen: Group,
        navigationOptions: {
            title: 'Group',
            tabBarIcon: ({ tintColor }) =>
                    <Icon name='ellipsis-h' size={30} color={tintColor}/>
        }
    },
    NewFeed: {
        name: 'NewFeed',
        screen: NewFeed,
        navigationOptions: {
            title: 'NewFeed',
            tabBarIcon: ({ tintColor }) => 
                    <Icon name='home' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: LoginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                    <Icon name='user' size={30} color= {tintColor} />
        }
    }

}

const MainConfig = {
    initialRouteName: 'NewFeed',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#0F0B08', 
        inactiveTintColor: '#5C4032',
        style: {
            backgroundColor: '#F07C3A'
            
        }
    }
}

const MainNavigator = createBottomTabNavigator(MainRoutes, MainConfig)

const DrawerNavigator = createDrawerNavigator({
    Main: {
        screen : MainNavigator,
        navigationOptions: {
            title: 'VizinhosUnidos403'
        }
    },
    AddPhoto: {
        screen: AddPhoto,
        navigationOptions: {
            title: 'Adicione um Post'
        }
    },
    EmitirAlerta: {
        screen: NewFeed,
        navigationOptions: {
            title: 'Emitir Alerta'
        }
    },
    MsgPD: {
        screen: NewFeed,
        navigationOptions: {
            title: 'Mensagem Pré-definida'
        }
    }
}, {drawerBackgroundColor: '#FFDFB6' })

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: authRouter,
        Drawer: () => <DrawerNavigator/>
    }, {
        initialRouteName: 'Auth'
    }
)

export default SwitchNavigator

