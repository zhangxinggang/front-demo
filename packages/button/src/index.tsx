import * as React from "react";
import { Button } from "antd";
import s from "./style.module.less";

const MyButton: React.FC = () => {
  return (
    <div className={s.garfield_button}>
      <Button>2333</Button>
    </div>
  );
};

export { MyButton };
