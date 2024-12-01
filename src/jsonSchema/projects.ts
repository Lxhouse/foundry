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
    config: {},
  },
  {
    id: '2',
    name: '客流分析-站点',
    description: '客流分析-站点页面',
    config: {},
  },
];
