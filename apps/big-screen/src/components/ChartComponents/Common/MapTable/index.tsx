import { Table } from 'antd';
import { TableProps } from 'antd/es/table';
import classnames from 'classnames';
import styles from './index.less';

function MapTable(
  props: TableProps<any> & {
    onDataChange?: (value: any) => void;
  },
) {
  const { className, ...nextProps } = props;

  return (
    <Table
      pagination={false}
      className={classnames(className, styles['design-config-map-table'])}
      bordered={false}
      {...nextProps}
    />
  );
}

export default MapTable;
