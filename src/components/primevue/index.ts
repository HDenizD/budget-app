import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import TabMenu from 'primevue/tabmenu'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Password from 'primevue/password'

type PrimeVueComponents = {
  name: string
  component: any
}[]

function installPrimeVueComponent(componentName: string, component: any) {
  primeVueComponents.push({
    name: componentName,
    component: component,
  })
}

export const primeVueComponents: PrimeVueComponents = []

installPrimeVueComponent('p-button', Button)
installPrimeVueComponent('p-card', Card)
installPrimeVueComponent('p-menubar', Menubar)
installPrimeVueComponent('p-tab-menu', TabMenu)
installPrimeVueComponent('p-input-text', InputText)
installPrimeVueComponent('p-checkbox', Checkbox)
installPrimeVueComponent('p-password', Password)
