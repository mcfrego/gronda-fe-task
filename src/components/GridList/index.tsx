import * as React from 'react';
import { FlatList, Text, ViewStyle } from 'react-native';

import { CreationState } from '../../../shared/redux/types/stores';
import { GridItem } from '..';

export interface Props {
  title: string;
  data: CreationState[] | undefined;
  onElementClick: (id: number, title: string) => void;
  style?: ViewStyle;
}

const GridList = function ({ title, data, style, onElementClick }: Props) {
  return (
    <>
      <FlatList
        contentContainerStyle={{}}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={
          <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
        }
        ListHeaderComponentStyle={{ marginBottom: 20, alignSelf: 'flex-start' }}
        data={data}
        renderItem={({ item, index }) => (
          <GridItem key={index} data={item} onElementClick={onElementClick} />
        )}
        numColumns={2}
        style={style}
      />
    </>
  );
};

export default GridList;
