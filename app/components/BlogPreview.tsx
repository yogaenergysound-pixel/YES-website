import Link from 'next/link'
import Image from 'next/image'
import { POSTS } from '../lib/blog'

const CATEGORY_COLORS: Record<string, string> = {
  rose: 'var(--rose)',
  sage: 'var(--sage-lt)',
  gold: 'var(--gold)',
}

export default function BlogPreview() {
  const featured = POSTS.slice(0, 3)

  return (
    <section className="journal-preview" id="journal" aria-labelledby="journal-heading">
      <div className="container">

        <div className="journal-preview-header reveal">
          <div className="journal-preview-label-row">
            <span className="section-label">
              The YES Journal
            </span>
            <Link href="/blog" className="journal-view-all">
              View all articles
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <h2 id="journal-heading">
            Wisdom for the<br /><em>modern body.</em>
          </h2>
        </div>

        <ul className="journal-grid" role="list">
          {featured.map((post, i) => (
            <li key={post.slug} className={`journal-card reveal d${i + 1}`}>
              <Link href={`/blog/${post.slug}`} className="journal-card-link">

                {post.heroImage && (
                  <div className="journal-card-img-wrap">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={600}
                      height={338}
                      className="journal-card-img"
                    />
                  </div>
                )}

                <div className="journal-card-body">
                  <div className="journal-card-meta">
                    <span
                      className="journal-cat"
                      style={{ color: CATEGORY_COLORS[post.categoryColor] }}
                    >
                      {post.category}
                    </span>
                    <span className="journal-read-badge">{post.readTime} min</span>
                  </div>

                  <h3 className="journal-card-title">{post.title}</h3>
                  <p className="journal-card-excerpt">{post.excerpt}</p>

                  <span className="journal-card-cta">
                    Read
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>

              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
