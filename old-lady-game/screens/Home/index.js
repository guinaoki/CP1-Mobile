import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/planodefundo.jpg')} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Jogo da Velha
          </Text>
          <Button
            title="Play"
            onPress={() => navigation.navigate('Game')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'black',
    marginBottom: 20,
  },
});

export default HomeScreen;
