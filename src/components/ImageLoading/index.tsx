import React, { useState } from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  View,
} from 'react-native';

import { Spinner } from '../';

export interface Props {
  style: ImageStyle;
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
}

const ImageLoading = ({ style, source, resizeMode }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onLoadStart = () => setIsLoading(true);
  const onLoadEnd = () => setIsLoading(false);

  return (
    <View
      style={{
        ...style,
      }}>
      <Image
        style={{ ...style, ...styles.image }}
        source={source}
        resizeMode={resizeMode}
        onLoadStart={onLoadStart}
        onLoad={onLoadEnd}
      />
      {isLoading && <Spinner style={styles.spinner} />}
    </View>
  );
};

export default ImageLoading;

const styles = StyleSheet.create({
  image: { width: 'auto', height: '100%' },
  spinner: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{ translateY: 50 }],
  },
});
