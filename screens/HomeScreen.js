import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Mock data for promotions
  const promotions = [
    require('../assets/promo1.jpg'),
    require('../assets/promo2.jpg'),
  ];

  const explore = [
    require('../assets/explore1.jpg'),
    require('../assets/explore2.jpg'),
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
  <Image
    source={require('../assets/logo-Photoroom-removebg-preview.png')} // Replace with the path to your logo image
    style={styles.logoImage}
    accessibilityLabel="App Logo"
  />
  <Text style={styles.logoHeading}>TravelLoop</Text>
  <TouchableOpacity accessibilityLabel="Notifications">
    <Icon name="bell" size={24} color="#fff" style={styles.bellIcon} />
  </TouchableOpacity>
</View>

      {/* Navigation Tabs */}
      <View style={styles.navTabs}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Stays')}>
          <Text style={styles.tabText}>Stays</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Car Rental')}>
          <Text style={styles.tabText}>Car rental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Taxi')}>
          <Text style={styles.tabText}>Taxi</Text>
        </TouchableOpacity>
      </View>

      {/* Hotels Section */}
      <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
        <Image
            source={require('../assets/hotel.jpg')}
            style={styles.bannerImage}
            accessibilityLabel="Hotels Banner"
        />
      </TouchableOpacity>


      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Flights')}>
          <Text style={styles.categoryText}>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Activities')}>
          <Text style={styles.categoryText}>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Tourist Spots')}>
          <Text style={styles.categoryText}>Tourists Spots</Text>
        </TouchableOpacity>
      </View>

      {/* Promotions */}
      <View style={styles.promotions}>
      <Text style={styles.sectionTitle}>Promotions</Text>
        <View style={styles.exploreRow}>
          {promotions.slice(0, 2).map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.exploreImage}
              accessibilityLabel={`Explore image ${index + 1}`}
            />
          ))}
          </View>
      </View>

      {/* VIP Status */}
      <View style={styles.vipStatus}>
        <Text style={styles.vipText}>As a VIP Bronze member, receive a larger discount.</Text>
      </View>

          <View>

            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
      {/* Explore the World */}
      <View style={styles.exploreWorld}>
        <Text style={styles.sectionTitle}>Explore the World</Text>
        <View style={styles.exploreRow}>
          {explore.slice(0, 2).map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.exploreImage}
              accessibilityLabel={`Explore image ${index + 1}`}
            />
          ))}
        </View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1, // Takes up remaining space
    textAlign: 'center', // Center the heading
  },
  
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  bellIcon: {
    width: 24,
    height: 24,
  },
  navTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#222',
    borderRadius: 20,
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    marginTop: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  category: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  promotions: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoImage: {
    width: '48%',
    height: 100,
    borderRadius: 10,
  },
  vipStatus: {
    marginTop: 20,
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  vipText: {
    color: '#fff',
    fontSize: 14,
  },
  exploreWorld: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  exploreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exploreImage: {
    width: '48%',
    height: 100,
    borderRadius: 10,
  },
});

export default HomeScreen;
