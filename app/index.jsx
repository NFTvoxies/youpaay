import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import image1 from '../assets/images/Trust.png';
import image2 from '../assets/images/Send money abroad.png';
import image3 from '../assets/images/Receive Money.png';
import { router } from 'expo-router';
const slides = [
  {
    key: '1',
    text: 'Trusted by millions of people, part of one part',
    image: image1,
  },
  {
    key: '2',
    text: 'Spend money abroad, and track your expense',
    image: image2,
  },
  {
    key: '3',
    text: 'Receive Money From Anywhere In The World',
    image: image3,
  },
];

const App = () => {
  const swiperRef = useRef(null);
  const [lastNextPressed, setLastNextPressed] = useState(false);

  const handleNextPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
    if (swiperRef.current.state.index === slides.length - 1 && lastNextPressed) {
      Alert.alert(
        'Welcome!',
        `Thank you for using MyApp. Start exploring and enjoy!`,
        [{ text: 'OK', onPress: () => router.push('/comptePage') }] 
      );
    } else {
      setLastNextPressed(true);
    }
  };

  return (
    <View style={styles.container} classNeme="bg-orange-3oo">
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {slides.map((slide, index) => (
          <View key={slide.key} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => handleNextPress()}
      >
        <Text style={styles.nextButtonText}>{swiperRef.current && swiperRef.current.state.index === slides.length - 1 && lastNextPressed ? 'Next' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 25,
    fontWeight: 'bold',
    paddingTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pagination: {
    position: 'absolute',
    top: 150, 
    left: 0,
    right: 0,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 37,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#304FFF',
    width: 16,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#304FFF',
    borderRadius: 50,
    marginHorizontal: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
