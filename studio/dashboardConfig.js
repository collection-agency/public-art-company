export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '944743e5-c7ce-4839-abd2-703b3557ca93',
            buildHookId: '60a2b3438caf781f92c61766',
            name: 'pac-studio',
            url: 'https://pac-studio.netlify.app',
          },
          {
            title: 'Website',
            apiId: '5dee0765-4783-45f1-8ed8-7420da97b093',
            buildHookId: '60a2b2b9d2c36e1b3daf616a',
            name: 'pac-web',
            url: 'https://pac-web.netlify.app',
          }
        ]
      }
    }
  ]
}
