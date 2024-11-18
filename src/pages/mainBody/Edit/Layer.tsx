
import { Space, Button, Tooltip, Popconfirm } from "antd";
import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import useEditStore from "@/store/useEditStore";
import { useMemo } from "react";
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
const Layer = () => {
    const { selectedId, componentList, changeSelectComponentStates } = useEditStore();
    console.log(123321, { componentList })
    return <div>
        {componentList.map(c => <div className="flex justify-between items-center p-2 border-b border-gray-200">
            <span>{c.title || ''}</span>
            <span className='flex items-center gap-4'>
                <Button
                    shape="circle"
                    icon={<EyeInvisibleOutlined />}
                    onClick={() => changeSelectComponentStates({ isHidden: true }, { needNext: true })}
                />
                <Button
                    shape="circle"
                    type={c?.fe_id === selectedId ? 'primary' : 'default'}
                    icon={<LockOutlined />}
                    onClick={() => changeSelectComponentStates({ isLocked: !(c?.fe_id === selectedId) })}
                /></span>

        </div>)}
    </div>
}





export default Layer