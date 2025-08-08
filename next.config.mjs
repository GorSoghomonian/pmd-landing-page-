import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  images: {
    domains: ['readdy.ai', 'images.unsplash.com']
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
