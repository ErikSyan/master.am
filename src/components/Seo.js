import { Helmet } from "react-helmet-async";

const SEO = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "My Website",
    "url": "https://yourwebsite.com"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </Helmet>
  );
};

export default SEO;
