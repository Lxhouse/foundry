import useGetApplyData from '@/hooks/useGetApplyData';
import LoadingPage from '@/pages/utilsPage/Loading';
import { Link } from 'react-router-dom';
const ProjectsLayout = () => {
  const { projectsLoading, projects } = useGetApplyData();
  if (projectsLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="p-6 bg-gray-50">
      <header className="text-2xl font-semibold mb-6">项目列表总览</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            to={`/pages/${p?.id}`}
            key={p.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {p.icon && (
              <div className="mb-4">
                <img
                  src={p.icon}
                  alt={`${p.name} 图标`}
                  className="w-12 h-12 object-cover mx-auto"
                />
              </div>
            )}
            <div className="text-center font-medium text-lg">{p.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsLayout;
