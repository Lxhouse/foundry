import React, { useState } from "react";
import { Space, Button, message, Input } from "antd";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import useEditStore from "@/store/useEditStore";

const Layer: React.FC = () => {
    const { selectedId, componentList, changeSelectComponentStates, changeSelectedId } = useEditStore();
    const [changingTitleId, setChangingTitleId] = useState("");

    // 处理组件标题点击逻辑
    const handleTitleClick = (fe_id: string, isHidden: boolean) => {
        if (isHidden) {
            message.info("不能选中隐藏组件");
            return;
        }
        if (fe_id !== selectedId) {
            changeSelectedId(fe_id);
        }
        setChangingTitleId(fe_id === selectedId ? fe_id : "");
    };

    // 更新组件状态
    const handleStateChange = (fe_id: string, key: "isHidden" | "isLocked", value: boolean) => {
        changeSelectComponentStates(
            { [key]: value },
            { targetSelectedId: fe_id, needNext: key === "isHidden" && value }
        );
    };

    // 渲染标题输入框或静态标题
    const renderTitle = (fe_id: string, title: string | undefined) => {
        if (changingTitleId === fe_id) {
            return (
                <Input
                    value={title}
                    onChange={(e) =>
                        changeSelectComponentStates(
                            { title: e.target.value },
                            { targetSelectedId: fe_id }
                        )
                    }
                    onPressEnter={() => setChangingTitleId("")}
                    onBlur={() => setChangingTitleId("")}
                />
            );
        }
        return title || "";
    };

    return (
        <div>
            {componentList.map(({ fe_id, title, isHidden, isLocked }) => (
                <div key={fe_id} className="flex justify-between items-center p-2 border-b border-gray-200">
                    {/* 左侧标题 */}
                    <span
                        className={`cursor-pointer ${selectedId === fe_id ? "text-blue-400 font-bold" : ""
                            }`}
                        onClick={() => handleTitleClick(fe_id, isHidden)}
                    >
                        {renderTitle(fe_id, title)}
                    </span>

                    <span className="flex items-center gap-4">
                        <Button
                            shape="circle"
                            disabled={selectedId !== fe_id}
                            type={isHidden ? "primary" : "default"}
                            icon={<EyeInvisibleOutlined />}
                            onClick={() => handleStateChange(fe_id, "isHidden", !isHidden)}
                        />
                        <Button
                            shape="circle"
                            disabled={selectedId !== fe_id}
                            type={isLocked ? "primary" : "default"}
                            icon={<LockOutlined />}
                            onClick={() => handleStateChange(fe_id, "isLocked", !isLocked)}
                        />
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Layer;
