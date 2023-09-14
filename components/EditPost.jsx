import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditPosts = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveChanges = () => {
    onClose();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Название поста'
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Ссылка на изображение'
        value={image}
        onChangeText={(text) => setImage(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Описание'
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
        multiline={true}
      />
      <Button title='Сохранить изменения' onPress={handleSaveChanges} />
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

export default EditPosts;
