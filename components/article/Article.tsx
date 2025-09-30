// components/article/Article.tsx
interface ArticleProps {
    content: any;
  }
  
  export function Article({ content }: ArticleProps) {
    return (
      <article className="prose max-w-none">
        {/* 根据您的结构化内容设计渲染逻辑 */}
        <section className="introduction">
          <h2>Introduction</h2>
          <p>{content.introduction}</p>
        </section>
        
        {/* 渲染特性部分 */}
        {content.features && (
          <section className="features">
            <h2>Features</h2>
            {content.features.map((feature: any, index: number) => (
              <div key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        )}
        
        {/* 其他内容... */}
      </article>
    );
  }