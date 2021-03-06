import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

class BadgePromocao extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.bgColor]}>
                <Text style={styles.textoPromocao}> {this.props.promocao} </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
       padding: 7,
       marginTop: 7,
       marginRight: 15
    },
    textoPromocao: {
        color: '#fff'
    }
});

export default BadgePromocao;