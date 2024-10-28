import { Input, Typography } from 'antd';
import { FoundryInputDefaultProps, FoundryInputPropsType } from './interface';
const { Paragraph } = Typography;
function FoundryInput(props: FoundryInputPropsType) {
  const { title, placeholder } = { ...FoundryInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder} />
    </div>
  );
}

export default FoundryInput;
