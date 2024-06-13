import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');
  console.log(location);
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        // Tambahkan text dan onChange
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        {/* Jalankan function searchWeather dengan parameter location */}
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default WeatherSearch;