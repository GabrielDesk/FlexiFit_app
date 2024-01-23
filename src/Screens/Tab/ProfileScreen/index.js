import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Profile Screen!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
 },
 logo: {
    width: 150,
    height: 150,
 },
});

export default ProfileScreen;