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
    <section
      ref={ref}
      className="bg-white px-6 py-[50px] text-gray-900 md:px-10 md:py-[100px] xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold md:text-[40px]">{BLOG_SECTION.HEADING}</h2>
          <p className="mt-2 text-sm text-gray-500 md:text-xl">{BLOG_SECTION.SUBHEADING}</p>
        </motion.div>

        {/* Blog Grid */}
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-start justify-between gap-20 md:w-[60%]">
            {/* Left: Featured Post */}
            {BLOG_SECTION.POSTS[0] && (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="group h-full cursor-pointer gap-2 overflow-hidden border">
                  <div className="relative h-[320px] w-full md:h-[600px]">
                    <Image
                      src={BLOG_SECTION.POSTS[0].image}
                      alt={BLOG_SECTION.POSTS[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-6 p-5">
                    <p className="text-vl-neutral-5 text-xs md:text-base">
                      {BLOG_SECTION.POSTS[0].date}
                    </p>
                    <div className="flex flex-col gap-3">
                      <h3 className="line-clamp-1 text-base font-semibold text-black md:text-xl">
                        {BLOG_SECTION.POSTS[0].title}
                      </h3>
                      <p className="text-vl-neutral-5 line-clamp-2 text-xs md:text-base">
                        {BLOG_SECTION.POSTS[0].excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${BLOG_SECTION.POSTS[0].id}`}
                      className="group-hover:text-vl-primary inline-flex items-center gap-1 text-sm font-semibold text-black transition-all md:text-base"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            )}
            {/* CTA Button */}
            <div className="hidden text-center md:block">
              <Link
                href="/blog"
                className={cn(
                  'bg-vl-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-black transition-colors hover:brightness-95 md:text-base',
                )}
              >
                See More Articles →
              </Link>
            </div>
          </div>

          {/* Right: Two smaller posts stacked */}
          <div className="flex w-full flex-col gap-8 md:w-[40%]">
            {BLOG_SECTION.POSTS.slice(1, 3).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Card className="group h-full cursor-pointer gap-2 overflow-hidden border">
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 40vw"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-6 p-5">
                    <p className="text-vl-neutral-5 text-xs md:text-base">{post.date}</p>
                    <div className="flex flex-col gap-3">
                      <h3 className="line-clamp-1 text-base font-semibold text-black md:text-xl">
                        {post.title}
                      </h3>
                      <p className="text-vl-neutral-5 line-clamp-2 text-xs md:text-base">
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

        <div className="mt-10 block text-center md:hidden">
          <Link
            href="/blog"
            className={cn(
              'bg-vl-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-black transition-colors hover:brightness-95 md:text-base',
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
