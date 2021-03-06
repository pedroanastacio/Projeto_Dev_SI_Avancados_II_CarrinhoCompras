import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BadgePromocao from './badgePromocao';

class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = {
          valor: this.props.valor
        }
      }

    componentDidMount() {
        this.setState({ valor: this.state.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) })
    }


    render() {
        //const { desconto, promocaoLeve, promocaoPague} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.nome}> {this.props.nome} </Text>
                <View style={styles.containerProps}>
                    <View style={styles.colunaProps}>
                        <Text style={styles.propriedades}> Valor: <Text style={styles.valorPropriedades}> R$ {this.props.valor} </Text></Text>
                    </View>
                    <View style={styles.colunaProps}>
                        <Text style={styles.propriedades}> Marca: <Text style={styles.valorPropriedades}> {this.props.marca} </Text></Text>
                    </View>    
                </View>    
                <View style={styles.containerProps}>
                    <View style={styles.colunaProps}>
                        <Text style={styles.propriedades}> Qtdade: <Text style={styles.valorPropriedades}> {this.props.quantidade} </Text></Text>
                    </View>   
                    <View style={styles.colunaProps}> 
                        <Text style={styles.propriedades}> Ref: <Text style={styles.valorPropriedades}> {this.props.codigo} </Text></Text>
                    </View>    
                </View>    
                <View style={styles.containerProps}>
                    <BadgePromocao
                    bgColor={{backgroundColor: '#72bb53'}}
                    promocao={`${this.props.desconto}% de desconto`}
                    />
                    <BadgePromocao 
                    bgColor={{backgroundColor: '#ff8351'}}
                    promocao={`Leve ${this.props.promocaoLeve} pague ${this.props.promocaoPague}`}
                    />  
                </View>
                
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#c2c2c2',
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10        
    },
    containerProps: {
        flexDirection: 'row',
    },
    colunaProps: {
        flex: 1
    },
    bagdeDesconto: {
        backgroundColor: '#72bb53',
        padding: 7,
        marginTop: 7,
        marginRight: 15
    },
    nome: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    propriedades: {
        color: '#fff',
        fontWeight: 'bold'
    },
    valorPropriedades: {
        color: '#fff',
        fontWeight: '200',
    }
 
});

export default Produto;