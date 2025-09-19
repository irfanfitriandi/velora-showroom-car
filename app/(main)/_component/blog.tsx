'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BLOG_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-white px-6 py-20 text-gray-900 md:px-10 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold md:text-4xl">{BLOG_SECTION.HEADING}</h2>
          <p className="mt-2 text-sm text-gray-500 md:text-base">{BLOG_SECTION.SUBHEADING}</p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Featured Post */}
          {BLOG_SECTION.POSTS[0] && (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="group h-full cursor-pointer gap-6 overflow-hidden shadow-md">
                <Image
                  src={BLOG_SECTION.POSTS[0].image}
                  alt={BLOG_SECTION.POSTS[0].title}
                  className="object-cover"
                  width={740}
                  height={600}
                />
                <CardContent className="pb-6">
                  <p className="text-vl-neutral-5 text-xs md:text-sm">
                    {BLOG_SECTION.POSTS[0].date}
                  </p>
                  <h3 className="mt-2 line-clamp-1 text-base font-semibold text-black md:text-xl">
                    {BLOG_SECTION.POSTS[0].title}
                  </h3>
                  <p className="text-vl-neutral-5 mt-2 line-clamp-3 text-xs md:text-base">
                    {BLOG_SECTION.POSTS[0].excerpt}
                  </p>
                  <Link
                    href={`/blog/${BLOG_SECTION.POSTS[0].id}`}
                    className="group-hover:text-vl-primary mt-4 inline-flex items-center gap-1 text-sm font-semibold text-black transition-all md:text-base"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </motion.article>
          )}

          {/* Right: Two smaller posts stacked */}
          <div className="flex flex-col gap-8">
            {BLOG_SECTION.POSTS.slice(1, 3).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Card className="group flex h-full cursor-pointer flex-col overflow-hidden shadow-md md:flex-row">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={492}
                    height={240}
                    className="h-48 w-full object-cover md:h-auto md:w-40"
                  />
                  <CardContent className="flex flex-col justify-between p-4">
                    <div>
                      <p className="text-xs text-gray-400 md:text-sm">{post.date}</p>
                      <h3 className="mt-1 line-clamp-2 text-base font-semibold text-black md:text-xl">
                        {post.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-base">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="group-hover:text-vl-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold text-black transition-all md:text-base"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className={cn(
              'inline-flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-500 md:text-base',
            )}
          >
            See More Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
