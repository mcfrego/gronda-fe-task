import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { GLOBAL } from '../../view/styles/global';

function Home() {
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        <Text>You can start your test MOMO</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
