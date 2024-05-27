import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ComptePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Coinpay.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Create your Coinpay account</Text>
      <Text style={styles.subtitle}>
        Coinpay is a powerful tool that allows you to easily send, receive, and track all your transactions.
      </Text>
      <TouchableOpacity style={styles.signupButton} onPress={()=>router.push('/createAccount')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={[styles.buttonText, { color: '#304FFF' }]}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By continuing you accept our 
      </Text>
      <Text style={styles.termsText}>
        <Text style={styles.blueText}>Terms of Service</Text> and <Text style={styles.blueText}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '80%',
    height: 200,
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
    paddingHorizontal:25,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
    paddingVertical: 25,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#304FFF',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#304FFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    marginTop: 20,
  },
  blueText: {
    color: '#304FFF',
    
  },
};
