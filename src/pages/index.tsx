import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Intro from "../sections/Intro";
import Team from "../sections/Team";
import Latests from "../sections/Latest";

const MainPage = () => {
  return (
    <Layout type="home">
      <Seo title="Home" />
      <Intro />
      <Latests />
      <Team />
    </Layout>
  );
};

export default MainPage;
