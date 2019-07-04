import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'
import Header from '../components/Header'

const vizinhos = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Pedro' },
  { id: 3, nome: 'Gustavo'},
  { id: 4, nome: 'Gian' },
  { id: 5, nome: 'José' },
  { id: 6, nome: 'Gerson' },
  { id: 7, nome: 'Carla' },
  { id: 8, nome: 'Fernanda' },
  { id: 9, nome: 'Jubiscleiton' },
  { id: 10, nome: 'João' },
  { id: 11, nome: 'Pedro' },
  { id: 12, nome: 'Gustavo'},
  { id: 13, nome: 'Gian' },
  { id: 14, nome: 'José' },
  { id: 15, nome: 'Gerson' },
  { id: 16, nome: 'Carla' },
  { id: 17, nome: 'Fernanda' },
  { id: 18, nome: 'Jubiscleiton' },
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#FFDFB6',
  borderWidth: 0.5,
  borderColor: '#222',

  //Flex
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent:'space-between',
  
}

export const Aluno = props =>
  <View style={itemEstilo}>
      <Text>Nome: {props.nome}</Text>
      <Text style={{fontWeight: 'bold'}}>Mensagem</Text>
  </View>

export default props => {
  const renderItem = ({ item }) => {
      return  <Aluno {...item} />
      
  }

  return (
      <View>
        <Header />
         <ScrollView>
          <FlatList data={vizinhos} renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()} />
      </ScrollView>
      </View> 
     
  )
}