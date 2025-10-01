'use client';

import React from 'react';
import Image from 'next/image';

interface CatCoffeeShopContentProps {
  content: {
    title: string;
    sections: any[]; // sections should always be an array
  };
}

export default function CatCoffeeShopContent({ content }: CatCoffeeShopContentProps) {
  const renderContentWithMarkdown = (text: string) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  const renderList = (items: string[]) => (
    <ul className="space-y-2 mb-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 mr-2 mt-1">•</span>
          <span>{renderContentWithMarkdown(item)}</span>
        </li>
      ))}
    </ul>
  );

  // Render a single image
  const renderImage = (image: any) => {
    if (!image) return null;
    return (
      <figure className="my-6 text-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
        {image.caption && (
          <figcaption className="text-sm text-gray-600 mt-2 italic">
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  // Render multiple images
  const renderImages = (images: any[]) => {
    if (!images || images.length === 0) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {images.map((image, index) => (
          <figure key={index} className="text-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={200}
              className="rounded-lg shadow-md mx-auto"
            />
            {image.caption && (
              <figcaption className="text-sm text-gray-600 mt-2 italic">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  };

  const renderSubSection = (sub: any, level = 0) => (
    <div key={sub.title} className={`mt-4 ${level > 0 ? 'ml-4' : ''}`}>
      {sub.title && (
        <h3 className={`font-semibold text-gray-800 mb-2 ${level === 0 ? 'text-lg' : 'text-base'}`}>
          {sub.title}
        </h3>
      )}
      {sub.content && (
        <p className="text-gray-700 mb-3 leading-relaxed">
          {renderContentWithMarkdown(sub.content)}
        </p>
      )}
      {sub.list && renderList(sub.list)}
      {sub.subsections?.map((subSub: any) => renderSubSection(subSub, level + 1))}
    </div>
  );

  const renderSection = (section: any) => {
    if (section.type === 'intro') {
      return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {/* Render intro section's image */}
          {section.image && renderImage(section.image)}
          <p className="text-gray-700 text-lg leading-relaxed">
            {renderContentWithMarkdown(section.content || '')}
          </p>
        </div>
      );
    }

    if (section.type === 'faq') {
      return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            {section.title}
          </h2>
          <div className="space-y-6">
            {section.questions?.map((faq: any, index: number) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {renderContentWithMarkdown(faq.answer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (section.type === 'conclusion') {
      return (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-6 mb-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {renderContentWithMarkdown(section.content || '')}
          </p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          {section.title}
        </h2>
        {section.content && (
          <p className="text-gray-700 mb-4 leading-relaxed">
            {renderContentWithMarkdown(section.content)}
          </p>
        )}
        {/* Render images in sections */}
        {section.image && renderImage(section.image)}
        {section.images && renderImages(section.images)}
        {section.subsections?.map((sub: any, index: number) => (
          <div key={index}>
            {renderSubSection(sub)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 leading-tight">{content.title}</h1>
          </div>
        </div>

        <div className="space-y-6">
          {(content.sections || []).map((section: any, index: number) => (
            <div key={index}>
              {renderSection(section)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
