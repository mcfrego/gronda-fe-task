import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
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

const Banner = ({ style, data }: Props) => (
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
        <Text style={styles.subtitle}>{`(${item.id}) New`}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </ImageBackground>
    )}
  />
);

export default Banner;

const styles = StyleSheet.create({
  flatList: {
    height: 400,
  },
  container: {
    justifyContent: 'center',
    marginRight: 30,
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
