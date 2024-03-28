import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const subjects = [
  { id: 1, title: 'Subject 1', navigation: { screen: 'Screen1' } },
  { id: 2, title: 'Subject 2', navigation: { screen: 'Screen1' } },
  // Add more subjects as needed
];

const SubjectListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.navigation.screen)}>
      <View >
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
      horizontal
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SubjectListScreen;