// Modules
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { splashScreenLaunched } from '../../../shared/redux/thunk/app';
import { Button } from '../../components';
import { tabbedNavigation } from '../../navigators/navigation';
import { GLOBAL } from '../../view/styles/global';
import { TYPOGRAPHY } from '../../view/styles/typography';

const Splash = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(splashScreenLaunched());
  }, []);

  const navigateToHome = () => {
    tabbedNavigation();
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/images/logo_full.png')}
        />
        <Text>
          Gronda is a platform for culinary professionals and passionate
          foodies. Therefore one of the main features in our app is the explore
          page. Here we show the content to our users, so they can get inspired
          every time they open the app. There are multiple actions available in
          this initial view and you should focus on rendering the data and add
          basic actions to each one of the icons present in the screen
        </Text>
        <Button title={'Start my Test'} onClick={navigateToHome} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  image: {
    width: '70%',
  },
});
