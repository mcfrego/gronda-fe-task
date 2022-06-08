import { ACTION_TYPES } from '../constants/actionTypes';
/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores';

export const splashLaunched = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.HOME.HOME_LAUNCHED,
});
