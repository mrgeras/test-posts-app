import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // обработчик сохранения профиля
    navigation.navigate('UserPosts');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Имя:</Text>
      <Text style={styles.text}>Ilia</Text>
      <Text style={styles.label}>Фамилия:</Text>
      <Text style={styles.text}>Gerasimov</Text>
      <Text style={styles.label}>Телефон:</Text>
      <Text style={styles.text}>89246617505</Text>
      <Text style={styles.label}>Пароль:</Text>
      <Text style={styles.text}>***</Text>
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
