/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
    content: [
        './index.html',
        './index-mini.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/@solidtime/ui/**/*.{vue,js,ts,jsx,tsx}',
    ],
    /* This is a hardcopy from the main repo */
    theme: {
        extend: {
            boxShadow: {
                card: '0 4px 7px 0px rgb(0 0 0 / 30%)',
                dropdown: '0 4px 7px 0px rgb(0 0 0 / 40%)',
            },
            containers: {
                '2xs': '16rem',
            },
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                tertiary: 'var(--color-bg-tertiary)',
                quaternary: 'var(--color-bg-quaternary)',
                background: 'var(--color-bg-background)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',
                'text-quaternary': 'var(--color-text-quaternary)',
                'border-primary': 'var(--color-border-primary)',
                'border-secondary': 'var(--color-border-secondary)',
                'border-tertiary': 'var(--color-border-tertiary)',
                'default-background': 'var(--theme-color-default-background)',
                'default-background-separator': 'var(--theme-color-default-background-separator)',
                'card-background': 'var(--theme-color-card-background)',
                'card-background-active': 'var(--theme-color-card-background-active)',
                'card-background-separator': 'var(--theme-color-card-background-separator)',
                'card-border': 'var(--theme-color-card-border)',
                'card-border-active': 'var(--theme-color-card-border-active)',
                muted: 'var(--theme-color-muted-text)',
                'icon-default': 'var(--theme-color-icon-default)',
                'tab-background': 'var(--theme-color-tab-background)',
                'tab-background-active': 'var(--theme-color-tab-background-active)',
                'tab-border': 'var(--theme-color-tab-border)',
                'icon-active': 'var(--theme-color-icon-active)',
                'menu-active': 'var(--theme-color-menu-active)',
                'input-border': 'var(--theme-color-input-border)',
                'input-border-active': 'var(--color-input-border-active)',
                'input-background': 'var(--theme-color-input-background)',
                'button-secondary-background': 'var(--theme-color-card-background)',
                'button-secondary-background-hover': 'var(--theme-color-card-background-active)',
                'button-secondary-border': 'var(--theme-color-card-border)',
                'row-separator': 'var(--theme-color-row-separator-background)',
                'row-heading-background': 'var(--theme-color-row-heading-background)',
                'row-heading-border': 'var(--theme-color-row-heading-border)',
                accent: {
                    200: 'rgba(var(--color-accent-quaternary), <alpha-value>)',
                    300: 'rgba(var(--color-accent-tertiary), <alpha-value>)',
                    400: 'rgba(var(--color-accent-secondary), <alpha-value>)',
                    500: 'rgba(var(--color-accent-primary), <alpha-value>)',
                },
            },
        },
    },
    plugins: [forms, typography, require('@tailwindcss/container-queries')],
}
