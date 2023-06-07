import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyText from './components/MyText/MyText';
import ItemPrice from './components/Item/ItemPrice';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'First Item',
  },
  {
    id: 5,
    title: 'Second Item',
  },
  {
    id: 6,
    title: 'Third Item',
  },
  {
    id: 7,
    title: 'First Item',
  },
  {
    id: 8,
    title: 'Second Item',
  },
  {
    id: 9,
    title: 'Third Item',
  },
  {
    id: 10,
    title: 'First Item',
  },
  {
    id: 11,
    title: 'Second Item',
  },
  {
    id: 12,
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView>
      <MyText style={styles.text} />
      {/* <ItemPrice name={'Table'} price={350} />
      <ItemPrice name={'Chair'} price={650} />
      <ItemPrice name={'Desk'} price={1450} /> */}
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
