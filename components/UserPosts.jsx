import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Modal } from 'react-native';
import CreatePost from './CreatePost';
import EditPosts from './EditPost';

const UserPosts = ({ navigation, onCreatePost }) => {
  const [posts, setPosts] = useState([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleEditPost = () => {
    setEditModalVisible(!editModalVisible);
  };

const handleCreatePost = (newPost) => {
  setPosts((prevPosts) => {
    return [...prevPosts, newPost];
  });
};

  const handleClose = (action) => {
    if (action === 'create') {
      setCreateModalVisible(!createModalVisible);
    } else {
      setEditModalVisible(!editModalVisible);
    }
  };

  // const handleCreatePostSuccess = (newPost) => {
  //   setPosts([...posts, newPost]);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Публикации пользователей</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.post}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <View style={styles.postDetails}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      ))}
      <View style={styles.buttonGroup}>
        <Button title='Редактировать' onPress={handleEditPost} />
        <Button
          title='Создать пост'
          onPress={() => setCreateModalVisible(true)}
        />
      </View>
      <Modal
        visible={createModalVisible}
        animationType='slide'
        transparent={true}>
        <CreatePost
          onClose={() => handleClose('create')}
          onCreatePost={handleCreatePost}
        />
      </Modal>
      <Modal
        visible={editModalVisible}
        animationType='slide'
        transparent={true}>
        <EditPosts onClose={() => handleClose('edit')} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  postDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default UserPosts;
