import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as actions from './action';

export default function Home() {
  const renderItem = ({ item }) => (
    <Text>{item.name}</Text>
  );
  const DATA = actions.getProducts();
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});