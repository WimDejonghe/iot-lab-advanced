import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  lang: 'en-US',
  title: 'VIVES IoT Lab Advanced',
  description: 'Cursus voor Graduaat studenten Internet Of Things VIVES Kortrijk',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?familiy=Material+Icons' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', async: true }]
  ],
  //extendsMarkdown: md => { md.use(require('markdown-it-mathjax3')); },

  theme: defaultTheme({
    logo: 'https://www.vives.be/sites/default/files/uploads/huisstijl/Logo VIVES Hogeschool - Smile.png',
    navbar: [

      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Report Issue', link: 'https://github.com/WimDejonghe/iot-lab-advanced/issues' },
      { text: 'Organization', link: 'https://github.com/WimDejonghe/iot-lab-advanced' }
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/about-this-course/README.md',
      },
      {
        text: 'Zeven segment display',
        children: [
          '/a-zevensegment/01-display/README.md',
          '/a-zevensegment/02-schema/README.md',
          '/a-zevensegment/03-flowchart/README.md',
          '/a-zevensegment/04-programma/README.md',
        ]
      },
      {
        text: 'Methoden',
        children: [
          '/b-methoden/01-methode_zonder/README.md',
          '/b-methoden/02-methode_met/README.md',
          '/b-methoden/03-methode_return/README.md',
          
        ]
      },
      {
        text: 'BCD naar 7segment converter',
        children: [
          '/c-driver/01-4511/README.md',  
          '/c-driver/02-schema/README.md', 
          '/c-driver/03-werking/README.md',  
          '/c-driver/04-flowchart/README.md', 
          '/c-driver/05-programma/README.md',               
        ]
      },
      {
        text: 'Parallelle communicatie',
        children: [
          '/d-parallel/01-pvs/README.md',  
          '/d-parallel/02-lcd/README.md', 
                       
        ]
      },
     
    ],
    sidebarDepth: 1,
    repo: 'WimDejonghe/iot-lab-advanced',
    docsDir: 'docs',
    docsBranch: 'main'
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    
  ],
}