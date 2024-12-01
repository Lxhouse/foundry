import { PROJECTS_LIST, PAGE_LIST } from '@/jsonSchema/projects';
import { useState, useEffect } from 'react';

interface IProps {
  projectId?: string;
  pageId?: string;
}

const useGetApplyData = (props: IProps | void) => {
  const { projectId, pageId } = props || {};

  const [projectsLoading, setProjectsLoading] = useState<boolean>(false);
  const [pagesLoading, setPagesLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  // 用来存储数据
  const [projects, setProjects] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [page, setPage] = useState<any | undefined>(undefined);

  const simulateLoading = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    delay: number,
    data: any,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setLoading(true);
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        setData(data);
        setLoading(false);
        resolve(data);
      }, delay);
    });
  };

  const getProjects = async () => {
    await simulateLoading(setProjectsLoading, 1000, PROJECTS_LIST, setProjects);
  };

  const getPages = async (projectId?: string) => {
    if (!projectId) {
      setPagesLoading(false);
      setPages([]); // 如果没有 projectId，直接返回空数组
      return Promise.resolve(undefined);
    }
    await simulateLoading(
      setPagesLoading,
      1000,
      PROJECTS_LIST.find((p) => p.id === projectId)?.childPid.map((cPid) =>
        PAGE_LIST.find((pageItem) => pageItem.id === cPid)
      ),
      setPages
    );
  };

  const getPage = async (pageId?: string) => {
    if (!pageId) {
      setPageLoading(false);
      setPage(undefined); // 如果没有 projectId 或 pageId，直接返回 undefined
      return Promise.resolve(undefined);
    }
    await simulateLoading(
      setPageLoading,
      1000,
      PAGE_LIST.find((p) => p.id === pageId),
      setPage
    );
  };

  useEffect(() => {
    if (projectId) {
      getPages(projectId);
    }
  }, [projectId]);

  useEffect(() => {
    if (pageId) {
      getPage(pageId);
    }
  }, [pageId]);

  useEffect(() => {
    getProjects();
  }, []);

  return {
    projectsLoading,
    projects,
    pagesLoading,
    pages,
    pageLoading,
    page,
  };
};

export default useGetApplyData;
