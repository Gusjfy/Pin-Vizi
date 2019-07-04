import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import Header from '../components/Header'
import firebase from 'react-native-firebase'
import RNRestart from 'react-native-restart'

class Profile extends Component {

    logout = async () => {
        try {     
            await firebase.auth().signOut()
            RNRestart.Restart()
            } catch (erro){
                alert(erro);
            }
    }

    render() {
        const options = { email: "gustavoj.salvalaggio@gmail.com", secure: true}
        return (
            <View style = {styles.container}>
                <Header/>
                <Gravatar options = {options} style = {styles.avatar} />
                <Text style = {styles.nickname}>Fulano de Tal</Text>
                <Text style = {styles.email}>{this.props.email}</Text>
                <TouchableOpacity onPress = {this.logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFDFB6'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#F07C3A'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})


export default Profile

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Profile)

