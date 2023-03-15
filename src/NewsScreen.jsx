import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fakeData = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
    image_url: 'https://picsum.photos/id/1/200/300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contenu: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '10 mars 2022',
  },
  {
    id: '2',
    title: 'Consectetur adipiscing elit',
    image_url: 'https://picsum.photos/id/2/200/300',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    contenu: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    date: '9 mars 2022',
  },
  {
    id: '3',
    title: 'Sed do eiusmod tempor',
    image_url: 'https://picsum.photos/id/3/200/300',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    contenu: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    date: '8 mars 2022',
  },
  {
    id: '4',
    title: 'Ut labore et dolore magna aliqua',
    image_url: 'https://picsum.photos/id/4/200/300',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    contenu: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    date: '7 mars 2022',
  },
]



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
  const [data, setData] = useState(fakeData);
  const navigation = useNavigation();
const handleSeeMore = (item) => {
  navigation.navigate('TheNew', { item: item });
};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>News</Text>
      {data.map((element) => (
        <View key={element.id} style={styles.card} >
          {element.image_url ? (
            <Image style={styles.image} source={{ uri: element.image_url }} />
          ) : (null)}
          <Text style={styles.newsTitle}>{element.title}</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleSeeMore(element)}><Text>Détails</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};


export default NewsScreen