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
  children: JSX.Element | JSX.Element[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: { id: string; [key: string]: any }[];
  onDragEnd: (oldIndex: number, newIndex: number) => void;
}
const SortableContainer: FC<SortableContainerProps> = ({
  children,
  items,
  onDragEnd,
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } })
  );

  const handelDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over === null) return;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((e) => e.fe_id === active.id);
      const newIndex = items.findIndex((e) => e.fe_id === over.id);
      onDragEnd(oldIndex, newIndex);
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handelDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default SortableContainer;
