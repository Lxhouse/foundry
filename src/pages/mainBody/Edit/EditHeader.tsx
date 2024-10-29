import { Button, Typography, Space } from "antd"
// import { useNavigate } from "react-router-dom"
import { LeftOutlined, EditOutlined } from "@ant-design/icons"
import EditToolbar from './EditToolbar';
const { Title } = Typography
function EditHeader() {
    // const nav = useNavigate()

    return <div className="bg-white border border-solid  border-gray-300 py-3" >
        <div className="flex mx-6">
            <div className="flex flex-1  items-center ">
                <Space>
                    <Button type='link' icon={<LeftOutlined />}>返回</Button>
                    <h1 className="text-lg font-medium"> 这是个标题</h1>
                    <EditOutlined />
                </Space>
            </div>
            <div className="flex-1 text-center"><EditToolbar /></div>
            <div className="flex-1 text-right">
                <Space>
                    <Button >保存</Button>
                    <Button type='primary'>发布</Button>
                </Space>
            </div>
        </div>
    </div >
}

export default EditHeader