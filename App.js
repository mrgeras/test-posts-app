import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignIn from './components/SingIn';
import Profile from './components/Profile';
import UserPosts from './components/UserPosts';

const Tab = createMaterialTopTabNavigator();
const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const [posts, setPosts] = useState([]);

  const handleLogin = (successfulLogin) => {
    setLoggedIn(successfulLogin);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const { index, routes } = state;
        const currentRoute = routes[index];

        if (loggedIn && currentRoute.name === 'Выход') {
          handleLogout();
        }
      }}>
      <Tab.Navigator>
        {!loggedIn && (
          <Tab.Screen
            name='Вход'
            component={(props) => <SignIn {...props} onLogin={handleLogin} />}
          />
        )}
        {loggedIn && (
          <>
            <Tab.Screen name='Профиль' component={Profile} />
            <Tab.Screen
              name='Посты'
              component={(props) => (
                <UserPosts {...props} onCreatePost={setPosts} />
              )}
            />
            <Tab.Screen name='Выход' component={() => null} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
