import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState } from 'react';



const OneNewScreen = () => {
  const route = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, description, contenu, date, image_url } = route.params.item;

  useEffect(() => {
    async function checkFavorite() {
      const favoriesNews = await AsyncStorage.getItem('favorites');
      if (favoriesNews !== null) {
        const parsedFavoriesNews = JSON.parse(favoriesNews);
        const foundFavorite = parsedFavoriesNews.find(favorite => favorite.title === title);
        if (foundFavorite) {
          setIsFavorite(true);
        }
      }
    }
    checkFavorite();
  }, []);


  const saveToFavorites = async () => {

    console.log(route.params.item)
    const favoriesNews = await AsyncStorage.getItem('favorites')
    const news = favoriesNews ? JSON.parse(favoriesNews) :  [];
    
    const index = news.findIndex(article => article.title === item.title);
    if (index !== -1) {
     await news.splice(index, 1);
      setIsFavorite(false);
    } else {
    await news.push(item);
      setIsFavorite(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(news));
  
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={saveToFavorites}>
        <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={30} color="red" />
      </TouchableOpacity>
      </View>
     
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
