import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Jogo da Velha
      </Text>
      <Button
        title="Play"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}

export default HomeScreen;
