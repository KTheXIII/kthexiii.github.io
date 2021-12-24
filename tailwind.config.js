module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Map to Tailwind's colors names
        'mblack' : 'var(--black)',
        'mgray' : 'var(--gray)',
        'mred' : 'var(--red)',
        'myellow' : 'var(--yellow)',
        'mgreen' : 'var(--green)',
        'mbluel' : 'var(--blue)',
        'mpurple' : 'var(--purple)',
        'morange' : 'var(--orange)',
      },
      boxShadow: {
        'memo': '0 0 15pt 2pt rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'mono': ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
