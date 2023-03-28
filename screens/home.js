import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'

import Card from './card'
import Sort from '../modals/sort';
import Filter from '../modals/filter';

const Home = () => {

  const recipes = useSelector((state) => state.recipes);
  const modalSort = useSelector((state) => state.modalSort);
  const modalFilter = useSelector((state) => state.modalFilter)
  
  console.log(recipes.length);

  const renderItem = ({ item }) => {
    return <Card recipe={item} />
  };

  return (
    <View style={styles.container}>

      {modalSort && <Sort />}

      {modalFilter && <Filter />}

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