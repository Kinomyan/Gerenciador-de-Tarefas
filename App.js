import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Header from './src/components/Header';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';
import { useTasks } from './src/hooks/useTasks';
import { styles } from './src/styles/styles';

export default function App() {
  const {
    tarefas,
    textoTarefa,
    editandoId,
    setTextoTarefa,
    adicionarTarefa,
    limparConcluidas,
    concluirTarefa,
    editarTarefa,
    excluirTarefa,
    obterAnimacao,
  } = useTasks();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header tarefas={tarefas} />
      <TaskForm
        textoTarefa={textoTarefa}
        setTextoTarefa={setTextoTarefa}
        adicionarTarefa={adicionarTarefa}
        editandoId={editandoId}
        tarefas={tarefas}
        limparConcluidas={limparConcluidas}
      />
      <TaskList
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        editarTarefa={editarTarefa}
        excluirTarefa={excluirTarefa}
        obterAnimacao={obterAnimacao}
      />
    </KeyboardAvoidingView>
  );
}
