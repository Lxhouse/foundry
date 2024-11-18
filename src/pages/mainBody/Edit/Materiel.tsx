import { Tabs, Space } from "antd";
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import ComponentLib from "./ComponentLib";
import Layer from "./layer";


function MaterielPanel() {
  const tabsItems = [
    { key: 'componentLib', label: (<Space><AppstoreOutlined />组件库</Space>), children: <ComponentLib /> },
    {
      key: 'layers', label: (<Space><BarsOutlined />图层</Space>), children: <Layer />
    }
  ]

  return <Tabs defaultActiveKey="" items={tabsItems} />
}
// 物料区
function Materiel() {
  return <div className="w-[300px] bg-white p-4 rounded-lg"><MaterielPanel /></div>;
}
export default Materiel;
