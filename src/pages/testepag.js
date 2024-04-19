import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import cosmic from "../bucketclient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Menu from "../components/Menu";
import ImageFull from "../components/ImageFull";
import Footer from "../components/Footer";
import { LinkIcon } from "@heroicons/react/24/outline";

const Img = React.memo(({ src, alt, className }) => (
  <img
    className={
      (className,
      "w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 lg:my-16 dark:bg-slate-900/60")
    }
    src={src}
    alt={alt}
  />
));

const H1 = React.memo(({ children }) => (
  <div className="has-[img]:lg:max-w-screen-2xl mx-auto w-full">
    <h1 className="my-3 text-gray-600 sm:text-3xl dark:text-gray-400 text-pretty">
      {children}
    </h1>
  </div>
));

const H2 = React.memo(({ children }) => (
  <div className="lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
    <h2 className="mt-16 mb-3 text-2xl font-bold text-gray-900 dark:text-white">
      {children}
    </h2>
  </div>
));

const P = React.memo(({ children }) => (
  <div className="has-[img]:lg:max-w-screen-2xl has-[iframe]:lg:max-w-screen-2xl lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
    <p className="my-3 text-gray-600 sm:text-xl dark:text-gray-400 text-pretty">
      {children}
    </p>
  </div>
));
const Li = React.memo(({ children }) => (
  <div className="has-[img]:lg:max-w-screen-2xl lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
    <li className="my-3 text-gray-600 sm:text-xl dark:text-gray-400 text-pretty list-disc list-inside">
      {children}
    </li>
  </div>
));

const H3 = React.memo(({ children }) => (
  <h3 className="text-xl font-bold">{children}</h3>
));

const H6 = React.memo(({ children }) => (
  <h6 className="text-sm text-center">{children}</h6>
));

const Table = React.memo(({ children }) => (
  <div className="max-w-screen-xl mx-auto columns-1">{children}</div>
));

const Code = React.memo(({ children }) => (
  <iframe
    src={`${children}`}
    className="w-full aspect-video lg:border-2 border-slate-50 dark:border-slate-800 lg:my-16"
  ></iframe>
));

const Tr = React.memo(({ children }) => (
  <div className="max-w-screen-xl mx-auto columns-1 lg:columns-2 lg:gap-32 lg:flex">
    {children}
  </div>
));

const Th = React.memo(({ children }) => (
  <div className="m-6 lg:m-0">{children}</div>
));

const Blog = () => {
  const components = useMemo(
    () => ({
      img: Img,
      h1: H1,
      h2: H2,
      h3: H3,
      h6: H6,
      li: Li,
      table: Table,
      tr: Tr,
      th: Th,
      p: P,
      code: Code,
      // Adicione outros componentes conforme necessário
    }),
    []
  );
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    cosmic.objects
      .find({
        slug,
        type: "uxuis",
      })
      .then((response) => {
        document.title = "Matheus Gomes - " + posts[0]?.title;
        setPosts(response.objects);
      })
      .catch((error) => {
        console.error("Erro ao recuperar os dados:", error);
      });

  }, [slug, posts]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ImageFull image={post.metadata.cover_image.url} />
        </div>
      ))}
      <Menu className="absolute top-0 w-full *:text-white bg-gradient-to-b from-black/30" />
      <div
        className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out"
        id="content"
      >
        <div className="mx-auto max-w-screen-xl py-16 px-6 2xl:px-0 lg:gap-8 xl:gap-8 lg:pt-32">
          <div className="d-block lg:grid grid-cols-1 lg:grid-cols-5">
            <div className="max-w-screen-md mb-8 lg:mb-16 col-span-4">
              {posts.map((post) => (
                <div key={post.id}>
                  <>
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="mt-8 text-gray-600 sm:text-xl dark:text-gray-400 text-balance">
                      {post.metadata.excerpt}
                    </p>
                    {post.metadata.link && (
                      <>
                        <a
                          href={"http://" + post.metadata.link}
                          className="mt-8 text-gray-900 dark:text-gray-400 text-center flex gap-3"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkIcon
                            className="h-5 w-5 flex-none"
                            aria-hidden="true"
                          />{" "}
                          Visit their website
                        </a>
                      </>
                    )}
                  </>
                </div>
              ))}
            </div>
            <div className="max-w-screen-md mb-8 lg:mb-16">
              {posts.map((post) => (
                <div key={post.id}>
                  <>
                    <div className="mb-4 text-gray-500 dark:text-gray-400">
                      <label className="font-bold text-gray-900 dark:text-gray-200">
                        Year:
                      </label>
                      <br />
                      {post.metadata.year}
                    </div>
                    <div className="mb-4 text-gray-500 dark:text-gray-400">
                      <label className="font-bold text-gray-900 dark:text-gray-200">
                        Scope:
                      </label>
                      <br />
                      {post.metadata.scope &&
                        post.metadata.scope.split(",").map((scope, index) => (
                          <span
                            key={index}
                            className="flex flex-wrap gap-2 w-max rounded-full bg-gray-50 text-gray-800 my-2 px-2.5 py-0.5   dark:bg-gray-700 dark:text-gray-200"
                          >
                            {scope.trim()}{" "}
                            {/* Use trim to remove any leading or trailing whitespace */}
                          </span>
                        ))}
                    </div>
                    {post.metadata.duration && (
                      <div className="mb-4 text-gray-500 dark:text-gray-400">
                        <label className="font-bold text-gray-900 dark:text-gray-200">
                          Duration:
                        </label>
                        <br />
                        {post.metadata.duration}
                      </div>
                    )}
                  </>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
        <hr className="border-gray-200 mx-auto dark:border-gray-700" />
        <div className="bg-white dark:bg-slate-800 mx-auto w-full mt-8 lg:mt-24 mb-32 lg:mb-32 xl:px-0 ">
          <div className="flex justify-between mx-auto ">
            {posts.map((post) => (
              <div key={post.id} className="mx-auto w-full">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="prose-xl"
                  components={components}
                >
                  {post.metadata.content}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-200 mx-auto dark:border-gray-700" />
      <Footer />
    </div>
  );
};

export default Blog;
