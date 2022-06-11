// Modules
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { CreationState } from '../../../shared/redux/types/stores';
import { ImageLoading } from '../';

export interface Props {
  data: CreationState;
  onElementClick: (id: number, title: string) => void;
}

const GridItem = function ({ data, onElementClick }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onElementClick(data.id, data.title)}>
      <ImageLoading
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
