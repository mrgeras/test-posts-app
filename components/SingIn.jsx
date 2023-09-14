import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username === 'Ilia' && password === '***') {
      onLogin(true);
    } else {
      alert('Неправильное имя пользователя или пароль');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Имя пользователя'
        value={username}
        onChangeText={(text) => setUsername(text)}
        onSubmitEditing={handleSignIn}
        multiline={false}
        style={styles.input}
      />

      <TextInput
        placeholder='Пароль'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        onSubmitEditing={handleSignIn}
        multiline={false}
        style={styles.input}
      />
      <Button title='Войти' onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SignIn;
