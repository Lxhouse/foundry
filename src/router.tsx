import EditLayout from '@/layouts/EditLayout';
import ProjectLayout from '@/layouts/ProjectsLayout';
import PagesLayout from '@/layouts/PagesLayout';

const ROUTES = [
  { path: '/', element: <ProjectLayout /> },
  { path: '/pages/:projectId', element: <PagesLayout /> },
  { path: '/edit/:pageId', element: <EditLayout /> },
  { path: '/preview/:pageId', element: <EditLayout /> },
];

export default ROUTES; // 返回路由内容
