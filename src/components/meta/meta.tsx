import { MetaProps } from "./model";
import { NextSeo } from "next-seo";

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        type: "website",
        locale: "en_US",
        defaultImageWidth: 1200,
        defaultImageHeight: 630,
        site_name: "",
      }}
    />
  );
};

export default Meta;
