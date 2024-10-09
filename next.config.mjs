import withMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX({
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'dark-plus',
          addLanguageClass: true,
        },
      ],
    ],
  },
})(nextConfig);
