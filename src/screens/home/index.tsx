import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import { useAppDispatch } from '../../../shared/redux/hooks';
import { useGetCreationsQuery } from '../../../shared/redux/services/api';
import { creationClicked } from '../../../shared/redux/slices/creationsCount';
import { Banner, GridList, Spinner } from '../../components';
import { SCREENS } from '../../constants/screen';
import ROUTER from '../../navigators/router';
import { TYPOGRAPHY } from '../../styles/styleguide';

const Home = function (props: { componentId: string }) {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetCreationsQuery();

  const onElementClick = (id: number, title: string) => {
    dispatch(creationClicked(id));
    ROUTER.push(
      {
        componentId: props.componentId,
        passProps: { creationId: id },
      },
      SCREENS.CreationView,
      title,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode={'contain'}
        source={require('../../assets/images/logo_full.png')}
      />
      {isLoading ? (
        <Spinner style={styles.spinner} />
      ) : error ? (
        <Text style={styles.error}>Ops! something went wrong</Text>
      ) : (
        <>
          <Banner data={bannerData} style={styles.banner} />
          <GridList
            title="Creation for you"
            data={data}
            onElementClick={onElementClick}
            style={styles.gridlist}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    maxWidth: 500,
    height: 50,
  },
  spinner: { marginTop: 40 },
  error: { color: TYPOGRAPHY.COLOR.Warning },
  banner: { marginTop: 30 },
  gridlist: { marginTop: 30, width: '100%', maxWidth: 500 },
});

const bannerData = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  image: require('../../assets/images/banner.jpeg'),
  title: 'Confiture preparations',
  subtitle: 'With Néstor Velázquez',
}));
