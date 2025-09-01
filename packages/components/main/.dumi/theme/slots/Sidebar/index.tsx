import { useNavigate } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, type FC } from 'react';

import { Menu } from 'antd';
import { useSiteStore } from '../../store/useSiteStore';
import AuthorInfo from './AuthorInfo';
import { useStyles } from './style';
import { getAllChildrenKeys, getSidebarMenus } from './utils';

const Sidebar: FC = () => {
  const sidebar = useSiteStore((s) => s.sidebar, isEqual);
  const { styles, theme } = useStyles();
  const navigate = useNavigate();
  const isEmptySideBar = !sidebar || sidebar.length === 0;

  const menus: any = getSidebarMenus(sidebar);
  const defaultSelectedKeys = [window.location.pathname];

  const getPathInfo = () => {
    let pathInfo = null;
    sidebar?.forEach((item: any) => {
      item?.children.forEach((item1: any) => {
        if (item1.link === window.location.pathname) {
          pathInfo = item1.frontmatter;
        }
      });
    });
    return pathInfo;
  };

  return isEmptySideBar ? null : (
    <div className={styles.sidebar}>
      <Menu
        key={JSON.stringify(menus)}
        theme={theme.appearance}
        onClick={(data) => {
          if (data.key) {
            navigate(data.key);
          }
        }}
        defaultOpenKeys={getAllChildrenKeys(menus)}
        defaultSelectedKeys={defaultSelectedKeys}
        mode="inline"
        items={menus}
      />
      <AuthorInfo pathInfo={getPathInfo()} />
    </div>
  );
};

export default memo(Sidebar);
