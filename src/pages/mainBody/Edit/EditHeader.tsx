import { Button, Space } from 'antd';
import { saveJsonSchema } from '@/utils/jsonSchema';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, EditOutlined } from '@ant-design/icons';

import EditToolbar from './EditToolbar';
import useEditStore from '@/store/useEditStore';
function EditHeader() {
  const navigate = useNavigate(); // 获取 navigate 方法

  const { pageExcludeComPInfo, componentList } = useEditStore();
  const sava = () => {
    const pageInfo = {
      ...pageExcludeComPInfo,
      config: JSON.stringify({ ...pageExcludeComPInfo, config: componentList }),
    };
    saveJsonSchema(pageInfo);
  };
  return (
    <div className="bg-white border border-solid  border-gray-300 py-3">
      <div className="flex mx-6">
        <div className="flex flex-1  items-center ">
          <Space>
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => navigate(-1)}
            >
              返回
            </Button>
            <h1 className="text-lg font-medium">
              {pageExcludeComPInfo?.name || ''}
            </h1>
            <EditOutlined />
          </Space>
        </div>
        <div className="flex-1 text-center">
          <EditToolbar />
        </div>
        <div className="flex-1 text-right">
          <Space>
            <Button onClick={sava}>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default EditHeader;
