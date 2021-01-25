export interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
}
export const breakpoints: { [index: string]: any } = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
}

export const colors = {
  blue: '#0d6efd',
  'blue-active': '#0a58ca',
  secondary: '#6c757d',
  'grey-light': '#b7c3cd',
  success: '#198754',
  'success-light-75': 'rgba(41,195,118, .75)',
  'success-darker': '#197D4A',
  danger: '#dc3545',
  'danger-lighter': '#ff3547',
  'danger-light-75': 'rgba(220, 53, 69, .75)',
  'danger-darker': '#cd3645',
  warning: '#ffc107',
  'warning-darker': '#f0b307',
  light: '#f8f9fa',
  dark: '#212529',
  'white-fa': '#fafafa',
  'white-50': 'rgba(255, 255, 255, .5)',
  'white-75': 'rgba(255, 255, 255, .75)',
  'black-03': 'rgba(0, 0, 0, 0.03)',
  'black-125': 'rgba(0, 0, 0, .125)',
  'black-25': 'rgba(0, 0, 0, .25)',
  'black-50': 'rgba(0, 0, 0, .5)',
  'black-75': 'rgba(0, 0, 0, .75)',
}

export const gradients = {
  'background-gradient': '#6376E7, #D89BA4, #FBCD90, #ED3F3F',
  'itmeo-gradient': '#2af598, #009efd',
  'green-gradient': '#00E88D, #02A97F',
  'blue-gradient': '#3F8AE1, #615476',
  'yellow-blue-gradient': '#00c3ff, #ffff1c',
  'yellow-gradient': '#fff900 0%, #F7CE68 100%',
  'party-bliss-gradient': '#4481eb 0%, #04befe 100%',
  'caramel-gradient': '#e6b980 0%, #eacda3 100%',
}
