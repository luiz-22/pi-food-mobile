import React from 'react'
import { useSelector } from "react-redux";

import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'

import Card from './card'
import Loader from './loader';

const Home = () => {

  const recipes = useSelector((state) => state.recipes);

  console.log(recipes.length);

  const renderItem = ({ item }) => {
    return <Card recipe={item} />
  };

  return (
    <View style={styles.container}>

      {recipes.length === 0 && <Loader/>}
     
      <FlatList
        data={recipes} // Recive un array
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
});

export default Home