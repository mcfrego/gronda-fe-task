// Modules
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useAppDispatch } from '../../../shared/redux/hooks';
import { splashLaunched } from '../../../shared/redux/slices/app';
import { Button, ImageLoading } from '../../components';
import { tabbedNavigation } from '../../navigators/navigation';
import { GLOBAL } from '../../view/styles/global';
import { TYPOGRAPHY } from '../../view/styles/typography';

const Splash = function () {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(splashLaunched());
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
        <Button title={'Start my Test'} onClick={navigateToHome} />
        <ImageLoading
          style={styles.gif}
          resizeMode={'contain'}
          source={{
            uri: 'https://media2.giphy.com/media/l3UcD7vkCptuTGAX6/giphy.gif?cid=ecf05e47jfmk6nf6hxvb663dn0w4qyhrhdluezbg9766n7te&rid=giphy.gif&ct=g',
          }}
        />
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
  gif: {
    width: '70%',
    height: 300,
  },
});
