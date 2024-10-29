

import { Tabs, Space } from "antd";
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import ComponentProp from "./ComponentProp";




function ControlsPanel() {
  const tabsItems = [
    { key: 'props', label: (<Space><FileTextOutlined />属性</Space>), children: <ComponentProp /> },
    { key: 'setting', label: (<Space><SettingOutlined />页面设置</Space>), children: <div>页面设置</div> }
  ]

  return <Tabs defaultActiveKey="" items={tabsItems} />
}

// 操作区 处理组件的细节
function Controls() {
  return <div className="w-[300px] bg-white p-4 rounded-lg"><ControlsPanel /></div>;
}
export default Controls;




