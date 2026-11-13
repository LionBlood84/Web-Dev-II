import { content } from '../content.js';

// Blog post: title, subtitle, larger intro paragraph, then a 3-column body
function Article() {
  return (
    <article className="article">
      <h1 className="article__title">{content.title}</h1>
      <h2 className="article__subtitle">{content.subtitle}</h2>
      <p className="article__intro">{content.intro}</p>

      {/* The columns are created in CSS, so the text flows across them */}
      <div className="article__columns">
        {content.sections.map((section, index) => (
          <section key={index}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

export default Article;
