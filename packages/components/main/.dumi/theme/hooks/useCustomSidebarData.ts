import { useFullSidebarData, useLocation } from 'dumi';
import { cloneDeep } from 'lodash-es';

const useCustomSidebarData = () => {
  const sidebarData = useFullSidebarData();
  const { pathname } = useLocation();
  const allPrefixObj: any = {};
  const optData = cloneDeep(sidebarData);
  // 先group路由
  Object.keys(optData).forEach((key: string) => {
    const keys = key.split('/');
    const onePrefix = keys[1];
    if (!allPrefixObj[onePrefix]) {
      allPrefixObj[onePrefix] = [];
    }
    allPrefixObj[onePrefix].push(...optData[key]);
  });
  // 再group名称相同的标题
  Object.keys(allPrefixObj).forEach((key: string) => {
    let groupObj: any = {};
    allPrefixObj[key].forEach((item: any) => {
      const title = String(item.title);
      if (!groupObj[title]) {
        groupObj[title] = item;
      } else {
        groupObj[title].children = [
          ...groupObj[title].children,
          ...item.children,
        ];
      }
      groupObj[title].order = item.order || 0;
    });
    allPrefixObj[key] = Object.values(groupObj);
  });
  const currentPathname = pathname.split('/');
  const sidebar = allPrefixObj[currentPathname[1]];

  return sidebar;
};

export default useCustomSidebarData;
