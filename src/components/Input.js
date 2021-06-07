import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = ({icon, text, value, onPress}) => (
  <View onPress={onPress} style={styles.containerInput}>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Cep"
      placeholderTextColor="#8F98C1"
      value={value}
      onPress={onPress}
    />
    {this.renderButtonCep()}
    <Icon name={icon} size={30} color={Colors.ICONS} />
  </View>
);

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    height: 40,
  },
});
