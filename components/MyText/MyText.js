import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const data = {
  heading: 'Demo App',
};

const MyText = () => {
  const handlerTextClick = () => {
    alert('thanks for submitting');
  };
  const {heading} = data;

  return (
    <View>
      <Text style={styles.text} onPress={handlerTextClick}>
        {heading}
      </Text>
    </View>
  );
};

export default MyText;
