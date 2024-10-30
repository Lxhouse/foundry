import { Space, Button, Tooltip, Popconfirm } from "antd";
import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import useEditStore from "@/store/useEditStore";
import { useMemo } from "react";

function EditToolbar() {
    const { removeSelectedComponent, changeComponentStates, selectedId, componentList } = useEditStore();

    const isLocked = useMemo(() =>
        componentList.find(c => c.fe_id === selectedId)?.isLocked,
        [componentList, selectedId]
    );

    const handleDelete = () => removeSelectedComponent();

    return (
        <Space>
            <Tooltip title="删除">
                <Popconfirm
                    title="您确定要删除选中的组件吗？"
                    onConfirm={handleDelete}
                    okText="确认"
                    cancelText="取消"
                >
                    <Button shape="circle" icon={<DeleteOutlined />} />
                </Popconfirm>
            </Tooltip>
            <Tooltip title="隐藏">
                <Button
                    shape="circle"
                    icon={<EyeInvisibleOutlined />}
                    onClick={() => changeComponentStates({ isHidden: true }, { needNext: true })}
                />
            </Tooltip>
            <Tooltip title="锁定">
                <Button
                    shape="circle"
                    type={isLocked ? 'primary' : 'default'}
                    icon={<LockOutlined />}
                    onClick={() => changeComponentStates({ isLocked: !isLocked })}
                />
            </Tooltip>
            <Tooltip title="复制">
                <Button
                    shape="circle"
                    icon={<CopyOutlined />}
                // onClick={() => changeComponentStates({ isLocked: !isLocked })}
                />
            </Tooltip>
            <Tooltip title="粘贴">
                <Button
                    shape="circle"
                    icon={<BlockOutlined />}
                // onClick={() => changeComponentStates({ isLocked: !isLocked })}
                />
            </Tooltip>
        </Space>
    );
}

export default EditToolbar;
