import { ComponentPropsType, getComponentConfByType } from "@/components";
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import useEditStore from "@/store/useEditStore";

import { Empty } from 'antd';

function ComponentProp() {
    const { selectedComponent } = useGetComponentInfo();
    const { changeComponentProps } = useEditStore()
    if (!selectedComponent) return <Empty description="未选中组件" />;

    const { type, props, isLocked } = selectedComponent;
    const componentConf = getComponentConfByType(type);
    const PropComponent = componentConf?.PropComponent;
    function changeProps(newProps: ComponentPropsType) {
        if (!selectedComponent) return
        changeComponentProps(newProps)
    }
    return PropComponent ? <PropComponent {...props} onChange={changeProps} disabled={isLocked} /> : <Empty description="未选中组件" />;
}

export default ComponentProp;
