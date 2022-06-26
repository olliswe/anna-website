import React from "react";
import { client } from "../../utils/sanityClient";
import { PortableText } from "@portabletext/react";
import Navbar from "../../components/Navbar";

export default function Portfolio({ portfolio }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10 mb-20">
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl">{portfolio.title}</h1>
          </div>
          <div>
            <img src={portfolio.imageUrl} alt="" className="float-right w-96" />
            <article className="prose lg:prose-xl px-6 py-6">
              <PortableText value={portfolio.text} />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const portfolios = await client.fetch(`*[_type == "portfolio"]{_id}`);

  // Get the paths we want to pre-render based on posts
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const portfolio = await client.fetch(
    `*[_type == "portfolio" && _id == "${params.id}"]{'imageUrl': image.asset->url, ...}[0]`
  );

  // Pass post data to the page via props
  return { props: { portfolio } };
}
