// components/content/MonkeyMartContent.tsx
import { MonkeyMartContent } from '@/app/monkey-mart/content';
import Image from 'next/image';


export default function MonkeyMartContentComponent() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Meta Description */}
      <meta name="description" content={MonkeyMartContent.metaDescription} />
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {MonkeyMartContent.title}
      </h1>
      
      {/* Introduction */}
      <section className="mb-8">
        {MonkeyMartContent.introduction.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <div className="my-8 text-center">
        <Image 
          src="/assets/monkey-mart/monkey-mart-unblocked.jpg" // 替换为你的图片路径
          alt="Monkey Mart gameplay showing store management interface"
          width={800}
          height={450}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="text-sm text-gray-500 mt-2">Monkey Mart Gameplay - Store Layout and Customer Management</p>
      </div>
      
      {/* Main Content Sections */}
      {MonkeyMartContent.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-200 pb-2">
            {section.title}
          </h2>
          
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {subsection.title}
              </h3>
              
              <div className="space-y-3">
                {subsection.content.map((paragraph, paraIndex) => (
                  <p key={paraIndex} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
      
      <div className="my-8 text-center">
        <Image 
          src="/assets/monkey-mart/monkey-mart-gameplay-store-management.png" // 替换为你的图片路径
          alt="Monkey Mart gameplay showing a busy store layout with various products, monkeys working, and customer interactions. The image includes a fish tank, fruits, and the Monkey Mart sign in a colorful setting."
          width={800}
          height={450}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="text-sm text-gray-500 mt-2">Monkey Mart Gameplay - Store Layout and Customer Management</p>
      </div>

      {/* Conclusion */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
        {MonkeyMartContent.conclusion.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-3 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>
    </article>
  );
}