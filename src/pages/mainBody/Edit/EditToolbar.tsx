import { Space, Button, Tooltip, Popconfirm } from "antd"

import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons"
import useEditStore from "@/store/useEditStore"
import { useMemo } from "react"
function EditToolbar() {
    const { removeSelectedComponent, changeComponentHidden, selectedId, componentList } = useEditStore()
    const isLocked = componentList.find(c => c.fe_id === selectedId)
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
        <Tooltip title="隐藏">
            <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={() => changeComponentHidden(true)} />
        </Tooltip>
        <Tooltip title="隐藏">
            <Button shape="circle" type={isLocked ? 'primary' : 'default'} icon={<LockOutlined />} onClick={() => { }}
            />
        </Tooltip>
    </Space >
}

export default EditToolbar