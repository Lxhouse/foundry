
import { Space, Button, Tooltip, Popconfirm } from "antd";
import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import useEditStore from "@/store/useEditStore";
import { useMemo } from "react";
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
const Layer = () => {
    const { selectedId, componentList, changeSelectComponentStates } = useEditStore();
    return <div>
        {componentList.map(c => <div className="flex justify-between items-center p-2 border-b border-gray-200">
            <span className={`${selectedId === c.fe_id ? 'text-blue-400 font-bold' : ''}`}>{c.title || ''}</span>
            <span className='flex items-center gap-4'>
                <Button
                    shape="circle"
                    type={c?.isHidden ? 'primary' : 'default'}
                    icon={<EyeInvisibleOutlined />}
                    onClick={() => changeSelectComponentStates({
                        isHidden: !(c.isHidden)
                    }, {
                        needNext: c.isHidden ? false : true,
                        targetSelectedId: c.fe_id,
                    })}
                />
                <Button
                    shape="circle"
                    type={c?.isLocked ? 'primary' : 'default'}
                    icon={<LockOutlined />}
                    onClick={() => changeSelectComponentStates({ isLocked: !(c.isLocked) })}
                /></span>

        </div>)}
    </div>
}





export default Layer