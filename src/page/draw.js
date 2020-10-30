import React, { useState } from 'react';
import { Drawer} from 'antd';

const Draw = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div onClick={showDrawer}>
      设施
      </div>
      <Drawer
        title="设施"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Drawer>
    </>
  );
};
export default Draw