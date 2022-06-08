import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { useGetCreationsQuery } from '../../../shared/redux/services/api';
import { GLOBAL } from '../../view/styles/global';

const Home = function () {
  const { data, error, isLoading } = useGetCreationsQuery();

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        {isLoading ? (
          <Text>Loading placeholder</Text>
        ) : (
          <>
            {data &&
              data.map(({ title }, index) => <Text key={index}>{title}</Text>)}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
