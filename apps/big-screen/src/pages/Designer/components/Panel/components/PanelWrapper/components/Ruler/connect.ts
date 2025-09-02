import { ConnectState } from '@/models/connect';
import { get } from 'lodash';

export const mapStateToProps = (state: ConnectState) => {
  return {
    guideLineList: get(state, 'global.guideLine.value') || [],
    guideLineShow: get(state, 'global.guideLine.show') ?? false,
  };
};

export const mapDispatchToProps = (dispatch: any) => ({});
