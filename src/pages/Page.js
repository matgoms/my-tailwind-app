import Menu from "../components/Menu";
import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import cosmic from "../bucketclient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageFull from "../components/ImageFull";
import Footer from "../components/Footer";
import { LinkIcon } from "@heroicons/react/24/outline";

import * as Icons from "@heroicons/react/24/outline";

const Img = React.memo(({ src, alt, className }) => (
  <img
    className={
      (className,
      "w-full border-[1px] border-gray-200 dark:border-gray-900/40 bg-gray-50 dark:bg-slate-900/60 lg:my-16 my-3 group-has-[a]:w- ")
    }
    src={src + '?auto=format'}
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
    <p className="my-3 text-gray-600 sm:text-xl dark:text-gray-200 text-pretty">
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


const Code = React.memo(({ children }) => (
  <iframe
    src={`${children}`}
    className="w-full aspect-video lg:border-2 border-slate-50 dark:border-slate-800 lg:my-16"
  ></iframe>
));

const Table = React.memo(({ node, children, ...props }) => (
  <div className={`max-w-screen-xl mx-auto d-block md:table-fixed my-16`} {...props}>
    {children}
  </div>
));

const Tr = React.memo(({ node, children, ...props }) => (
  <div className="md:flex group w-full has-[img]:border-0   has-[img]:gap-32 gap-8 md:gap-12 break-words"  {...props}>
  {children}
  </div>
));

const Thead = React.memo(({ node, children, ...props }) => (
  <div className="flex w-full" {...props}>
  {children}
  </div>
));

const Tbody = React.memo(({ node, children, ...props }) => (
  <div className="flex w-full " {...props}>
  {children}
  </div>
));

const Th = React.memo(({ node, children, ...props }) => (
  <div className="w-full hidden md:flex min-w-56 font-semibold p-4 py-2 md:py-4 md:p-6 items-center gap-4 text-slate-900 dark:text-slate-200 text-left has-[img]:border-0 border-b-[1px] border-slate-500/20 has-[img]:p-0 bg-gray-50 has-[img]:bg-white has-[img]:dark:bg-slate-800 dark:bg-slate-900/60" {...props}>{children}</div>
));

const Td = React.memo(({ node, children, ...props }) => (
  <div className="flex w-full order-first min-w-56 mt-4 md:mt-0 text-sm md:text-base leading-relaxed font-normal p-4 md:p-6 text-slate-900 dark:text-slate-200 text-left  align-top bg-gray-50 has-[img]:bg-white has-[img]:dark:bg-slate-800 dark:bg-slate-900/60" {...props}>{children}</div>
));



const Del = React.memo(({ children, ...props }) => {
  // Check if children is defined and not null
  if (!children) {
    return null; // Render nothing if children is not defined
  }

  // Check if the children contain a component placeholder
  const IconComponent = Icons[children];

  // Render the icon component if it exists
  if (IconComponent) {
    return (
      <p className="text-gray-700 dark:text-white text-sm my-2">
        <IconComponent className="size-6" />
      </p>
    );
  } else {
    // Render the children as is if it's not an icon component placeholder
    return children;
  }
});




const Page = () => {
  
  const components = useMemo(
    () => ({
      img: Img,
      h1: H1,
      h2: H2,
      h3: H3,
      h6: H6,
      li: Li,
      p: P,
      table: Table,
      thead: Thead,
      tbody: Tbody,
      tr: Tr,
      th: Th,
      td: Td,
      del: Del,
      code: Code,
      
      // Adicione outros componentes conforme necessário
    }),[]
    
  );



  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    cosmic.objects
      .find({
        slug,
      })
      .then((response) => {
       
        setPosts(response.objects);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.error("Erro ao recuperar os dados:", error);
      });
      
      window.scrollTo(0, 0);
        
      
  }, []);
  document.title = "Matheus Gomes - " + posts[0]?.title;
 
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ImageFull image={post.metadata.cover_image.imgix_url + '?auto=format,compress'} />
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
        <div className="bg-white dark:bg-slate-800 mx-auto w-full py-16 lg:py-32 xl:px-0 ">
          <div className="flex justify-between mx-auto ">
          {isLoading && (
     
     <div className="mx-auto flex">
                    <span className="inline-flex items-center rounded-full  text-slate-800 dark:text-white px-4 py-2 text-sm">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading
                    </span>
                  </div>

)}

          {posts && posts.map((post) => (
  <div key={post.id} className="mx-auto w-full">
                                     
                    <Del/>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="prose-xl"
      components={components}
    >
      
      {post.metadata.content}
      </ReactMarkdown>
      {post.metadata.video && (
        <video controls className="mr-auto w-full lg:max-w-screen-xl py-3 lg:py-16 mx-auto" autoplay loop muted playsinline controls>
          <source src={post.metadata.video.imgix_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    
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

export default Page;
