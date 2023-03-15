import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';


const OneNewScreen = () => {
  const route = useRoute();
  const { title, description, contenu, date, image_url } = route.params.item;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {image_url && <Image source={{ uri: image_url }} style={styles.image} />}
      <Text style={styles.publishedAt}>{date}</Text>
      <View style={styles.card}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{contenu}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  publishedAt: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
    textAlign : 'right',
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#333',
  },
  contentContainer: {
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default OneNewScreen;
