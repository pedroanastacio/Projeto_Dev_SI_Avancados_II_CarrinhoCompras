import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ListaProdutos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Lista de Produtos </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
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

export default ListaProdutos;