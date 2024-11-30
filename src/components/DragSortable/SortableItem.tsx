import { CSSProperties, FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
  id: string;
  children: React.ReactNode; // 修改为 React.ReactNode，以支持更多内容
}

const SortableItem: FC<SortableItemProps> = ({ id, children }) => {
  const {
    setNodeRef,
    listeners,
    attributes,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  // 简化 style 定义，并确保 blur 函数已定义
  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    backdropFilter: isDragging ? 'blur(20px)' : '', // 如果blur是自定义函数，确保它能正确执行
    willChange: 'transform', // 提升性能，告诉浏览器哪些属性会发生变化
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default SortableItem;
