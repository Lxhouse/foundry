import { getComponentConfByType } from "@/components";
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { Empty } from 'antd';

function ComponentProp() {
    const { selectedComponent } = useGetComponentInfo();

    if (!selectedComponent) return <Empty description="未选中组件" />;

    const { type, props } = selectedComponent;
    const componentConf = getComponentConfByType(type);
    const PropComponent = componentConf?.PropComponent;

    return PropComponent ? <PropComponent {...props} /> : <Empty description="未选中组件" />;
}

export default ComponentProp;
