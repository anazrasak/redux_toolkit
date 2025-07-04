import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const MainApp: React.FC = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider>
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
    </SafeAreaProvider>
    </PersistGate>
    </Provider>
  );
};

export default MainApp;