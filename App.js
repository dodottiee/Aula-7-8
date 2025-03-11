import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao
        nome="Heloisa Passos"
        endereco="São Carlos - SP"
        telefone="+55 (16)98865-5270"
      />
      <OlaPerfilClasse
        nome="Heloisa Passos"
        endereco="São Carlos - SP"
        telefone="+55 (16)98865-5270"
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
