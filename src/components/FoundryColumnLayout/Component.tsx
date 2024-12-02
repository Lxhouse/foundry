import { Typography } from 'antd';
import { FoundryInputDefaultProps, FoundryColumnLayoutType } from './interface';
const { Paragraph } = Typography;
function FoundryColumnLayout(props: FoundryColumnLayoutType) {
  const { title, children } = { ...FoundryInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div className="flex">{children}</div>
    </div>
  );
}

export default FoundryColumnLayout;
