import { getCurrent } from '@/features/auth/actions';
import { redirect } from 'next/navigation';

const WorkspaceIdPage = async ({}) => {
  const user = await getCurrent();
  if (!user) redirect('/sign-in');

  return <div>Workspace Id</div>;
};

export default WorkspaceIdPage;
