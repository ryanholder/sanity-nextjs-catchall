export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60c9eb0ecf4867bf0a03267a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-catchall-studio',
                  apiId: 'b0e2b46e-2266-4db5-8924-0ebf14fe29f2'
                },
                {
                  buildHookId: '60c9eb0eb2f554b275fa1a36',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-catchall',
                  apiId: '9f3f2f91-9e70-44ad-8f11-118a84f2bf5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanholder/sanity-nextjs-catchall',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-catchall.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
