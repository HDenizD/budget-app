import Button from "primevue/button";
import Card from "primevue/card";

type PrimeVueComponents = {
  name: string;
  component: any;
}[];

function installPrimeVueComponent(componentName: string, component: any) {
  primeVueComponents.push({
    name: componentName,
    component: component
  });
}

export const primeVueComponents: PrimeVueComponents = [];

installPrimeVueComponent("p-button", Button);
installPrimeVueComponent("p-card", Card);
