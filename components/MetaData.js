import Head from "next/head";
import { useSelector } from "react-redux";

const MetaData = ({ title, description, keywords }) => {
  const themeInfo = useSelector((state) => state.themeInfo);

  return (
    <Head>
      <title>{title || themeInfo?.metaData?.meta_title}</title>
      <meta
        name="description"
        content={description || themeInfo?.metaData?.meta_description}
      />
      <meta
        name="keywords"
        content={keywords || themeInfo?.metaData?.meta_keywords}
      />
    </Head>
  );
};
export default MetaData;
