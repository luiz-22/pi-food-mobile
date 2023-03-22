import React from 'react'
import { useSelector } from "react-redux";

import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'

import Card from './card'
import Sort from '../modals/sort';


const Home = () => {

  const recipes = useSelector((state) => state.recipes);
  const modalSort = useSelector((state) => state.modalSort);

  console.log(recipes.length);

  const renderItem = ({ item }) => {
    return <Card recipe={item} />
  };

  return (
    <View style={styles.container}>

      {modalSort && <Sort />}

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