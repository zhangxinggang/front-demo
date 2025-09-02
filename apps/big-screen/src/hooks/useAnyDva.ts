import { ConnectState } from '@/models/connect';
import type { Dispatch } from 'dva';
import { getDvaApp } from 'umi';

let app: any;

export function useAnyDva(): {
  dispatch: Dispatch;
  getState: () => ConnectState;
} {
  if (!app) app = getDvaApp();

  return {
    dispatch: app._store.dispatch,
    getState: app._store.getState,
  };
}
