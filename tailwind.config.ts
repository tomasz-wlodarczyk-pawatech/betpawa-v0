import type {Config} from "tailwindcss";

const config: Config = {
        darkMode: ["class"],
        content: [
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "*.{js,ts,jsx,tsx,mdx}"
        ],
        theme: {
            extend: {
                fontFamily: {
                    sans: ['var(--font-roboto)', 'sans-serif'],
                },

                colors: {
                    green: {
                        50: '#F5FEE4',
                        100: '#ECFCCB',
                        200: '#DDFAA5',
                        300: '#C8F769',
                        400: '#B2F42C',
                        500: '#9CE800',
                        600: '#8DC63F',
                        700: '#76AC08',
                        800: '#5B8506',
                        900: '#3D5904',
                    },
                    lime: {
                        50: '#F5FEE4',
                        100: '#ECFCCB',
                        200: '#DDFAA5',
                        300: '#C8F769',
                        400: '#B2F42C',
                        500: '#9CE800',
                        600: '#8DC63F',
                        700: '#76AC08',
                        800: '#5B8506',
                        900: '#3D5904',
                    },
                    neutral: {
                        50: '#FFFFFF',
                        100: '#F2F3F3',
                        200: '#E4E6E7',
                        300: '#CACDCE',
                        400: '#AAAEB0',
                        500: '#7A8185',
                        600: '#484F52',
                        700: '#2F3437',
                        800: '#252A2D',
                        900: '#171A1C',
                    },
                    orange: {
                        50: '#FFF5E6',
                        100: '#FFE3BF',
                        200: '#FFCD94',
                        300: '#FB8366',
                        400: '#FF9940',
                        500: '#FF7A00',
                        600: '#CC6200',
                        700: '#994900',
                        800: '#813D00',
                        900: '#633000',
                    },
                    purple: {
                        50: '#F3E8FD',
                        100: '#E6D1FB',
                        200: '#CDA3F8',
                        300: '#B576F4',
                        400: '#9C48F1',
                        500: '#831AED',
                        600: '#6915BE',
                        700: '#4F108E',
                        800: '#430B7A',
                        900: '#340A5F',
                    },
                    cyan: {
                        50: '#E9F8FB',
                        100: '#D3F2F8',
                        200: '#A6E6F1',
                        300: '#7AD9EA',
                        400: '#4DCDE3',
                        500: '#22BFDB',
                        600: '#1CA4BA',
                        700: '#158599',
                        800: '#0F6578',
                        900: '#0A4B5A',
                    },
                    yellow: {
                        50: '#FFF9E6',
                        100: '#FFEEC2',
                        200: '#FFE192',
                        300: '#FFD161',
                        400: '#FFC133',
                        500: '#FEAB00',
                        600: '#DB9C08',
                        700: '#B57F05',
                        800: '#8C6103',
                        900: '#684902',
                    },
                    red: {
                        50: '#FFF1EE',
                        100: '#FFDAD4',
                        200: '#FFB7AA',
                        300: '#FF8B76',
                        400: '#F86147',
                        500: '#CC371B',
                        600: '#B02F17',
                        700: '#8E2613',
                        800: '#6B1D0F',
                        900: '#50160B',
                    },
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    chart: {
                        '1': 'hsl(var(--chart-1))',
                        '2': 'hsl(var(--chart-2))',
                        '3': 'hsl(var(--chart-3))',
                        '4': 'hsl(var(--chart-4))',
                        '5': 'hsl(var(--chart-5))'
                    },
                    sidebar: {
                        DEFAULT: 'hsl(var(--sidebar-background))',
                        foreground: 'hsl(var(--sidebar-foreground))',
                        primary: 'hsl(var(--sidebar-primary))',
                        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                        accent: 'hsl(var(--sidebar-accent))',
                        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                        border: 'hsl(var(--sidebar-border))',
                        ring: 'hsl(var(--sidebar-ring))'
                    }
                },
                borderRadius: {
                    lg: 'var(--radius)',
                    md: 'calc(var(--radius) - 2px)',
                    sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                    'accordion-down': {
                        from: {
                            height: '0'
                        },
                        to: {
                            height: 'var(--radix-accordion-content-height)'
                        }
                    },
                    'accordion-up': {
                        from: {
                            height: 'var(--radix-accordion-content-height)'
                        },
                        to: {
                            height: '0'
                        }
                    }
                },
                animation: {
                    'accordion-down': 'accordion-down 0.2s ease-out',
                    'accordion-up': 'accordion-up 0.2s ease-out'
                }
            }
        },
        plugins: [require
        ("tailwindcss-animate")
        ],
    }
;
export default config;
