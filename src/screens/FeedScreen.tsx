import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Post } from '../modal/Post';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/BottomTabs';


const DATA: Post[] = [
  {
    id: "1",
    name: "Max",
    age: "2 años",
    breed: "Labrador",
    type: "Perros",
    location: "Buenos Aires",
    description: "el nombre del perro es max, es muy cariñoso y bueno",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/640px-Labrador_Retriever_%281210559%29.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIcILBpXgLatntRgGjoxXnXAc9lcSyoGpyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCBMTci-DITyTFbT6xH29OWrefodMT6Ej4Q&s",
      "https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2019/09/LABRADOR-RETRIEVER-TUMBADO.jpg?fit=865%2C540&ssl=1",
    ],
    diseases: "N/A",
    vaccines: "Rabia-Parvovirus-Leptospirosis-Moquillo"
  },
  {
    id: "2",
    name: "Lucy",
    age: "1 años",
    breed: "Golden Retriever",
    type: "Perros",
    location: "Buenos Aires",
    description: "luci es muy linda tierna y juguetona, y le encanta salir a pasear",
    images: [ "https://goldendogfarm.com/cdn/shop/files/C99G8563_2048x.jpg?v=1698182078","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJY2bMiMlpHwmOHEbgcLV5UrNTtW-tYiMRiQ&s","https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=48StbVfe" ],
    diseases: "N/A",
    vaccines: "Rabia-Parvovirus-Leptospirosis-Moquillo"
  },
  {
    id: "3",
    name: "Charlie",
    age: "3 años",
    breed: "Poodle",
    type: "Perros",
    location: "Buenos Aires",
    description: "charlie es muy cariñoso y bueno y le gusta dormir mucho",
    images: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-BUGm4_BaiF8iXpWkMJYN9St17jpF2-q4Q&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFq1uKLkAT94x558qT2FA0Ishso12q3P7Jg&s","https://www.purina.com.ar/sites/default/files/2022-10/purina-brand-que-sabes-de-los-perros-poodle.jpg" ],
    diseases: "Gastroenteritis",
    vaccines: "Rabia-Leptospirosis-Moquillo"
  },
  {
    id: "4",
    name: "Luna",
    age: "5 meses",
    breed: "Shiba",
    type: "Perros",
    location: "Buenos Aires",
    description: "luna es tierna, aun es muy cachorrita y necesita una familia que la adopte",
    images: [ "https://kennelclubargentino.org.ar/storage/2020/05/shiba-cachorro1.jpg","https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2024/04/08/66141a09dbe9d.r_d.2338-1390-3106.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplJugLLMsJ6yUidL0rpM0xkeB9DPm2tgLow&s" ],
    diseases: "N/A",
    vaccines: "Rabia-Parvovirus-Moquillo"
  },
  {
    id: "5",
    name: "Mittens",
    age: "2 años",
    breed: "Siamese",
    type: "Gatos",
    location: "Buenos Aires",
    description: "le encanta salir a pasear y jugar con los perros y ser acariciado por las personas",
    images: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KzoCX3jSF_WLQvOlCsANycp68a2rHFT1yQ&s","https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Siamese201.jpg?itok=j9A2IvjN" ],
    diseases: "Otitis",
    vaccines: "Rabia-Parvovirus-Leptospirosis"
  },
  {
    id: "6",
    name: "Coco",
    age: "6 años",
    breed: "Budgie",
    type: "Pajaros",
    location: "Buenos Aires",
    description: "coco ya es un perro grande, y le encanta hacer nuevos amigos en las plazas",
    images: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZT0tYrjTYvWmRCLfI-xg-6fY7x9-AAUqKnw&s","https://lafeber.com/pet-birds/wp-content/uploads/Parakeet-Category-Image-300x300.jpg" ],
    diseases: "Tos de las perreras",
    vaccines: "Rabia-Parvovirus-Leptospirosis-Moquillo"
  },
];

export const FeedScreen = () => {
  const [ selectedType, setSelectedType ] = useState<string>( "Todos" );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const filterData = () => {
    return selectedType === "Todos"
      ? DATA
      : DATA.filter( ( pet ) => pet.type === selectedType );
  };

  const renderItem = ( { item }: { item: Post; } ) => (
    <View style={ styles.card }>
      <Pressable onPress={ () => navigation.navigate( "DetailsPetsScreen", { pet: item } ) }>
        { item.images.length > 0 ? (
          <Image source={ { uri: item.images[ 0 ] } } style={ styles.image } />
        ) : null }
        <Text style={ styles.name }>{ item.name }</Text>
        <Text style={ styles.age }>{ item.age }</Text>
        <Text style={ styles.breed }>{ item.breed }</Text>
      </Pressable>
    </View>
  );

  const types = [ "Todos", "Perros", "Gatos", "Pajaros" ];

  return (
    <View style={ styles.container }>
      <View style={ styles.filterContainer }>
        { types.map( ( type ) => (
          <TouchableOpacity
            key={ type }
            style={ [
              styles.filterButton,
              selectedType === type && styles.selectedButton,
            ] }
            onPress={ () => setSelectedType( type ) }
          >
            <Text style={ styles.filterText }>{ type }</Text>
          </TouchableOpacity>
        ) ) }
      </View>
      <FlatList
        data={ filterData() }
        renderItem={ renderItem }
        keyExtractor={ ( item ) => item.id }
        numColumns={ 2 }
      />
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 1,
    paddingTop: 15,
    backgroundColor: "#111b24",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    marginTop: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#223d56",
  },
  selectedButton: {
    backgroundColor: "#3a3a3a",
  },
  filterText: {
    color: "#fff",
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#223d56",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  age: {
    fontSize: 12,
    color: "#fff",
  },
  breed: {
    fontSize: 9,
    color: "#fff",
  },
} );
