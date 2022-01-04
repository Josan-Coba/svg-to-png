const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const COLOR_PRIMARY = '#FF92DA'
const COLOR_SECONDARY = '#4A0734'
const COLOR_SURFACE = '#FFFAFE'

module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function sentenceCase({ addUtilities }) {
      addUtilities({
        '.sentence-case': {
          textTransform: 'lowercase',
        },
        '.sentence-case::first-letter': {
          textTransform: 'uppercase',
        },
      })
    }),
    plugin(elevationShadowPlugin),
  ],
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: COLOR_PRIMARY,
        },
        secondary: {
          DEFAULT: COLOR_SECONDARY,
        },
        surface: {
          DEFAULT: COLOR_SURFACE,
        },
      },
      fontFamily: {
        display: [
          '"Montserrat Alternates"',
          ...defaultTheme.fontFamily.sans,
          '"Noto Sans Symbols 2"',
        ],
        mono: [
          '"Fira Mono"',
          ...defaultTheme.fontFamily.mono,
          '"Noto Sans Symbols 2"',
        ],
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
          '"Noto Sans Symbols 2"',
        ],
      },
      fontSize: {
        tiny: ['0.625rem', '1rem'],
      },
      gridTemplateColumns: Object.fromEntries(
        Object.entries(defaultTheme.spacing).map(([key, spacing]) => [
          `cards-${key}`,
          `repeat(auto-fill, minmax(${spacing}, 1fr))`,
        ]),
      ),
      maxHeight: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
      },
      maxWidth: {
        '10v': '10vw',
        '20v': '20vw',
        '30v': '30vw',
        '40v': '40vw',
        '50v': '50vw',
        '60v': '60vw',
        '70v': '70vw',
        '80v': '80vw',
        '90v': '90vw',
      },
      outline: {
        primary: [`2px solid ${COLOR_PRIMARY}`, '1px'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
      borderColor: ['active'],
      borderOpacity: ['active'],
      borderStyle: ['active', 'focus', 'hover'],
      borderWidth: ['active', 'focus', 'hover'],
      boxShadow: ['active'],
      cursor: ['disabled'],
      opacity: ['disabled'],
      padding: ['active', 'focus'],
      ringWidth: ['active', 'hover'],
    },
  },
}

function elevationShadowPlugin({ addBase }) {
  const elevationValues = [
    {
      ambient: '0px 0px 0px 0px',
      elevation: 0,
      penumbra: '0px 0px 0px 0px',
      umbra: '0px 0px 0px 0px',
    },
    {
      ambient: '0px 1px 3px 0px',
      elevation: 1,
      penumbra: '0px 1px 1px 0px',
      umbra: '0px 2px 1px -1px',
    },
    {
      ambient: '0px 1px 5px 0px',
      elevation: 2,
      penumbra: '0px 2px 2px 0px',
      umbra: '0px 3px 1px -2px',
    },
    {
      ambient: '0px 1px 8px 0px',
      elevation: 3,
      penumbra: '0px 3px 4px 0px',
      umbra: '0px 3px 3px -2px',
    },
    {
      ambient: '0px 1px 10px 0px',
      elevation: 4,
      penumbra: '0px 4px 5px 0px',
      umbra: '0px 2px 4px -1px',
    },
    {
      ambient: '0px 1px 14px 0px',
      elevation: 5,
      penumbra: '0px 5px 8px 0px',
      umbra: '0px 3px 5px -1px',
    },
    {
      ambient: '0px 1px 18px 0px',
      elevation: 6,
      penumbra: '0px 6px 10px 0px',
      umbra: '0px 3px 5px -1px',
    },
    {
      ambient: '0px 2px 16px 1px',
      elevation: 7,
      penumbra: '0px 7px 10px 1px',
      umbra: '0px 4px 5px -2px',
    },
    {
      ambient: '0px 3px 14px 2px',
      elevation: 8,
      penumbra: '0px 8px 10px 1px',
      umbra: '0px 5px 5px -3px',
    },
    {
      ambient: '0px 3px 16px 2px',
      elevation: 9,
      penumbra: '0px 9px 12px 1px',
      umbra: '0px 5px 6px -3px',
    },
    {
      ambient: '0px 4px 18px 3px',
      elevation: 10,
      penumbra: '0px 10px 14px 1px',
      umbra: '0px 6px 6px -3px',
    },
    {
      ambient: '0px 4px 20px 3px',
      elevation: 11,
      penumbra: '0px 11px 15px 1px',
      umbra: '0px 6px 7px -4px',
    },
    {
      ambient: '0px 5px 22px 4px',
      elevation: 12,
      penumbra: '0px 12px 17px 2px',
      umbra: '0px 7px 8px -4px',
    },
    {
      ambient: '0px 5px 24px 4px',
      elevation: 13,
      penumbra: '0px 13px 19px 2px',
      umbra: '0px 7px 8px -4px',
    },
    {
      ambient: '0px 5px 26px 4px',
      elevation: 14,
      penumbra: '0px 14px 21px 2px',
      umbra: '0px 7px 9px -4px',
    },
    {
      ambient: '0px 6px 28px 5px',
      elevation: 15,
      penumbra: '0px 15px 22px 2px',
      umbra: '0px 8px 9px -5px',
    },
    {
      ambient: '0px 6px 30px 5px',
      elevation: 16,
      penumbra: '0px 16px 24px 2px',
      umbra: '0px 8px 10px -5px',
    },
    {
      ambient: '0px 6px 32px 5px',
      elevation: 17,
      penumbra: '0px 17px 26px 2px',
      umbra: '0px 8px 11px -5px',
    },
    {
      ambient: '0px 7px 34px 6px',
      elevation: 18,
      penumbra: '0px 18px 28px 2px',
      umbra: '0px 9px 11px -5px',
    },
    {
      ambient: '0px 7px 36px 6px',
      elevation: 19,
      penumbra: '0px 19px 29px 2px',
      umbra: '0px 9px 12px -6px',
    },
    {
      ambient: '0px 8px 38px 7px',
      elevation: 20,
      penumbra: '0px 20px 31px 3px',
      umbra: '0px 10px 13px -6px',
    },
    {
      ambient: '0px 8px 40px 7px',
      elevation: 21,
      penumbra: '0px 21px 33px 3px',
      umbra: '0px 10px 13px -6px',
    },
    {
      ambient: '0px 8px 42px 7px',
      elevation: 22,
      penumbra: '0px 22px 35px 3px',
      umbra: '0px 10px 14px -6px',
    },
    {
      ambient: '0px 9px 44px 8px',
      elevation: 23,
      penumbra: '0px 23px 36px 3px',
      umbra: '0px 11px 14px -7px',
    },
    {
      ambient: '0px 9px 46px 8px',
      elevation: 24,
      penumbra: '0px 24px 38px 3px',
      umbra: '0px 11px 15px -7px',
    },
  ]

  const elevationOpacities = {
    ambient: 0.12,
    penumbra: 0.14,
    umbra: 0.2,
  }

  const shadowColor = [0, 0, 0]

  const elevationStyles = {}
  elevationValues.forEach(({ ambient, elevation, penumbra, umbra }) => {
    elevationStyles[`.elevation-dp${elevation}`] = {
      boxShadow: `${umbra} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.umbra
      }), ${penumbra} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.penumbra
      }), ${ambient} rgba(${shadowColor.join(',')}, ${
        elevationOpacities.ambient
      })`,
    }
  }, {})

  addBase(elevationStyles)
}
