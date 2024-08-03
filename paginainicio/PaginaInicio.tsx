import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export const PaginaInicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PETSHOP
        <Text style={styles.titulo2}>
          Donde encontraras los mejores alimentos para tus mascotas  !!
        </Text>
        <Image source={require('.assets/logo/.jpg')} style={styles.imagenlogo} />
      </Text>
      <View style={styles.botonSesion}>
        <Button
          title="Iniciar Sesión"
          onPress={() => {}}
          color="#f5b58a"
        />
      </View>
      <View style={styles.botonNavegar}>
        <Button
          title="Seguir Navegando"
          onPress={() => {}}
          color="#f5b58a"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c075',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  imagenlogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  botonSesion: {
    height: 90,
    marginBottom: 40,
    width: '50%',
    borderRadius: 200,
  },
  botonNavegar: {
    marginBottom: 40,
    width: '50%',
    borderRadius: 50,
  },
  titulo2:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#23221d',
    marginBottom: 20,
  }
});

