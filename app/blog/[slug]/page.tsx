import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost, POSTS, SectionType } from '../../lib/blog'
import Nav from '../../components/Nav'
import Cursor from '../../components/Cursor'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — YES Wellness Frisco`,
    description: post.excerpt,
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  rose: 'var(--rose)',
  sage: 'var(--sage-lt)',
  gold: 'var(--gold)',
}

function RenderSection({ s }: { s: SectionType }) {
  switch (s.type) {
    case 'h2':
      return <h2 className="post-h2">{s.text}</h2>
    case 'h3':
      return <h3 className="post-h3">{s.text}</h3>
    case 'p':
      return <p className="post-p">{s.text}</p>
    case 'ul':
      return (
        <ul className="post-ul">
          {s.items.map((item, i) => (
            <li key={i} className="post-li">{item}</li>
          ))}
        </ul>
      )
    case 'pullquote':
      return <blockquote className="post-pullquote">{s.text}</blockquote>
    case 'hr':
      return <hr className="post-hr" />
    default:
      return null
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Cursor />
      <Nav />
      <main className="post-page">

        {/* ── Back link ── */}
        <div className="post-back-wrap">
          <div className="container">
            <Link href="/blog" className="post-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              The YES Journal
            </Link>
          </div>
        </div>

        {/* ── Post header ── */}
        <header className="post-header">
          <div className="post-header-inner container">
            <div className="post-header-meta">
              <span
                className="post-cat-badge"
                style={{
                  color: CATEGORY_COLORS[post.categoryColor],
                  borderColor: CATEGORY_COLORS[post.categoryColor],
                }}
              >
                {post.category}
              </span>
              <div className="post-meta-details">
                <span className="journal-read">{post.readTime} min read</span>
                <span className="journal-divider">·</span>
                <span className="journal-date">{post.date}</span>
              </div>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
          </div>
        </header>

        {/* ── Hero image ── */}
        {post.heroImage && (
          <div className="post-hero">
            <Image
              src={post.heroImage}
              alt={post.title}
              width={1600}
              height={800}
              className="post-hero-img"
              priority
            />
          </div>
        )}

        {/* ── Post body ── */}
        <article className="post-body">
          <div className="post-body-inner">
            {post.sections.map((s, i) => (
              <RenderSection key={i} s={s} />
            ))}
          </div>
        </article>

        {/* ── Bottom CTA ── */}
        <aside className="post-cta">
          <div className="container">
            <div className="post-cta-inner">
              <span className="section-label" style={{ color: 'var(--rose)' }}>
                Ready to experience it firsthand?
              </span>
              <h2 className="post-cta-headline">Your first class awaits.</h2>
              <p className="post-cta-sub">
                Join us in Frisco for a sound bath, yoga class, or private session.
                No experience required.
              </p>
              <div className="post-cta-btns">
                <Link href="/#begin" className="btn btn-rose">
                  Book a Class
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/blog" className="btn btn-ghost-light">
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </aside>

      </main>
    </>
  )
}
