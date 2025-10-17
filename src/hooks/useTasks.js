import React, { useState, useRef } from 'react';
import { Alert, Animated } from 'react-native';
import { useAnimations } from './useAnimations';

export function useTasks() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const animacoes = useRef(new Map()).current;

  const { obterAnimacao, animarEntrada, animarSaida } = useAnimations(animacoes);

  const adicionarTarefa = () => {
    if (textoTarefa.trim() === '') {
      Alert.alert('Ops!', 'Digite uma tarefa');
      return;
    }

    if (editandoId) {
      setTarefas(prev =>
        prev.map(tarefa =>
          tarefa.id === editandoId
            ? { ...tarefa, texto: textoTarefa }
            : tarefa
        )
      );
      setEditandoId(null);
    } else {
      const novaTarefa = {
        id: Date.now().toString(),
        texto: textoTarefa,
        concluida: false,
        data: new Date().toLocaleTimeString(),
      };
      setTarefas(prev => [novaTarefa, ...prev]);
      setTimeout(() => animarEntrada(novaTarefa.id), 100);
    }

    setTextoTarefa('');
  };

  const concluirTarefa = id => {
    setTarefas(prev =>
      prev.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const editarTarefa = (id, texto) => {
    setEditandoId(id);
    setTextoTarefa(texto);
  };

  const excluirTarefa = id => {
    animarSaida(id, () => {
      setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
    });
  };

  const limparConcluidas = () => {
    const concluidas = tarefas.filter(t => t.concluida);
    concluidas.forEach(tarefa => {
      animarSaida(tarefa.id, () => {
        setTarefas(prev => prev.filter(t => t.id !== tarefa.id));
      });
    });
  };

  return {
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
  };
}
