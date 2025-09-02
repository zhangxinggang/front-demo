import CopyAndPasteUtil from '@/utils/Assist/CopyAndPaste';
import { useFocusWithin } from 'ahooks';
import { Options } from 'ahooks/es/useFocusWithin';
import { BasicTarget } from 'ahooks/es/utils/domTarget';

export function usePanelFocus(
  target: BasicTarget,
  options?: Options,
  control?: boolean,
) {
  return useFocusWithin(
    target,
    CopyAndPasteUtil.injectHooksOptions(options, control),
  );
}
