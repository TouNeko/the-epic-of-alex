module.exports = {
  title: 'The Epic of Alexander Memo',
  description: '',
  base: '/the-epic-of-alex/',
  plugins: ['vuepress-plugin-smooth-scroll'],
  head: [
    ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}],
  ],
  themeConfig:{
    search: false,
    sidebar: {
      '/': getSidebar()
    }
  }
}

function getSidebar () {
  return [
    'phase1',
    'limitcut',
    'phase2',
    'phase3',
    'wormhole-formation',
    'phase4'
  ]
}