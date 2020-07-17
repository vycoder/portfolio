// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Joseph Harvey Angeles | Personal Portfolio',
  siteDescription: 'Joseph Harvey Angeles\' website. Software Engineer, Software Developer, Web Developer, Full-stack engineer. Clean Code advocate. DevOps. He likes cats.',
  siteUrl: 'https://www.josephharveyangeles.com',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './projects', // Where .md files are located
        pathPrefix: '/projects', // Add route prefix. Optional
        template: './src/templates/Project.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Joseph Harvey Angeles | Blog',
          feed_url: 'https://www.josephharveyangeles.com/rss.xml',
          site_url: 'https://www.josephharveyangeles.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://www.josephharveyangeles.com' + node.path,
          author: 'Joseph Harvey Angeles',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
