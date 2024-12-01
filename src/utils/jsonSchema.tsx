import { PROJECTS_LIST, PAGE_LIST } from '@/jsonSchema/projects';

export const getProjectByProjectId = (projectId: string) => {
  return PROJECTS_LIST.find((p) => p.id === projectId);
};

export const getPageByProjectIdPageId = (projectId: string, pageId: string) => {
  const curPro = getProjectByProjectId(projectId);
  if (curPro?.childPid.includes(pageId)) {
    return PAGE_LIST.find((p) => p.id === pageId);
  }
};
