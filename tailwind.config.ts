import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        xl: '-3px 3px 3px 0 rgba(200, 200, 200 , 0.76)',
        lg: '-3px 0px 5px 0 rgba(200, 200, 200 , 0.76)',
        bt: '0px 15px 15px -3px rgba(66, 66, 66, 0.75)',
      },
    },
  },
  plugins: [],
} satisfies Config;
