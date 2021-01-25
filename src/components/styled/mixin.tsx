import { css } from 'styled-components'
import { breakpoints } from './_variables'

export const resolution = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...args: any[]) =>
    css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(literals, ...args)};
      }
    `.join(' ')

  return acc
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...a: any[]) => string>)
