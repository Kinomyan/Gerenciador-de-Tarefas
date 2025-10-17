import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskItem({ item, concluirTarefa, editarTarefa, excluirTarefa, animacao }) {
  return (
    <Animated.View
      style={[
        styles.itemTarefa,
        {
          opacity: animacao,
          transform: [
            {
              translateY: animacao.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.conteudoTarefa} onPress={() => concluirTarefa(item.id)}>
        <View
          style={[styles.checkbox, item.concluida && styles.checkboxConcluida]}
        >
          {item.concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.textoContainer}>
          <Text
            style={[
              styles.textoTarefa,
              item.concluida && styles.textoConcluido,
            ]}
          >
            {item.texto}
          </Text>
          <Text style={styles.dataTarefa}>{item.data}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botoesAcao}>
        <TouchableOpacity
          style={[styles.botaoAcao, styles.botaoEditar]}
          onPress={() => editarTarefa(item.id, item.texto)}
        >
          <Text style={styles.textoBotaoAcao}>✏️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAcao, styles.botaoExcluir]}
          onPress={() => excluirTarefa(item.id)}
        >
          <Text style={styles.textoBotaoAcao}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
