import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Separator = () => <View style={styles.separator} />;
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário com o email e senha fornecidos
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Separator/>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#282a36',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LoginScreen;