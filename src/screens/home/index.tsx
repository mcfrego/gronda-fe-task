import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';
import { useGetCreationsQuery } from '../../../shared/redux/services/api';
import { creationClicked } from '../../../shared/redux/slices/creationsCount';
import { Button } from '../../components';
import { SCREENS } from '../../constants/screen';
import ROUTER from '../../navigators/router';
import { GLOBAL } from '../../view/styles/global';

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
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        {isLoading ? (
          <Text>Loading placeholder</Text>
        ) : (
          <>
            {data &&
              data.map(({ title, id }, index) => (
                <Button
                  title={title}
                  key={index}
                  onClick={() => onElementClick(id)}
                />
              ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
