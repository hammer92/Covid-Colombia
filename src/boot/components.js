import { upperFirst, camelCase } from 'lodash'
// "async" is optional
export default async ({ Vue/* app, router, Vue, ... */ }) => {
  const requireComponent = require.context(
    'components', true, /\.vue$/
  )
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}
