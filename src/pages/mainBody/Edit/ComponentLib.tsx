import { componentConfGroup, ComponentConfType, ComponentPropsType } from "@/components"
import useEditStore from "@/store/useEditStore";
import { Typography } from 'antd';
const { Title } = Typography
function ComponentLib() {
    const { addComponents } = useEditStore()
    function getComponent(c: ComponentConfType<ComponentPropsType>) {

        const { title, type, Component, defaultProps } = c
        function handleClick() {
            addComponents({
                fe_id: new Date().getTime().toString(),
                title, type, props: defaultProps
            })
        }
        return <div key={type} className="mb-3 cursor-pointer bg-white border border-solid border-white p-3 rounded hover:border-zinc-300" onClick={handleClick}>
            <div className="pointer-events-none">
                <Component />
            </div>
        </div>
    }
    return <>
        {componentConfGroup.map((group, index) => {
            const { groupId, groupName = "", components } = group
            return <div key={groupId}>
                <Title className={`text-base ${index === 0 ? 'mt-0' : 'mt-5'}`} level={5}>{groupName}</Title>
                <div>{components.map(c => getComponent(c))}</div>
            </div>
        })}</>
}

export default ComponentLib