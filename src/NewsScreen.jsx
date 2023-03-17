import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import axios from 'axios'


//  const fakeData = [
//   {
//     id: '1',
//     title: 'Lorem ipsum dolor sit amet',
//     urlToImage: 'https://picsum.photos/id/1/200/300',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     publishedAt: '10 mars 2022',
//   },
//   {
//     id: '2',
//     title: 'Consectetur adipiscing elit',
//     urlToImage: 'https://picsum.photos/id/2/200/300',
//     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
//     content: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     publishedAt: '9 mars 2022',
//   },
//   {
//     id: '3',
//     title: 'Sed do eiusmod tempor',
//     urlToImage: 'https://picsum.photos/id/3/200/300',
//     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
//     content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
//     publishedAt: '8 mars 2022',
//   },
//   {
//     id: '4',
//     title: 'Ut labore et dolore magnaliqua',
//     urlToImage: 'https://picsum.photos/id/4/200/300',
//     description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
//     publishedAt: '7 mars 2022',
//   },
// ]


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

const NewsScreen = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-03-16&' +
          'sortBy=popularity&' +
          'apiKey=7917771d8b3b4d1b8dc03fbfb58ad839');
          console.log("here----------")
          console.log(response.data.articles);


        setData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

const handleSeeMore = (item) => {
  navigation.navigate('TheNew', { item: item });
};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
       data={data}
        renderItem={({ item }) => (
         <View key={item.id} style={styles.card}>
       {item.urlToImage ? (
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
      ) : null}
      <Text style={styles.newsTitle}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleSeeMore(item)}>
          <Text>Détails</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
/>

    </ScrollView>
  );
};


export default NewsScreen