import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const ActivitiesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock data for activities
  const activities = [
    { name: 'Mountain Hiking', category: 'Outdoor', image: require('../assets/hiking.jpg'), price: '$50', rating: '4.5', description: 'Explore scenic mountain trails.' },
    { name: 'Camping in Forest', category: 'Outdoor', image: require('../assets/camo.jpg'), price: '$30', rating: '4.7', description: 'Relax in the wilderness.' },
    { name: 'Rock Climbing', category: 'Outdoor', image: require('../assets/rock.jpg'), price: '$40', rating: '4.6', description: 'Challenge yourself with rock climbing.' },
    { name: 'Scuba Diving', category: 'Water Sports', image: require('../assets/scuba.jpg'), price: '$100', rating: '4.8', description: 'Dive into the beautiful underwater world.' },
    { name: 'Jet Skiing', category: 'Water Sports', image: require('../assets/ski.jpg'), price: '$80', rating: '4.4', description: 'Experience the thrill of jet skiing.' },
    { name: 'Whitewater Rafting', category: 'Water Sports', image: require('../assets/raft.jpg'), price: '$90', rating: '4.5', description: 'Conquer the rapids with rafting.' },
    { name: 'Skydiving', category: 'Adventure', image: require('../assets/sky.jpg'), price: '$200', rating: '4.9', description: 'Feel the rush of free fall.' },
    { name: 'Paragliding', category: 'Adventure', image: require('../assets/para.jpg'), price: '$150', rating: '4.7', description: 'Soar through the skies with paragliding.' },
    { name: 'Bungee Jumping', category: 'Adventure', image: require('../assets/bungee.jpg'), price: '$120', rating: '4.8', description: 'Leap into excitement with bungee jumping.' },
  ];

  // Filter activities based on search query and selected category
  const filteredActivities = activities.filter((activity) => {
    const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory;
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to handle the "Book Now" button press
  const handleBookNow = (activityName) => {
    Alert.alert(
      'Booking Confirmation',
      `You booked ${activityName}`,
     
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Explore Activities</Text>
      </View>

      {/* Search & Filters */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search activities..."
          placeholderTextColor="#bdc3c7"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Popular Categories</Text>
        <ScrollView horizontal style={styles.categoryList}>
          {['All', 'Outdoor', 'Water Sports', 'Adventure'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryCard,
                selectedCategory === category && styles.selectedCategoryCard,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Activities */}
      <View style={styles.featuredActivities}>
        <Text style={styles.sectionTitle}>Featured Activities</Text>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <View key={index} style={styles.activityCard}>
              <Image source={activity.image} style={styles.activityImage} />
              <Text style={styles.activityTitle}>{activity.name}</Text>
              <Text style={styles.activityDescription}>{activity.description}</Text>
              <Text style={styles.activityPrice}>{activity.price}</Text>
              <Text style={styles.activityRating}>Rating: {activity.rating}</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => handleBookNow(activity.name)}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No activities found for "{searchQuery}"</Text>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 16,
    color: '#2c3e50',
  },
  categories: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
  },
  categoryList: {
    marginVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
  },
  selectedCategoryCard: {
    backgroundColor: '#2980b9',
  },
  categoryText: {
    color: '#34495e',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#fff',
  },
  featuredActivities: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  activityImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  activityDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  activityPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#27ae60',
  },
  activityRating: {
    fontSize: 14,
    color: '#f39c12',
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ActivitiesScreen;
