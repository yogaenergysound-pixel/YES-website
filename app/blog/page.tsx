import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Cursor from '../components/Cursor'
import { POSTS } from '../lib/blog'

const CATEGORY_COLORS: Record<string, string> = {
  rose: 'var(--rose)',
  sage: 'var(--sage-lt)',
  gold: 'var(--gold)',
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export const metadata = {
  title: 'The YES Journal — Yoga, Energy & Sound in Frisco, TX',
  description:
    'Science-backed insights on sound healing, yoga, energy work, and nervous system health for the modern professional.',
}

export default function BlogIndex() {
  const [featured, ...rest] = POSTS

  return (
    <>
      <Cursor />
      <Nav />
      <main className="journal-page">

        {/* ── Header ── */}
        <header className="journal-header">
          <div className="container">
            <span className="section-label" style={{ color: 'var(--rose)' }}>
              04 — The YES Journal
            </span>
            <h1 className="journal-headline">
              Wisdom for the<br /><em>modern body.</em>
            </h1>
            <p className="journal-desc">
              Science-backed insights on sound healing, yoga, energy work, and
              nervous system health — written for the high-performing professionals
              of Frisco and North Dallas.
            </p>
          </div>
        </header>

        {/* ── Featured article — cinematic card ── */}
        <section className="journal-featured-section">
          <div className="container">
            <Link
              href={`/blog/${featured.slug}`}
              className="journal-featured-card"
              aria-label={`Read: ${featured.title}`}
            >
              {featured.heroImage && (
                <div className="journal-featured-img-wrap">
                  <Image
                    src={featured.heroImage}
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                    className="journal-featured-img"
                    priority
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="journal-featured-body">
                <div className="journal-featured-meta">
                  <span
                    className="journal-cat"
                    style={{ color: CATEGORY_COLORS[featured.categoryColor] }}
                  >
                    {featured.category}
                  </span>
                  <span className="journal-divider">·</span>
                  <span className="journal-read">{featured.readTime} min read</span>
                  <span className="journal-divider">·</span>
                  <span className="journal-date">{featured.date}</span>
                </div>
                <h2 className="journal-featured-title">{featured.title}</h2>
                <p className="journal-featured-excerpt">{featured.excerpt}</p>
                <span className="journal-featured-cta">
                  Read article <ArrowRight />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ── More articles — card grid ── */}
        <section className="journal-more-section">
          <div className="container">
            <p className="journal-more-label">More articles</p>
            <ul className="journal-index-grid" role="list">
              {rest.map((post) => (
                <li key={post.slug} className="journal-index-card">
                  <Link href={`/blog/${post.slug}`} className="journal-index-link">
                    {post.heroImage && (
                      <div className="journal-index-img-wrap">
                        <Image
                          src={post.heroImage}
                          alt=""
                          fill
                          style={{ objectFit: 'cover' }}
                          className="journal-index-img"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <div className="journal-index-body">
                      <div className="journal-index-meta">
                        <span
                          className="journal-cat"
                          style={{ color: CATEGORY_COLORS[post.categoryColor] }}
                        >
                          {post.category}
                        </span>
                        <span className="journal-read-badge">{post.readTime} min</span>
                      </div>
                      <h2 className="journal-index-title">{post.title}</h2>
                      <p className="journal-index-excerpt">{post.excerpt}</p>
                      <span className="journal-index-cta">
                        Read article <ArrowRight />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
    </>
  )
}
