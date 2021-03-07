import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar} from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Produto from './src/components/produto';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaProdutos: [
        {id: '1', nome: 'Arroz', valor: '20,00', marca: 'Vasconcelos', quantidade: 12, codigo: '001', desconto: 10, promocao: {leve: 5, pague: 4} },
        {id: '2', nome: 'Feijão', valor: '10,00', marca: 'Vasconcelos', quantidade: 15, codigo: '002', desconto: 5, promocao: {leve: 6, pague: 5} },
        {id: '3', nome: 'Detergente', valor: '1,99', marca: 'Ypê', quantidade: 100, codigo: '405', desconto: 20, promocao: {leve: 10, pague: 9} },
        {id: '4', nome: 'Sal', valor: '2,25', marca: 'Cisne', quantidade: 3, codigo: '057', desconto: 8, promocao: {leve: 3, pague: 2} },
        {id: '5', nome: 'Leite', valor: '2,99', marca: 'Cemil', quantidade: 24, codigo: '142', desconto: 15, promocao: {leve: 12, pague: 10} },
        {id: '6', nome: 'Leite Condensado', valor: '6,79', marca: 'Piracanjuba', quantidade: 5, codigo: '009', desconto: 10, promocao: {leve: 5, pague: 4} },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <View style={styles.listaProdutos}>
          <Text style={styles.title}> Lista de Produtos </Text>
          <FlatList 
          data={this.state.listaProdutos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
            <Produto 
            nome={item.nome}
            valor={item.valor}
            marca={item.marca}
            quantidade={item.quantidade}
            codigo={item.codigo}
            desconto={item.desconto}
            promocaoLeve={item.promocao.leve}
            promocaoPague={item.promocao.pague}
            />
          }  
          />  
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listaProdutos: {
    flex: 12,
    backgroundColor: '#fff'        
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1da1f2',
    padding: 25
    
  }
});

export default App;
