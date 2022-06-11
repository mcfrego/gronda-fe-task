import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { useAppSelector } from '../../../shared/redux/hooks';
import { TYPOGRAPHY } from '../../styles/styleguide';
import { GLOBAL } from '../../view/styles/global';

const CreationView = function (passProps: { creationId: number }) {
  const item = useAppSelector(state =>
    state.creationCount.find(({ id }) => id === passProps.creationId),
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TYPOGRAPHY.COLOR.Primary,
      }}>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 50 }}>
        {item?.count}
      </Text>
      <Text style={{ color: 'white', fontSize: 30 }}>visits</Text>
    </SafeAreaView>
  );
};

export default CreationView;
