
import React from 'react';
import Camera from './components/screens/Camera';
import {SafeAreaView} from "react-native";

const App = () => {
  return (
      <>
        <SafeAreaView styles={{flex:1}}>
          <Camera />
        </SafeAreaView>
        </>
  );
};

export default App;


/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen_v1 from "./components/screens/CameraScreen_v1";

export default function App() {
  return (
    <View>
      <Text>Hej</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 */
