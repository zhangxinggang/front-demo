import { ConnectState } from '@/models/connect';
import { get } from 'lodash';

export const mapStateToProps = (state: ConnectState) => {
  return {
    guideLineList: get(state, 'global.guideLine.value') || [],
    guideLineShow: get(state, 'global.guideLine.show') ?? false,
    width: get(state, 'global.screenData.config.style.width'),
    height: get(state, 'global.screenData.config.style.height'),
    scale: get(state, 'global.scale'),
    flag: state.global.screenData.config.flag.type,
  };
};

export const mapDispatchToProps = (dispatch: any) => ({
  setGuideLine: (value: any) =>
    dispatch({ type: 'global/setGuideLine', value }),
  setSelect: (value: any) => dispatch({ type: 'global/setSelect', value }),
});
