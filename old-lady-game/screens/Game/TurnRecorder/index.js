import React from "react";
import { View, Text } from "react-native";

const TurnRecorder = ({ playerName }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Jogador Ativo:</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{playerName}</Text>
    </View>
  );
}

export default TurnRecorder;
