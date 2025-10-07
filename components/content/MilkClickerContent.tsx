"use client";
import { milkClickerContent } from '@/app/milk-clicker/content';
import Image from 'next/image';


export default function MilkClickerContent() {
    const data = milkClickerContent;
    
    return (
      <article className="max-w-4xl mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
        {/* --- Header --- */}
        <header className="text-center mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            {data.metadata.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {data.metadata.description}
          </p>
        </header>
  
        {/* --- Introduction --- */}
        <section className="mb-10">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
            {data.introduction.title}
          </h3>
          <p className="text-lg leading-8 mb-6">{data.introduction.description}</p>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-lg mb-3">Learning Objectives</h4>
            <ul className="list-disc list-inside space-y-2">
              {data.introduction.learningObjectives.map((obj, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">{obj}</li>
              ))}
            </ul>
          </div>
          
           <Image
             src="/assets/milk-clicker/milk-clicker- gameplay.png"
             alt="Milk Clicker gameplay interface showing milk carton upgrades and production screen"
             height="600" width="1000" 
             loading="lazy" 
           />
        </section>
  
        <hr className="my-12 border-gray-200 dark:border-gray-700" />
  
        {/* --- Core Mechanics --- */}
        <section className="mb-10">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
            {data.coreMechanics.title}
          </h3>
          <p className="text-lg leading-8 mb-8">{data.coreMechanics.summary}</p>
  
          <div className="space-y-8">
            {data.coreMechanics.keyPoints.map((point, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {point.subtitle}
                </h4>
                
                {/* 安全地处理 strategySections */}
                {point.strategySections && point.strategySections.length > 0 ? (
                  <div className="space-y-6">
                    {point.strategySections.map((strategy, j) => (
                      <div key={j}>
                        {strategy.strategyTitle === "OPS Formula Insight" ? (
                          // OPS Formula Insight 的特殊布局（带项目符号）
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <div>
                              <span className="font-semibold text-blue-600 dark:text-blue-400">
                                {strategy.strategyTitle}:{" "}
                              </span>
                              <span className="text-gray-700 dark:text-gray-300 leading-7">
                                {strategy.strategyContent}
                              </span>
                            </div>
                          </div>
                        ) : (
                          // 其他策略的正常布局
                          <div>
                            <h5 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                              {strategy.strategyTitle}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-300 leading-7">
                              {strategy.strategyContent}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // 如果没有 strategySections，显示普通内容
                  <p className="text-gray-700 dark:text-gray-300 leading-7">{point.content}</p>
                )}
              </div>
            ))}
          </div>
        </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- Optimization --- */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
          {data.optimization.title}
        </h3>
        <p className="text-lg leading-8 mb-8">{data.optimization.summary}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-lg mb-4">Upgrade Sequence</h4>
            <ol className="list-decimal list-inside space-y-3">
              {data.optimization.upgradeSequence.map((step, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-lg mb-4">Playstyle Tips</h4>
            <ul className="space-y-3">
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Active:</strong>{' '}
                {data.optimization.playstyles.active}
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Idle:</strong>{' '}
                {data.optimization.playstyles.idle}
              </li>
            </ul>
            <p className="italic mt-4 text-gray-600 dark:text-gray-400">
              {data.optimization.playstyles.tip}
            </p>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- Progression --- */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
          {data.progression.title}
        </h3>
        <p className="text-lg leading-8 mb-8">{data.progression.description}</p>

        <div className="space-y-6">
          {data.progression.sections.map((section, i) => (
            <div key={i} className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 ml-4">
              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {section.subtitle}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-7">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- Upgrades --- */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
          {data.upgrades.title}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.upgrades.categories.map((cat, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {cat.type}
              </h4>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Best Upgrades:
                </h5>
                <ul className="list-disc list-inside space-y-1">
                  {cat.best.map((b, j) => (
                    <li key={j} className="text-sm text-gray-700 dark:text-gray-300">{b}</li>
                  ))}
                </ul>
              </div>

              {cat.avoid && (
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Avoid:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {cat.avoid.map((a, k) => (
                      <li key={k} className="text-sm text-gray-700 dark:text-gray-300">{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- FAQ --- */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
          {data.faq.title}
        </h3>

        <div className="space-y-8">
          {data.faq.questions.map((q, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">Q: {q.q}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-7">A: {q.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-lg mb-4">Bug Warnings & Tips</h4>
          <ul className="list-disc list-inside space-y-2">
            {data.faq.bugsAndTips.map((tip, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- Balance --- */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
          {data.balance.title}
        </h3>
        <ul className="list-disc list-inside space-y-3 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          {data.balance.points.map((p, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300 leading-7">{p}</li>
          ))}
        </ul>
      </section>

      <hr className="my-12 border-gray-200 dark:border-gray-700" />

      {/* --- Conclusion --- */}
      <section className="text-center py-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Conclusion</h3>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {data.conclusion.summary}
        </p>
      </section>
    </article>
  );
}