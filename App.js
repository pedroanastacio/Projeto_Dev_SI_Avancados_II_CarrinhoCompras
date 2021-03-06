import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import ListaProdutos from './src/components/listaProdutos';
import Footer from './src/components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ListaProdutos />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
