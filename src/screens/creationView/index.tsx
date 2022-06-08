import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { useAppSelector } from '../../../shared/redux/hooks';
import { GLOBAL } from '../../view/styles/global';

const CreationView = function (passProps: { creationId: number }) {
  const item = useAppSelector(state =>
    state.creationCount.find(({ id }) => id === passProps.creationId),
  );
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        <Text>Hi item</Text>
        <Text>{`Item count: ${item?.count}`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreationView;
