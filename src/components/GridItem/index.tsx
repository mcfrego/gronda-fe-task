// Modules
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { CreationState } from '../../../shared/redux/types/stores';
import { GLOBAL } from '../../view/styles/global';
import { TYPOGRAPHY } from '../../view/styles/typography';

export interface Props {
  data: CreationState;
  onElementClick: (id: number, title: string) => void;
}

const GridItem = function ({ data, onElementClick }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onElementClick(data.id, data.title)}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: data.img_url }}
      />
      <Text style={styles.text}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    maxWidth: 250,
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontWeight: '600',
  },
});
