import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavorisNews = () => {
    const [favoris, setFavoris] = useState([])

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        async function getFavorisNews() {
          const favoriesNews = await AsyncStorage.getItem('favorites');
          if (favoriesNews !== null) {
            const news = JSON.parse(favoriesNews);
            setFavoris(news)
          } else {
            console.log('AsyncStorage is empty');
          }
        }
        getFavorisNews();
      });
    
      return unsubscribe;
    }, [navigation]);
    


      const navigation = useNavigation();
      const handleSeeMore = (item) => {
        navigation.navigate('TheNew', { item: item });
      };

    
    if(favoris===0){
        return (
            <Text>FavorisNews favorisNews</Text>
          )
    }else {
        return (
            <ScrollView style={styles.container}>
            <Text style={styles.title}>Favoris</Text>
            {favoris.map((element) => (
                <View key={element.id} style={styles.card} >
                  {element.urlToImage ? (
                    <Image style={styles.image} source={{ uri: element.urlToImage }} />
                  ) : (null)}
                  <Text style={styles.newsTitle}>{element.title}</Text>
                  <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => handleSeeMore(element)}><Text>Détails</Text></TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
        )
    }
 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingBottom: 30
    },
    card : {
      marginBottom: 20,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      padding: 20,
    },
    title: {
      fontSize: 40,
      fontWeight: '700',
      marginTop: 20,
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    buttonContainer:{
      flexDirection: 'row', 
      justifyContent: 'flex-end'
    },
    button: {
      width: '20%',
    }
  });

export default FavorisNews