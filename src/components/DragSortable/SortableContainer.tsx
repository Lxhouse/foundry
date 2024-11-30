import { FC, useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

interface SortableContainerProps {
  // 子元素，可以是单个 JSX 元素或多个 JSX 元素组成的数组
  children: JSX.Element | JSX.Element[];

  // items 是可拖拽的项目，包含 id 和其它属性
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: { id: string; [key: string]: any }[];

  // onDragEnd 是拖拽结束时的回调函数，返回旧的索引和新的索引
  onDragEnd: (oldIndex: number, newIndex: number) => void;
}

const SortableContainer: FC<SortableContainerProps> = ({
  children,
  items,
  onDragEnd,
}) => {
  // 初始化传感器，MouseSensor 是鼠标拖拽的传感器，设置激活的最小距离为 8px
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } })
  );

  // 拖拽结束后的回调处理函数
  const handelDragEnd = (event: DragEndEvent) => {
    const { active, over } = event; // 获取拖动中的项（active）和目标项（over）

    // 如果目标项为空（即拖拽结束时没有目标项），直接返回
    if (over === null) return;

    // 如果当前拖拽项的 ID 与目标项的 ID 不同，则进行排序
    if (active.id !== over.id) {
      // 根据 ID 找到拖拽项和目标项在 items 数组中的索引
      const oldIndex = items.findIndex((e) => e.id === active.id);
      const newIndex = items.findIndex((e) => e.id === over.id);

      // 调用外部传入的 onDragEnd 回调，传入旧的和新的索引
      onDragEnd(oldIndex, newIndex);
    }
  };

  return (
    <DndContext
      sensors={sensors} // 传递传感器列表
      collisionDetection={closestCenter} // 设置碰撞检测策略，最接近的中心
      onDragEnd={handelDragEnd} // 设置拖拽结束后的处理函数
    >
      {/* SortableContext 是可排序列表的上下文，它管理排序的状态 */}
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default SortableContainer;
