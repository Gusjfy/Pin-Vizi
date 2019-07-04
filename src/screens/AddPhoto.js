 import React, { Component } from 'react'
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     TextInput,
//     Image,
//     Dimensions,
//     Platform,
//     ScrollView,
//     Alert
// } from 'react-native'
// import ImagePicker from 'react-native-image-picker'
// import firebase from 'react-native-firebase'

class AddPhoto extends Component {
//     contructor() {
//         this.ref = firebase.firestore().collection('posts')

//         this.state = {
//             comment: '',
//         }
    }

    

//     pickImage = () => {
//         ImagePicker.showImagePicker({
//             title: 'Escolha a imagem',
//             maxHeight: 600,
//             maxWidth: 800
//         }, res => {
//             if (!res.didCancel) {
//                 this.setState({ image: { uri: res.uri, base64: res.data}})
//             }
//         })
//     }

//     save = async () => {
//         this.ref.add({
//             comment: this.state.comment,
//         })

//         this.props.navigation.goBack();
//     }


//     render(){
//         return (

//                 <View style = {styles.container}>
//                     <Text style = {styles.title}>Compartilhe algo do seu interesse!</Text>
//                     <View style = {styles.imageContainer}>
//                         <Image source={} style = { styles.image } />
//                     </View>
//                     <TouchableOpacity onPress={this.pickImage} style ={styles.buttom}>
//                         <Text style={styles.buttomText}>Escolha a imagem</Text>
//                     </TouchableOpacity>
//                     <TextInput placeholder='Algum comentário para o post?'
//                             style={styles.input} value={this.state.comment}
//                             onChangeText={comment => this.setState({comment})} />
//                     <TouchableOpacity onPress={this.save} style ={styles.buttom}>
//                         <Text style={styles.buttomText}>Salvar</Text>
//                     </TouchableOpacity>
//                 </View>

//         )
//     }

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         alignItems: 'center',
//         backgroundColor: '#FFDFB6'
//     },
//     title: {
//         fontSize: 20,
//         marginTop: Platform.OS === 'ios' ? 30:10,
//         fontWeight: 'bold'
//     },
//     imageContainer: {
//         width: '90%',
//         height: Dimensions.get('window').width / 2,
//         backgroundColor: '#FFE4B5',
//         marginTop: 10
//     },
//     image: {
//         width: '100%',
//         height: Dimensions.get('window').width / 2,
//         resizeMode: 'center'
//     },
//     buttom: {
//         marginTop: 60,
//         padding: 10,
//         backgroundColor: '#C4662F',
//         borderRadius: 5,
//         borderColor: '#5C4032'
//     },
//     buttomText: {
//         fontSize: 20,
//         color: '#FFF'
//     },
//     input: {
//         marginTop: 20,
//         width: '90%'
//     }
// })

export default AddPhoto