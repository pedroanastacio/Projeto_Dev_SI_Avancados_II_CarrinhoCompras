import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.footerText}> Procuts Bela Vista - 2021 </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#606060',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: '#fff'
    }
});

export default Footer;