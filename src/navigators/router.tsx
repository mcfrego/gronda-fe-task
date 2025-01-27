/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
import { Navigation } from 'react-native-navigation';

import { INavigation } from '../../shared/redux/types/INavigation';
import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';
import { STATUS_BAR_OPTIONS } from './navigation';

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const showPushScreen = ({ componentId, passProps = {} }: INavigation) => {
  Navigation.push(componentId, {
    component: {
      name: SCREENS.Settings,
      id: SCREENS.Settings,
      passProps: {
        ...passProps,
      },
      options: {
        topBar: {
          visible: true,
        },
      },
    },
  });
};

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const push = (
  { componentId, passProps = {} }: INavigation,
  id: string,
  title?: string,
) => {
  Navigation.push(componentId, {
    component: {
      name: id,
      passProps: {
        ...passProps,
      },
      options: {
        statusBar: STATUS_BAR_OPTIONS,
        topBar: {
          visible: true,
          drawBehind: true,
          title: {
            text: title || '',
          },
          // background: {
          //   color: TYPOGRAPHY.COLOR.StatusBar,
          // },
          // borderColor: TYPOGRAPHY.COLOR.StatusBar,
          // backButton: {
          //   icon: {
          //     uri: require('../assets/images/back.png'),
          //     width: 10,
          //     height: 10,
          //   },
          // },
        },
      },
    },
  });
};

const showListingsScreen = (
  { componentId, passProps = {} }: INavigation,
  title?: string,
) => {
  push({ componentId, passProps }, SCREENS.Settings, title);
};

const popToScreen = ({ componentId }: INavigation) => {
  Navigation.popTo(componentId);
};

const dismissModal = ({ componentId }: INavigation) => {
  Navigation.dismissModal(componentId);
};

const pop = ({ componentId }: INavigation) => Navigation.pop(componentId);

const popToRoot = ({ componentId }: INavigation) =>
  Navigation.popToRoot(componentId);

const ROUTER = {
  showPushScreen,
  popToScreen,
  dismissModal,
  pop,
  push,
  popToRoot,
  showListingsScreen,
};

export default ROUTER;
