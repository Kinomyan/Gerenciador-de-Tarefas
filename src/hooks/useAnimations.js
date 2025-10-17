import { Animated } from 'react-native';

export function useAnimations(animacoes) {
  const obterAnimacao = id => {
    if (!animacoes.has(id)) {
      animacoes.set(id, new Animated.Value(0));
    }
    return animacoes.get(id);
  };

  const animarEntrada = id => {
    const animacao = obterAnimacao(id);
    Animated.timing(animacao, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animarSaida = (id, callback) => {
    const animacao = obterAnimacao(id);
    Animated.timing(animacao, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      callback();
      animacoes.delete(id);
    });
  };

  return { obterAnimacao, animarEntrada, animarSaida };
}
