import * as React from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';

import { TYPOGRAPHY } from '../../styles/styleguide';

export interface Props {
  style?: ViewStyle;
}

const Spinner = ({ style }: Props) => (
  <ActivityIndicator
    size={'large'}
    color={TYPOGRAPHY.COLOR.Primary}
    style={style}
  />
);

export default Spinner;
