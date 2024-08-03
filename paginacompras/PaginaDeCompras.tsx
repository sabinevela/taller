import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export const PaginaDeCompras = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloP}>Somos una tienda de comida nutritiva</Text>
      
      <View style={styles.perrosIntroduccion}>
        <Image source={require('.assets/perros/.jpg')} style={styles.productoImagen} />
        <Button
          title="Comida para perros" onPress={() => {}} color="#6200EE"/>
        <Text style={styles.descripcion}>Aqui podrás encontrar los mejores alimentos para tu can.</Text>
      </View>

      <View style={styles.gatosIntroduccion}>
        <Image source={require('./assets/cat_food.jpg')} style={styles.productoImagen2} />
        <Button
          title="Comida para gatos" onPress={() => {}} color="#6200EE"/>
        <Text style={styles.descripcion2}>Aquí podras encontrar los mejores alimentos para tu felino.</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbf8',
    padding: 16,
  },
  tituloP: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 16,
  },
  perrosIntroduccion: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    color:'#000000'
  },
  gatosIntroduccion: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    color:'#000000',
  },
  productoImagen: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  productoImagen2: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 14,
    color: '#000000',
  },
  descripcion2: {
    fontSize: 14,
    color: '#000000',
  },
});

