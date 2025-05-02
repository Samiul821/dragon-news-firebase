import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {thumbnail_url, title, details} = news;

    return (
        <div className='p-7 border-2 border-base-300 rounded-lg shadow'>
            <img className='rounded-lg mb-5 w-full object-cover h-[600px]' src={thumbnail_url} alt={title} />
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <p className='text-accent mb-8'>{details}</p>
            <Link className={'btn btn-secondary'} to={`/category/${news.category_id}`}><FaArrowLeftLong></FaArrowLeftLong> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;