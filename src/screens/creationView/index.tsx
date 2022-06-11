import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { useAppSelector } from '../../../shared/redux/hooks';
import { TYPOGRAPHY } from '../../styles/styleguide';

const CreationView = function (passProps: { creationId: number }) {
  const item = useAppSelector(state =>
    state.creationCount.find(({ id }) => id === passProps.creationId),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.count}>{item?.count}</Text>
      <Text style={styles.text}>visits</Text>
    </SafeAreaView>
  );
};

export default CreationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
  },
  count: { color: 'white', fontWeight: '800', fontSize: 50 },
  text: { color: 'white', fontSize: 30 },
});
