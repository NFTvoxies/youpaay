import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { OtpInput } from './Componenets/OtpInput'

const ConfirmCode = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'white', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Confirm your hone</Text>
                <Text style={{ fontSize: 13 }}>We send 6 digits code to  +880 1995 88 67 99 </Text>
            </View>
            <OtpInput/>
            <TouchableOpacity
                style={{
                    borderRadius: 50,
                    backgroundColor: '#b8b8b8',
                    paddingVertical: 15,
                    opacity: 0.5
                }}
            >
                <Text style={{ textAlign: 'center', color: 'black' }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmCode