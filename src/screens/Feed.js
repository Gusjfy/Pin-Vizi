import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Header from '../components/Header'
import Post from '../components/Post'
import firebase from 'react-native-firebase'

export default class Feed extends Component {

  state = {
    posts: [{
      id: Math.random(),
      nickname:'Gabriel Moraer', 
      email: 'rafaelprflh@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'Gabriel Moraer',
        comment: 'Esta começando a pior época! www.bit/lyQsh'
      },{
        nickname: 'Filipao',
        comment: 'Época de seca?'
      }, {
        nickname: 'Gustavo Trollao',
        comment: 'FUDEU BROOO'
      }]
    }, {
      id: Math.random(),
      nickname: 'Giancarlo Pandini',
      email: 'pandini@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [{
        nickname: 'Zeca',
        comment: 'Vai estudar PANDINI!'
      }]
    }, {
      id: Math.random(),
      nickname: 'Gerson dos Santos',
      email: 'Gerson@gmail.com',
      image: require('../../assets/imgs/gate.jpg'),
      comments: [{
        nickname: 'Gerson dos Santos',
        comment: 'Minha nova fechadura kkk'
      }]
    }]
  }
  menu = () => {
    this.props.navigation.createDrawer()
}
  
  
    render(){
      return (
        <View style={styles.container}>
          <Header navigate = {this.menu}/>
          <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Post key={item.id}{...item}/>} />
        </View>
      )
  }  

  
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDFB6'
  }
})


