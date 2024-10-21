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
import { Pet } from '../modal/Pet';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const DATA: Pet[] = [
  {
    id: "1",
    name: "Max",
    age: "2 years old",
    breed: "Labrador",
    type: "Dog",
    image: "https://images.dog.ceo/breeds/weimaraner/n02092339_176.jpg",
  },
  {
    id: "2",
    name: "Lucy",
    age: "1 year old",
    breed: "Golden Retriever",
    type: "Dog",
    image: "https://images.dog.ceo/breeds/spaniel-welsh/n02102177_4024.jpg",
  },
  {
    id: "3",
    name: "Charlie",
    age: "3 years old",
    breed: "Poodle",
    type: "Dog",
    image: "https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg",
  },
  {
    id: "4",
    name: "Luna",
    age: "5 months old",
    breed: "Shiba",
    type: "Dog",
    image: "https://images.dog.ceo/breeds/groenendael/n02105056_4066.jpg",
  },
  {
    id: "5",
    name: "Mittens",
    age: "2 years old",
    breed: "Siamese",
    type: "Cat",
    image: "https://cataas.com/cat?type=square",
  },
  {
    id: "6",
    name: "Coco",
    age: "1 year old",
    breed: "Budgie",
    type: "Bird",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrvT3wIqkZ8s-TIMFilA75Zc45TUfjJnM_g&s",
  },
];

export const FeedScreen = () => {  
  const [ selectedType, setSelectedType ] = useState<string>( "All" );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const filterData = () => {
    return selectedType === "All"
      ? DATA
      : DATA.filter( ( pet ) => pet.type === selectedType );
  };

  const renderItem = ( { item }: { item: Pet; } ) => (
    <View style={ styles.card }>
      <Pressable onPress={ () => navigation.navigate( "DetailsPetsScreen", { pet: item } ) }>
        <Image source={ { uri: item.image } } style={ styles.image } />
        <Text style={ styles.name }>{ item.name }</Text>
        <Text style={ styles.age }>{ item.age }</Text>
        <Text style={ styles.breed }>{ item.breed }</Text>
      </Pressable>

    </View>
  );

  const types = [ "All", "Dog", "Cat", "Bird" ];

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
    padding: 1 ,
    paddingTop:15,
    backgroundColor: "#111b24",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    marginTop:10,
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
