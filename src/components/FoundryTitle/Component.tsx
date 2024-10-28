import { Typography } from 'antd';
import { FoundryTitlePropsType, FoundryTitleDefaultProps } from './interface';
const { Title } = Typography;
function FoundryTitle(props: FoundryTitlePropsType) {
  const {
    text,
    isCenter = false,
    level = 1,
  } = { ...FoundryTitleDefaultProps, ...props };
  const getFontSize = (level: number) => {
    if (level === 1) return 'text-2xl';
    if (level === 2) return 'text-xl';
    if (level === 3) return 'text-base';
    return 'text-base';
  };
  return (
    <Title
      level={level}
      className={`${isCenter ? 'text-center' : 'text-start'} mb-0 ${getFontSize(
        level
      )}`}
    >
      {text}
    </Title>
  );
}

export default FoundryTitle;
