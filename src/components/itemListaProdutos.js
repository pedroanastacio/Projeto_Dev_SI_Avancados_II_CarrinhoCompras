import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ItemListaProdutos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nomeProduto}> Lista de Produtos </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#c2c2c2'        
    },
    nomeProduto: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default ItemListaProdutos;