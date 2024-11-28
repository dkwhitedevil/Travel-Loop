import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItineraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Itinerary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default ItineraryScreen;
