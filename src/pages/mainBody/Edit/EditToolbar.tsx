import { Space, Button, Tooltip, Popconfirm } from "antd"

import { DeleteOutlined } from "@ant-design/icons"
import useEditStore from "@/store/useEditStore"
function EditToolbar() {
    const { removeSelectedComponent } = useEditStore()
    function handleDelete() {
        removeSelectedComponent()
    }

    return <Space>
        <Tooltip title="删除">
            <Popconfirm
                title="您确定要删除选中的组件吗？"
                onConfirm={handleDelete}
                okText="确认"
                cancelText="取消"
            > <Button shape="circle" icon={<DeleteOutlined />} />
                {/* <Tooltip title="删除">
                   
                </Tooltip> */}
            </Popconfirm>
        </Tooltip>
    </Space >
}

export default EditToolbar