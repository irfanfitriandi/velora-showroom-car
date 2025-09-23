'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';

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
                  <div className="relative h-[320px] w-full overflow-hidden md:h-[600px]">
                    <Image
                      src={BLOG_SECTION.POSTS[0].image}
                      alt={BLOG_SECTION.POSTS[0].title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-6 p-5">
                    <p className="text-vl-neutral-5 text-xs md:text-base">
                      {BLOG_SECTION.POSTS[0].date}
                    </p>
                    <div className="flex flex-col gap-3">
                      <h3 className="group-hover:text-vl-primary line-clamp-1 text-base font-semibold text-black transition-colors duration-300 md:text-xl">
                        {BLOG_SECTION.POSTS[0].title}
                      </h3>
                      <p className="text-vl-neutral-5 line-clamp-2 text-xs md:text-base">
                        {BLOG_SECTION.POSTS[0].excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${BLOG_SECTION.POSTS[0].id}`}
                      className="group-hover:text-vl-primary inline-flex items-center gap-1 text-sm font-semibold text-black transition-all group-hover:gap-2 md:text-base"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            )}

            {/* CTA Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden text-center md:block"
            >
              <Link href="/blog" prefetch={false}>
                <Button
                  className={cn(
                    'group bg-vl-primary relative h-[40px] items-center gap-2 overflow-hidden rounded-[8px] px-4 md:h-[48px]',
                    'hover:shadow-vl-primary/30 font-semibold text-black transition-all duration-300 hover:shadow-lg',
                  )}
                >
                  <span
                    className={cn(
                      'absolute -top-22 -left-20 z-0 h-56 w-56 scale-20 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out',
                      'group-hover:scale-150 group-hover:opacity-100',
                    )}
                  />
                  <span className="group-hover:text-vl-primary relative z-10 text-sm transition-colors duration-300">
                    See More Articles
                  </span>
                  <Image
                    src="https://blast-dew-99513560.figma.site/_assets/v11/2d046d4cbbaf2744e4c1686ddaed1ac7870693d5.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="relative z-10 brightness-0 invert-0 transition-all duration-300 group-hover:translate-x-2 group-hover:brightness-100"
                  />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Two smaller posts */}
          <div className="flex w-full flex-col gap-8 md:w-[40%]">
            {BLOG_SECTION.POSTS.slice(1, 3).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Card className="group h-full cursor-pointer gap-2 overflow-hidden border">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 40vw"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-6 p-5">
                    <p className="text-vl-neutral-5 text-xs md:text-base">{post.date}</p>
                    <div className="flex flex-col gap-3">
                      <h3 className="group-hover:text-vl-primary line-clamp-1 text-base font-semibold text-black transition-colors duration-300 md:text-xl">
                        {post.title}
                      </h3>
                      <p className="text-vl-neutral-5 line-clamp-2 text-xs md:text-base">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="group-hover:text-vl-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold text-black transition-all group-hover:gap-2 md:text-base"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA Button (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 block text-center md:hidden"
        >
          <Link href="/blog" prefetch={false}>
            <Button
              className={cn(
                'group bg-vl-primary relative h-[40px] items-center gap-2 overflow-hidden rounded-[8px] px-4 md:h-[48px]',
                'hover:shadow-vl-primary/30 font-semibold text-black transition-all duration-300 hover:shadow-lg',
              )}
            >
              <span
                className={cn(
                  'absolute -top-22 -left-20 z-0 h-56 w-56 scale-20 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out',
                  'group-hover:scale-150 group-hover:opacity-100',
                )}
              />
              <span className="group-hover:text-vl-primary relative z-10 text-sm transition-colors duration-300">
                See More Articles
              </span>
              <Image
                src="https://blast-dew-99513560.figma.site/_assets/v11/2d046d4cbbaf2744e4c1686ddaed1ac7870693d5.svg"
                alt="arrow"
                width={20}
                height={20}
                className="relative z-10 brightness-0 invert-0 transition-all duration-300 group-hover:translate-x-2 group-hover:brightness-100"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
