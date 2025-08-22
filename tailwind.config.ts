import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Space Grotesk", ...fontFamily.sans],
        pixel: ['Press Start 2P', 'monospace'],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Monochrome colors only
				monochrome: {
					black: 'hsl(0, 0%, 0%)',
					white: 'hsl(0, 0%, 100%)',
					gray: {
						50: 'hsl(0, 0%, 95%)',
						100: 'hsl(0, 0%, 90%)',
						200: 'hsl(0, 0%, 80%)',
						300: 'hsl(0, 0%, 70%)',
						400: 'hsl(0, 0%, 60%)',
						500: 'hsl(0, 0%, 50%)',
						600: 'hsl(0, 0%, 40%)',
						700: 'hsl(0, 0%, 30%)',
						800: 'hsl(0, 0%, 20%)',
						900: 'hsl(0, 0%, 10%)',
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				mono: [
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace'
				]
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(0, 0%, 0%), hsl(0, 0%, 30%))',
				'gradient-subtle': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 0%, 95%))',
			},
			boxShadow: {
				'monochrome': '0 4px 12px hsl(0, 0%, 0%, 0.15)',
				'monochrome-lg': '0 10px 25px hsl(0, 0%, 0%, 0.2)',
			},
			backdropBlur: {
				premium: 'var(--backdrop-blur)'
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-4px)'
					}
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'wave': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1)' 
					},
					'25%': { 
						transform: 'translateY(-5px) rotate(1deg) scale(1.02)' 
					},
					'50%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1.05)' 
					},
					'75%': { 
						transform: 'translateY(-3px) rotate(-1deg) scale(1.02)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: 'var(--shadow-glow)' 
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(var(--primary) / 0.6)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'marquee': 'marquee 30s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'wave': 'wave 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'elegant': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'quick': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;