import React from 'react'
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 556;

const Detail = ({ route }) => {

  const recipe = route.params.recipe

  const regex = /(<([^>]+)>)/ig;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={{ paddingBottom: 5 }}>
        {recipe.readyInMinutes} Minutes &nbsp; &nbsp; {recipe.healthScore} Healt Score
      </Text>
      <Image
        source={{ uri: `${recipe.image}` }}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Summary:</Text>
      <Text style={styles.text}>{recipe?.summary.replace(regex, '')}</Text>
      <Text style={styles.subtitle}>Steps:</Text>
      <Text style={styles.text}>{recipe.steps}</Text>
      <Text style={{ marginTop: 10 }}>
        {recipe.diets.map((el, index) => <Text key={index} style={styles.tag}>{el} {(index !== recipe.diets.length - 1) ? '-' : ''} </Text>)}
      </Text>
      <Text style={{ marginTop: 10, marginBottom: 20 }}>
        {recipe.dishTypes.map((el, index) => <Text key={index} style={styles.tag}>{el} {(index !== recipe.dishTypes.length - 1) ? '-' : ''} </Text>)}
      </Text>
      <Text></Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 20,
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    textAlign: "justify",
    fontSize: 15
  },
  image: {
    width: win.width,
    height: 370 * ratio,
  },
  tag: {
    color: "#f4952f"
  }
});

export default Detail