import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function Header({ tarefas }) {
  const pendentes = tarefas.filter(t => !t.concluida).length;

  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>📝 Lista de Tarefas</Text>
      <Text style={styles.subtitulo}>{pendentes} pendentes</Text>
    </View>
  );
}
