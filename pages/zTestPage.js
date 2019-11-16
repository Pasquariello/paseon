
import { useRouter } from 'next/router';
import Layout from '../components/LayoutApp';
import FormBuilderBeta from '../components/FormBuildingTools/FormBuilderBeta';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = () => (
  <Layout>
   <FormBuilderBeta/>
  </Layout>
);

export default Page;
