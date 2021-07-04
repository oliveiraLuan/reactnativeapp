import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import * as actions from './action';
import { useNavigation } from "@react-navigation/native";


const UselessTextInput = () => {
    
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const navigation = useNavigation();

    async function handleLogin(){
      try{
         actions.login(email,password).then(function (response){
          if(response.status == 200){
              goHome();
          } else {
              alert("Não foi possível logar");
          }
          console.log(response);
      }).catch(function (error){
          console.log(error);
      });
      }catch(error){
        alert(error);
      }
    }    
    function goHome(){
      navigation.navigate('Home');
    }
    function goRegister(){
        navigation.navigate('Cadastrar');
    }

  return (
    <SafeAreaView>
        <Text style={styles.label}> E-mail </Text>
        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
        />

        <Text style={styles.label}> Senha </Text>
        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
        />



        <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center'}} onPress={handleLogin}>LOGIN</Text>
        </TouchableOpacity>
        <SafeAreaView>
            <Text style={{marginLeft:16}} onPress={goRegister}>Cadastrar</Text>
        </SafeAreaView>
        

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
  },
  label: {
    height: 40,
    padding: 10
  },
  title: {
    height: 30,
    margin: 12,
  },
  button: {
      height: 40,
      margin: 10,
      padding: 10,
      backgroundColor: "#007BFF"
  },
});



export default UselessTextInput;