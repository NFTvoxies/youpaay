import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'; // Importer les icônes Ionicons
import { TouchableOpacity } from 'react-native';


const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name="comptePage" 
     options={{
      headerShown: true,
      headerTitle: '', 
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }} />
     <Stack.Screen name="createAccount" 
     options={{
      headerShown: true,
      headerTitle: '', 
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }} />
    <Stack.Screen name="confirmCode" 
     options={{
      headerShown: true,
      headerTitle: '', 
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    }} />
    </Stack>
    
  )
}

export default AppLayout