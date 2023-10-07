import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {Fragment, useSate, useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Pressable,
  Modal
} from 'react-native' 

import Formulario from './src/components/Formulario';
  const App = () =>{

   
    //Los hooks se colocan en la parte superior
    const [modalVisible, setModalVisible] = useState (false)

   
    return (
      <SafeAreaView style= {styles.container}>
          <Text style={styles.titulo}>Administrador de Citas {''}
          <Text style={styles.tituloBond}>Veterinaria</Text>
          </Text>

          <Pressable
            style={styles.btnNuevaCita}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={styles.btnTextoNuevaCita}
            >Nueva Cita</Text> 
          </Pressable>

          <Formulario
            modalVisible={modalVisible}
          />
     
      </SafeAreaView>
    );
  };
//console.log(StatusBar.currentHeight);
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F3F4F6',
      flex:1,
      marginTop:StatusBar.currentHeight
    },
    titulo: {
      textAlign: 'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: '600'
    },
    tituloBond: {
      fontWeight:'900',
      color: '#6D28D9'
    },
    btnNuevaCita: {
      backgroundColor:'#6D28D9',
      padding: 15,
      marginTop: 30,
      marginHorizontal: 20,
      borderRadius: 10

    },
    btnTextoNuevaCita: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight:'900',
      textTransform: 'uppercase'
    }
  })
export default App;