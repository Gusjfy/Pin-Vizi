import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import { ScrollView, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Comment from './Comment'; 
import Header from '../components/Header'

const Post = props => {
  return <View style={styles.post}></View>
}

class NewFeed extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('comentários');
        this.unsubscribe = null;
    
        this.state = {
            image: require('../../assets/imgs/bw.jpg'),
            textInput: '',
            loading: true,
            comments: [],
        };
    }

    

onCollectionUpdate = (querySnapshot) => {
  const comments = [];
  querySnapshot.forEach((doc) => {
    const { description } = doc.data();
    
    comments.push({
      key: doc.id,
      doc, 
      description
    });
  });

  this.setState({ 
    comments,
    loading: false,
 });
}
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

  updateTextInput(value) {
    this.setState({ textInput: value });
  }

  addComment() {
    this.ref.add({
      description: this.state.textInput
    });
  
    this.setState({
      textInput: '',
    });
  }

  
  render() {
    if (this.state.loading) {
        return null; 
    }
    return (
        <View style={styles.container}>
          <Header/>
          <Post/>
            <ScrollView>
            <FlatList
              data={this.state.comments}
              renderItem={({ item }) => <Comment {...item} />}
            />
            <TextInput
                placeholder={'Adicione um comentário!'}
                value={this.state.textInput}
                onChangeText={(text) => this.updateTextInput(text)}
            />
            <Button
                title ={'Comentar'}
                color = '#F07C3A'
                disabled={!this.state.textInput.length}
                onPress={() => this.addComment()}
            />
            </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFDFB6'
  },
  post: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 300,
    height: 250,
    backgroundColor: '#F07C3A',
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

export default NewFeed;