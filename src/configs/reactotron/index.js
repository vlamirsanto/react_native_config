import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .useReactNative()
    .connect();

  tron.clear(); // Limpa a tela do Reactotron a cada reload

  console.tron = tron;
}
