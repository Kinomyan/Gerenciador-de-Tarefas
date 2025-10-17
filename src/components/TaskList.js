import React from 'react';
import { FlatList, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { styles } from '../styles/styles';
import EmptyList from './EmptyList';

export default function TaskList({
  tarefas,
  concluirTarefa,
  editarTarefa,
  excluirTarefa,
  obterAnimacao,
}) {
  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          concluirTarefa={concluirTarefa}
          editarTarefa={editarTarefa}
          excluirTarefa={excluirTarefa}
          animacao={obterAnimacao(item.id)}
        />
      )}
      style={styles.lista}
      contentContainerStyle={styles.conteudoLista}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
