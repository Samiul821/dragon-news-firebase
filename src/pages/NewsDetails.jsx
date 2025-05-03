import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import RightAside from '../components/homelayout/RightAside';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() => {
        
      const newsDetails = data.find((singleNews) => singleNews.id == id);
      setNews(newsDetails);
    
    }, [data, id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 lg:w-10/12 mx-auto my-5 grid grid-cols-12 gap-3'>
               <section className='col-span-9'>
                <h2 className='text-xl font-semibold mb-5'>Dragon News</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
               </section>
               <aside className='col-span-3'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default NewsDetails;