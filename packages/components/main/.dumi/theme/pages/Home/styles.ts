import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, prefixCls, css, cx }) => {
  return {
    home: cx(
      `${prefixCls}-home`,
      css`
        height: 100vh;
        overflow: hidden;
      `,
    ),
    container: cx(
      `${prefixCls}-home-contents`,
      css`
        width: 100%;
        max-width: ${token.contentMaxWidth}px;
        padding: 0 16px;
        box-sizing: border-box;
      `,
    ),
  };
});
