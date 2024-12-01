import { IProject, IPage } from '@/types/jsonSchemaType';

export const PROJECTS_LIST: IProject[] = [
  {
    id: 'shanghai',
    name: '上海移动驾驶仓项目',
    icon: '',
    description: '为上海搞得移动驾驶仓项目',
    childPid: ['1', '2'],
  },
  {
    id: 'shanghai1',
    name: '未知移动驾驶仓项目',
    icon: '',
    description: '测试项目',
    childPid: [],
  },
];

export const PAGE_LIST: IPage[] = [
  {
    id: '1',
    name: '客流分析-线路',
    description: '客流分析-线路页面',
    config:
      '[{"fe_id":"input_001","type":"FoundryInput","title":"用户输入框","isHidden":false,"isLocked":false,"props":{"title":"请输入内容","placeholder":"这里输入...","disabled":false}},{"fe_id":"title_001","type":"FoundryTitle","title":"标题组件","isHidden":false,"isLocked":true,"props":{"text":"这是一个标题","level":2,"isCenter":true,"disabled":false}},{"fe_id":"input_002","type":"FoundryInput","title":"禁用的输入框","isHidden":false,"isLocked":false,"props":{"title":"不可用输入","placeholder":"输入被禁用","disabled":true}},{"fe_id":"title_002","type":"FoundryTitle","title":"隐藏的标题","isHidden":true,"isLocked":false,"props":{"text":"隐藏标题","level":3,"isCenter":false,"disabled":false}}]',
  },
  {
    id: '2',
    name: '客流分析-站点',
    description: '客流分析-站点页面',
    config: '',
  },
];
