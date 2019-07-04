import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import firebase from 'react-native-firebase'


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        itWorks: false
    }

    register = async () => {      
        
        const {name, email, password} = this.state;

        try {
        
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        this.setState( { itWorks: true } );
        } catch (erro){
            alert(erro);
        }
        if (this.state.itWorks){
            this.props.navigation.navigate('Drawer')
        }
      
    }

    render(){
        return (
            <View style={styles.container}>
                    <Text style = {styles.title}>Vizi</Text>
                    <TextInput placeholder = 'Nome' style={styles.input} autoFocus={true} 
                                                    value={this.state.name}
                                                    onChangeText={name => this.setState({ name })} />
                    <TextInput placeholder = 'Email' style={styles.input} autoFocus={true} 
                                                    keyboardType='email-address'
                                                    value={this.state.email}
                                                    onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder = 'Senha' style={styles.input} secureTextEntry={true} 
                                                    value={this.state.password}
                                                    onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity onPress={this.register} style = {styles.buttom}>
                        <Text style = {styles.buttomText}>Salvar</Text>
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
        borderColor: '#333',
        paddingLeft: 15
    },
    title: {
        color: '#000',
        fontFamily: 'Philosopher-Regular',
        height: 50,
        fontSize: 50,
        paddingHorizontal : 100
    }
})

export default Register