import { useParams, useNavigate, NavLink } from 'react-router-dom';
import LoadingPage from '@/pages/utilsPage/Loading';
import { IPage } from '@/types/jsonSchemaType';
import useGetApplyData from '@/hooks/useGetApplyData';

// NoData 组件
const NoData = () => (
  <div className="flex justify-center items-center col-span-full min-h-screen text-xl text-red-500">
    未找到该项目
  </div>
);

// 渲染内容区域
const PagesContent = ({ pages }: { pages: IPage[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {pages.map((page) => (
      <div
        key={page.name}
        className="p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-semibold text-gray-800">{page.name}</h2>
        <p className="text-gray-600 mt-2">{page.description || '无描述'}</p>

        {/* 按钮区域 */}
        <div className="flex items-center mt-4 gap-2">
          <NavLink
            to={`/edit/${page.id}`}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            编辑
          </NavLink>
          <NavLink
            to={`/preview/${page.id}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            预览
          </NavLink>
        </div>
      </div>
    ))}
  </div>
);

const PagesLayout = () => {
  const { projectId } = useParams<{
    projectId?: string;
  }>();
  const navigate = useNavigate(); // 获取 navigate 方法

  const { pagesLoading, pages } = useGetApplyData({
    projectId,
  }); // 使用自定义 hook 获取页面数据

  if (pagesLoading) return <LoadingPage />;
  // 渲染页面
  const renderContent = () => {
    if (!Array.isArray(pages) || pages.length === 0) return <NoData />;
    return <PagesContent pages={pages} />;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <span className="text-2xl font-semibold text-gray-800">页面列表</span>
        <button
          onClick={() => navigate(-1)} // navigate(-1) 返回上一页
          className="text-blue-500 hover:text-blue-700 font-semibold flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>返回</span>
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default PagesLayout;
