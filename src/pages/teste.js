import React, { useEffect, useState } from 'react';
import cosmic from '../bucketclient';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';

function ProjectsPage() {


 
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('6602c233ad3d8a42681ec9d0');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categoriesPosts, setCategoriesPosts] = useState([]);

    useEffect(() => {
      cosmic.objects
      .find({
        type: 'post-categories',
      })
      .then((response) => {
        const categories = response.objects;
        setCategoriesPosts(categories);
      })
      .catch((error) => {
        console.error('Erro ao recuperar os dados:', error);
      });
     
  }, []);

    useEffect(() => {
      cosmic.objects
      .find({
        type: 'uxuis',
      })
      .then((response) => {
        setPosts(response.objects);
      })
      .catch((error) => {
        console.error('Erro ao recuperar os dados:', error);
      });
     
  }, []);


 

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index) => {
    const categoryId = categoriesPosts[index]?.id;
    console.log('Categoria selecionada:', categoryId);
    setSelectedCategory(categoryId);
    setActiveTabIndex(index);
  };
  
  useEffect(() => {
    console.log('tab selecionada:', activeTabIndex);
    const filtered = posts.filter(post => post.metadata.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory, posts]);
  
  return (
    <section className="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out py-24 lg:py-24">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className=" ">
          <Tab.Group selectedIndex={activeTabIndex} onChange={handleTabChange} >
            <Tab.List className="text-sm lg:text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px ">
             
                {categoriesPosts.map((category) => (
                   <>  
                  <div key={category.id}>
                                 
                  <Tab  
                  className="inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-slate-600 ui-selected:border-slate-600  ui-selected:active dark:ui-selected:text-slate-200 dark:ui-selected:border-slate-200 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300 transition ease-in-out duration-500">{category.title}</Tab>
                </div>
               </>
                  ))}
              
            </Tab.List>
            <Tab.Panels> 
            {categoriesPosts.map((category, index) => (
              <Tab.Panel key={category.id}>
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                      {category.title}
                      </h1>
                      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                      {category.metadata.excerpt}
                      </p>
                    </div>
                  </div>
                <div className="grid lg:grid-cols-2 gap-24">
                  {filteredPosts.map(post => (
                    <div key={post.id}>
                      <Link to={`/posts/${post.slug}`}>
                        <div className="break-inside-avoid-column">
                          <div className="transition ease-in duration-300 hover:-translate-y-4 w-full mb-6 relative">
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              className={`aspect-[4/3] object-cover object-center hover:opacity-90 transition ease-in duration-700 opacity-0 bg-white/80 dark:bg-slate-900`}
                              onLoad={(e) => e.target.classList.add('opacity-100')}
                            />
                              {post.metadata.duration == 'In progress' && (
                        <div className="absolute top-4 right-4 ">
                          
                       <span
                            className="bg-amber-400 inline-flex items-center rounded-full  text-slate-800 px-4 py-2">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {post.metadata.duration}
                           
                          </span>
                      </div>
                  )}
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{post.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-balance">{post.metadata.excerpt}</p>
                          
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
          
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};


export default ProjectsPage;
