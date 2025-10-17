import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskForm({
  textoTarefa,
  setTextoTarefa,
  adicionarTarefa,
  editandoId,
  tarefas,
  limparConcluidas,
}) {
  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa..."
        value={textoTarefa}
        onChangeText={setTextoTarefa}
        onSubmitEditing={adicionarTarefa}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
        <Text style={styles.textoBotaoAdicionar}>
          {editandoId ? 'Atualizar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      {tarefas.some(t => t.concluida) && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={limparConcluidas}>
          <Text style={styles.textoBotaoLimpar}>Limpar Concluídas</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
