import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { config } from '@vue/test-utils'

config.global.stubs = {
  RouterView: true,
  RouterLink: true,
  Transition: true,
  TransitionGroup: true,
}

declare module '@vue/test-utils' {
  export type DefinedComponent = new (...args: any[]) => any

  interface DataTestIdPlugin {
    findByTestId: <N extends Node = Node>(testId: string) => DOMWrapper<N>
    findAllByTestId: <N extends Node = Node>(testId: string) => DOMWrapper<N>[]
    findComponentByTestId: <C extends DefinedComponent>(testId: string) => VueWrapper<InstanceType<C>>
    findAllComponentsByTestId: <C extends DefinedComponent>(testId: string) => VueWrapper<InstanceType<C>>[]
  }

  interface VueWrapper extends DataTestIdPlugin {}
  interface DOMWrapper extends DataTestIdPlugin {}
}

function DataTestIdPlugin<W extends VueWrapper<unknown> | DOMWrapper<Node>>(
  wrapper: W,
): Pick<W, 'findByTestId' | 'findAllByTestId' | 'findComponentByTestId' | 'findAllComponentsByTestId'> {
  return {
    findByTestId(testId: string) {
      return wrapper.find(`[data-testid='${testId}']`) as DOMWrapper<never>
    },
    findAllByTestId(testId: string) {
      return wrapper.findAll(`[data-testid='${testId}']`) as DOMWrapper<never>[]
    },
    findComponentByTestId(testId) {
      return wrapper.findComponent(`[data-testid='${testId}']`) as VueWrapper<never>
    },
    findAllComponentsByTestId(testId) {
      return wrapper.findAllComponents(`[data-testid='${testId}']`) as VueWrapper<never>[]
    },
  }
}

config.plugins.VueWrapper.install(DataTestIdPlugin)
config.plugins.DOMWrapper.install(DataTestIdPlugin)
