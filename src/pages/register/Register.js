import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import * as actions from './action';


const UselessTextInput = () => {
    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[address, setAddress] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[age, setAge] = React.useState('');


    async function handleSave(){
      try{
          actions.save(name,age,email,password,address);
      }catch(error){
        alert(error);
      }
    }

  return (
    <SafeAreaView>
        <Text style={styles.title}> Cadastro de Usuários </Text>

        <Text style={styles.label}> Nome </Text>

        <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="Digite seu nome"
        />

        <Text style={styles.label}> Idade </Text>
        <TextInput
            style={styles.input}
            onChangeText={setAge}
            placeholder="Digite sua Idade"
        />

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

        <Text style={styles.label}> Endereço </Text>
        <TextInput
            style={styles.input}
            onChangeText={setAddress}
            placeholder="Digite seu endereço"
        />

        <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center'}} onPress={handleSave}>CADASTRAR</Text>
        </TouchableOpacity>

        

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