// import Link from "next/link";
import Image from "next/image";

import Head from "next/head";

const Layout = ({ title, description, image, url, app_id, type }) => {
  return (
    // <>
    <Head>
      <meta property="fb:app_id" content={app_id} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
    // </>
  );
};

export default Layout;
