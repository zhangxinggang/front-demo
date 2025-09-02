/*
 * @Description: 组件/指令安装注册
 * @Date: 2022-03-01 15:14:22
 */
import rules from '../utils/regular';
import { breadcrumb, breadcrumbItem } from './breadcrumb';
import confirmList from './confirm-list';
import Empty from './empty/index.vue';
import { FiltersPopover, FiltersPopoverItem } from './filters-popover';
import FullLoading from './full-loading';
import InputLimit from './input-limit';
import LargeSelect from './large-select';
import { MorePopover, MorePopoverItem } from './more-popover';
import Navigation from './navigation-slider';
import { PageHandle, PageHandleItem, PageTitle } from './page-table';
import Resizable from './resizable';
import TransferModal from './transfer-modal';
export { Resizable };

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.use(FullLoading);
  Vue.use(confirmList);
  Vue.component('DEmpty', Empty);
  Vue.component('DNavigation', Navigation);
  Vue.component('DResizable', Resizable);
  Vue.component('DPageTitle', PageTitle);
  Vue.component('DPageHandle', PageHandle);
  Vue.component('DPageHandleItem', PageHandleItem);
  Vue.component('DFiltersPopover', FiltersPopover);
  Vue.component('DFiltersPopoverItem', FiltersPopoverItem);
  Vue.component('DMorePopover', MorePopover);
  Vue.component('DMorePopoverItem', MorePopoverItem);
  Vue.component('DTransferModal', TransferModal);
  Vue.component('DLargeSelect', LargeSelect);
  Vue.component('DInputLimit', InputLimit);
  Vue.component('DBreadcrumb', breadcrumb);
  Vue.component('DBreadcrumbItem', breadcrumbItem);
  Vue.prototype.$rules = rules;
}
const Plugins = { install };
export default Plugins;
