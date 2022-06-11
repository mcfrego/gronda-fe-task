import * as React from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface BannerData {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export interface Props {
  style?: ViewStyle;
  data: BannerData[];
}

const Banner = ({ style, data }: Props) => {
  const onItemClick = () =>
    Alert.alert('Element clicked', 'This would display some amazing stuff');

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.flatList}
      renderItem={({ item }) => (
        <ImageBackground
          style={{ ...styles.container, ...style }}
          imageStyle={styles.image}
          source={item.image}>
          <TouchableOpacity style={styles.touchable} onPress={onItemClick}>
            <Text style={styles.subtitle}>{`(${item.id}) New`}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    />
  );
};

export default Banner;

const styles = StyleSheet.create({
  flatList: {
    height: 400,
  },
  container: {
    marginRight: 30,
  },
  touchable: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  image: { borderRadius: 10 },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
