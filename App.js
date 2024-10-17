
import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let emails = ['test@gmail.com'];
  let passwords = ['12345'];

  function login(){
    if (email == emails[0] && password == passwords[0]){
      alert("Acesso permitido!")
  }else{
      if (email != emails[0]){
          alert('Email Inválido')
      }
      else{
          alert('Senha inválida')
      }
  }
  }

  return (
    <View style={styles.background}>
      <Image source={require('./assets/coiotes.png')}></Image>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Digite seu email</Text>
        <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
        <Text style={styles.text}>Digite sua senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Senha' onChangeText={setPassword}></TextInput>
        <Button color={'#7E60BF'} title='Login' onPress={login}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#433878',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginBottom:8,
    color: '#433878',
    fontWeight: '900',
    fontSize:32,
    alignSelf: 'center',
  },
  text:{
    color: '#433878',
    fontSize: 16,
    marginLeft: 12,
    marginBottom: -12,
  },
  form: {
    rowGap:16,
    width: 300,
    height: 300,
    justifyContent: 'center',
    backgroundColor: '#E4B1F0',
    borderRadius: 9,
  },
  input: {
    backgroundColor:'#FFE1FF',
    width:280,
    height: 32,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#433878',
    padding: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
