import { ConnectState } from '@/models/connect';
import { get } from 'lodash';

export const mapStateToProps = (state: ConnectState) => {
  const { width, padding } = get(
    state,
    'global.screenData.config.attr.componentBorder',
  );
  return {
    width,
    padding,
  };
};

export const mapDispatchToProps = (dispatch: any) => ({});
