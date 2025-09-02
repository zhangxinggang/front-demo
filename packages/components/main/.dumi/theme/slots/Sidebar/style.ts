import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  sidebar: css`
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: ${token.headerHeight}px;
    max-height: calc(100vh - ${token.headerHeight}px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid ${token.colorSplit};
    .site-menu-root {
      width: 100%;
      background: unset;
      border: unset !important;
      .site-menu-sub.site-menu-inline {
        background: unset !important;
      }
      .site-menu-submenu-selected > .site-menu-submenu-title,
      .site-menu-item-selected {
        background-color: unset !important;
        color: ${token.blue};
      }
    }
  `,
  authorInfo: css`
    position: absolute;
    top: 0;
    right: 0;
    background: #e8e9ff;
    padding: 4px 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 12px;
    color: #88a2e1;
  `,
}));
