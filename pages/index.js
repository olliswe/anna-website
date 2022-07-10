import dynamic from "next/dynamic";
import { client } from "../utils/sanityClient";

const HomePage = dynamic(() => import("../components/HomePage"), {
  ssr: false,
});

export default function Home(props) {
  return <HomePage {...props} />;
}

export async function getServerSideProps() {
  const publications = await client.fetch(`*[_type == "publication"]`);
  const portfolios = await client.fetch(
    `*[_type == "portfolio"]{'imageUrl': image.asset->url, ...}`
  );
  const affiliations = await client.fetch(
    `*[_type == "affiliation"]{'imageUrl': image.asset->url, ...} | order(order asc)`
  );

  return {
    props: {
      publications,
      portfolios,
      affiliations,
    },
  };
}
