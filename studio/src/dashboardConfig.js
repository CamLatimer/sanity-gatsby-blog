export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e892ff0241c7d3fe1b7fc28',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ov9mwkr5',
                  apiId: '53dd322c-9e1e-42f0-b1fa-aadfb4253a80'
                },
                {
                  buildHookId: '5e892ff0bb65cde2f4eb47f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qy33d2z6',
                  apiId: 'e505b9fd-7cd4-4fb6-b308-dc161bbe3a4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CamLatimer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qy33d2z6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
