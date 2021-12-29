// import Link from "next/link";
import Image from "next/image";

import Head from "next/head";

const Layout = ({ title, description, image }) => {
  return (
    // <>
    <Head>
      <title>{title}</title>
      {/* <link rel="shortcut icon" href="#"></link> */}
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
    // </>
  );
};

export default Layout;
