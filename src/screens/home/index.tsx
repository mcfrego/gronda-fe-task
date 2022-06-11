import * as React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';

import { useAppDispatch } from '../../../shared/redux/hooks';
import { useGetCreationsQuery } from '../../../shared/redux/services/api';
import { creationClicked } from '../../../shared/redux/slices/creationsCount';
import { GridList } from '../../components';
import { SCREENS } from '../../constants/screen';
import ROUTER from '../../navigators/router';

const Home = function (props: { componentId: string }) {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetCreationsQuery();

  const onElementClick = (id: number) => {
    dispatch(creationClicked(id));
    ROUTER.push(
      {
        componentId: props.componentId,
        passProps: { creationId: id },
      },
      SCREENS.CreationView,
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
      }}>
      {isLoading ? (
        <Text>Loading placeholder</Text>
      ) : (
        <>
          <Image
            style={{
              width: '40%',
              maxWidth: 500,
              height: 50,
            }}
            resizeMode={'contain'}
            source={require('../../assets/images/logo_full.png')}
          />
          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
              marginTop: 30,
            }}
            source={require('../../assets/images/banner.jpeg')}
          />

          {data && (
            <GridList
              title="Creation for you"
              data={data}
              onElementClick={onElementClick}
              style={{ marginTop: 30, width: '100%', maxWidth: 500 }}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
