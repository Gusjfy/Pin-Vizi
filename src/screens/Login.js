import React, { Component } from 'react'
import { login } from '../store/actions/user'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import firebase from 'react-native-firebase'

class Login extends Component {

    state = {
        email: '',
        password: '',
        isAuthenticated: false
    }
    
        
    login = async () => {      
        
        const {email, password} = this.state;

        try {
        
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        this.setState( { isAuthenticated: true } );
        } catch (erro){
            alert(erro);
        }
        if (this.state.isAuthenticated){
            this.props.navigation.navigate('Drawer')
        }
      
    }
    

    render(){
        return (
            <View style={styles.container}>
                <Text style = {styles.title}>Vizi</Text>
                <TextInput placeholder = 'Email' style={styles.input} autoFocus={true} 
                                                keyboardType='email-address'
                                                value={this.state.email}
                                                onChangeText={email => this.setState({ email })} />
                <TextInput placeholder = 'Senha' style={styles.input} secureTextEntry={true} 
                                                value={this.state.senha}
                                                onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style = {styles.buttom}>
                    <Text style = {styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register')}} style = {styles.buttom}>
                    <Text style = {styles.buttomText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F07C3A'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#C4662F',
        borderRadius: 5,
        borderColor: '#5C4032'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    title: {
        color: '#000',
        fontFamily: 'Philosopher-Regular',
        height: 50,
        fontSize: 50,
        paddingHorizontal : 100
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default Login

//export default connect(null, mapDispatchToProps)(Login)

