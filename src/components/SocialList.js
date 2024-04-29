import React, { useEffect, useState } from "react";
import cosmic from "../bucketclient";
import { Tab } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const SocialList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cosmic.objects
      .find({
        type: "socials",
      })
      .then((response) => {
        setPosts(response.objects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching 'social' category:", error);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" ">
      {isLoading && (
        <div className="mx-auto flex">
          <span className="inline-flex items-center rounded-full  text-slate-800 dark:text-white px-4 py-2 text-sm">
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800 dark:text-white "
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

      {!isLoading && (
        <>
        <div className="columns-1 md:columns-2 lg:columns-3 md:gap-24">
          {posts.map((post) => (
            <>
                {post.metadata.repeater.map((item, index) => (
                    <>
                      <img
                        key={index}
                        src={item.image.imgix_url + "?auto=format,compress"}
                        alt={`Image ${index}`}
                        className="rounded-2xl outline-slate-300 hover:outline-offset-[8px] transition-all ease-in duration-200  mb-24 dark:hover:outline-slate-600 dark:outline-slate-700  outline-1 outline w-full object-fit object-center opacity-0 "
                        onLoad={(e) => e.target.classList.add("opacity-100")}
                      />
                   </>
                ))}
              </>
          ))}
          </div>
        </>
      )}
      
    </div>
  );
};

export default SocialList;
