import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Platform
} from 'react-native'



class Header extends Component {

    menu = () => {
        this.props.navigate
    }


    render() {
        return (
            <View style = {styles.container}>                
                <View style = {styles.rowContainer}>
                    <Text style = {styles.title}>Vizi</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: '#F07C3A',
        borderColor: '#5C4032',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#0F0B08',
        fontFamily: 'Philosopher-Regular',
        height: 30,
        fontSize: 28,
    }
})

export default Header