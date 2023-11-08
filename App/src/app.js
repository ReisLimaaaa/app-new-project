import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from './components/Mega/mega';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdeNumero={6}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});