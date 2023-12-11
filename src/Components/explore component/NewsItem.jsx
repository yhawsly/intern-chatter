import React from 'react';

const NewsItem = ({ item }) => {
  const websiteUrl = item.url;
  const website = websiteUrl.split('https://').pop().split('/')[0];
  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', '');

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4 sm:w-full md:w-1/2 lg:w-1/3">
      <a href={item.url} className="block w-full h-full">
        <div className="flex items-center justify-center h-32 bg-gray-400">
          <img
            src={item.urlToImage}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center mb-2">
            <img
              src={`https://s2.googleusercontent.com/s2/favicons?domain=${website}`}
              alt={item.source.id}
              className="mr-2 w-4 h-4"
            />
            <span className="text-sm font-medium">{item.source.name}</span>
          </div>
          <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {item.title}
          </h2>
          <p className="text-gray-700 mt-2">{item.description}</p>
          <div className="mt-2">
            <small className="text-gray-500">
              <b>Published At:</b> {formatTime}
            </small>
          </div>
        </div>
      </a>
    </div>

  );
};

export default NewsItem;
