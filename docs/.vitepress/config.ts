import { defineConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Design Patterns',
  themeConfig: {
    logo: '/book.svg',
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/usebruno/bruno' }
    ],
    editLink: {
      pattern: 'https://github.com/helloanoop/design-patterns/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
  }
});

function sidebar() {
  return [
    {
      text: 'Patterns',
      collapsible: true,
      items: [
        { text: 'Strategy', link: '/design-patterns/strategy' }
      ]
    }
  ];
}
