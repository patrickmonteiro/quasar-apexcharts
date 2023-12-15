import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

export default function useDriver () {
  const driverObj = driver({
    showButtons: ['next', 'previous'],
    nextBtnText: 'Próximo',
    prevBtnText: 'Anterior',
    doneBtnText: 'Concluir',
    overlayColor: '#051124',
    showProgress: true,
    steps: [
      {
        // element: '#tour-example',
        popover: {
          title: 'Bem vindo ao Quasar Apexcharts Examples',
          description: 'Aqui você encontra vários exemplos de implementação do Apexcharts com Vue.js 3 e Quasar Framework.'
        }
      },
      {
        element: '#qa-navbar',
        popover: {
          title: 'Tipos de gráfico',
          description: 'Neste menu você encontra diversos tipos de gráficos.'
        }
      },
      {
        element: '#qa-lang',
        popover: {
          title: 'Mude o idioma',
          description: 'Você pode escolher entre português e inglês.'
        }
      },
      {
        popover: {
          title: 'Deixe uma estrela em nosso github 🌟',
          description: 'Não esqueça de deixar uma estrelinha no <a target="_blank" href="https://github.com/patrickmonteiro/quasar-apexcharts">Github</a> e compartilhar com seus amigos e redes sociais!'
        }
      }
    ]
  })

  const initDriver = () => {
    driverObj.drive()
  }

  return {
    initDriver
  }
}
