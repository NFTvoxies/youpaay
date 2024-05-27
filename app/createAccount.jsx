import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import image5 from '../assets/images/image5.png';
import { router } from 'expo-router';

const CreateAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    checkFields(text, countryCode, password);
  };

  const handleCountryCodeChange = (text) => {
    setCountryCode(text);
    checkFields(phoneNumber, text, password);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkFields(phoneNumber, countryCode, text);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkFields = (phoneNumber, countryCode, password) => {
    if (phoneNumber.trim() !== '' && countryCode.trim() !== '' && password.trim() !== '') {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const handleSignUp = () => {
    if (isFilled) {
      setModalVisible(true);
    }
  };

  const handleVerifyPhoneNumber = () => {
    setModalVisible(false);
    console.log('Phone Number Verified:', phoneNumber);
    router.push('/confirmCode')
  };

  return (
    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'white', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Create an account</Text>
        <Text style={{ fontSize: 13 }}>Enter your mobile number to verify your account</Text>

        <View style={{marginVertical: 20 }}>
          <Text>Phone</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#b8b8b8', paddingHorizontal: 10, padding: 8, borderRadius: 10, width: '100%', marginVertical: 10 }}
                value={countryCode}
                onChangeText={handleCountryCodeChange}
                placeholder='+11'
              />
            </View>
            <View style={{ flex: 3 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={{ flex: 1, borderWidth: 1, borderColor: '#b8b8b8', paddingHorizontal: 10, padding: 8, borderRadius: 10, marginVertical: 10 }}
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  keyboardType="phone-pad"
                  placeholder='Mobile number'
                />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>Password</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#b8b8b8', borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }}>
              <FontAwesome name="lock" size={22} color="#b8b8b8" style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1, padding: 8 }}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                placeholder='••••••••••'
              />
              <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={22} color="#b8b8b8" onPress={handleTogglePasswordVisibility} />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={{ 
          borderRadius: 50, 
          backgroundColor: isFilled ? '#304fff' : '#b8b8b8', 
          paddingVertical: 15, 
          opacity: isFilled ? 1 : 0.5 
        }} 
        onPress={handleSignUp}
        disabled={!isFilled} 
      >
        <Text style={{textAlign:'center',color: isFilled ? 'white' : 'black'}}>Sign Up</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 28, borderRadius: 30 }}>
            <TouchableOpacity style={{ position: 'absolute', top: 17, right: 20 }} onPress={() => setModalVisible(false)}>
              <FontAwesome name="times" size={25} color="#b8b8b8" />
            </TouchableOpacity>
            <View style={{ display:'flex',alignItems:'center', justifyContent:'center',width:'200', height:220}}>
              <Image source={image5} style={{width:'100%', height:'100%'}}/>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, textAlign:'center' }}>Verify your phone number before we send code</Text>
            <Text style={{textAlign:'center'}}>is this correct? +880 1995 88 67 99</Text>
           <View style={{paddingVertical:20}}>
           <TouchableOpacity style={{backgroundColor: '#304fff', paddingVertical: 15, borderRadius: 50, marginTop: 10}} onPress={handleVerifyPhoneNumber}>
              <Text style={{textAlign:'center',color:'white'}}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#white', paddingVertical: 15, borderRadius: 50, borderWidth: 1, marginTop: 10, borderColor:'#304fff'}} onPress={() => setModalVisible(false)}>
              <Text style={{textAlign:'center',color:'#304fff'}}>No</Text>
            </TouchableOpacity>
           </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateAccount;
