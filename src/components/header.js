import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                source={{uri: 'https://image.freepik.com/vetores-gratis/carrinho-de-compras-realista_1284-6011.jpg'}}
                style={styles.image}
                />
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d8af7',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    image: {
        width: 30,
        height: 30
    }
});

export default Header;