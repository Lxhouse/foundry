import useGetApplyData from '@/hooks/useGetApplyData';
import Edit from '@/pages/mainBody/Edit';
import LoadingPage from '@/pages/utilsPage/Loading';
import NotFoundPage from '@/pages/utilsPage/NotFoundPage';
import { useParams } from 'react-router-dom';
function EditLayout() {
  const { pageId } = useParams();
  const { page, pageLoading } = useGetApplyData({ pageId });
  if (pageLoading) return <LoadingPage />;
  if (!page) return <NotFoundPage />;
  return <Edit page={page} />;
}
export default EditLayout;
