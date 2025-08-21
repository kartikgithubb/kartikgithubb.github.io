import type { Config } from "tailwindcss";

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
        'pixel': ['Press Start 2P', 'monospace'],
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
				// Framer premium colors
				gold: {
					50: 'hsl(48, 100%, 96%)',
					100: 'hsl(48, 96%, 89%)',
					200: 'hsl(47, 96%, 80%)',
					300: 'hsl(46, 96%, 70%)',
					400: 'hsl(45, 96%, 68%)',
					500: 'hsl(45, 86%, 58%)',
					600: 'hsl(42, 87%, 55%)',
					700: 'hsl(36, 77%, 49%)',
					800: 'hsl(32, 74%, 41%)',
					900: 'hsl(28, 73%, 31%)'
				},
				silver: {
					50: 'hsl(45, 50%, 95%)',
					100: 'hsl(45, 50%, 85%)',
					200: 'hsl(45, 40%, 75%)',
					300: 'hsl(45, 30%, 65%)',
					400: 'hsl(45, 20%, 55%)',
					500: 'hsl(45, 15%, 45%)',
					600: 'hsl(45, 10%, 35%)',
					700: 'hsl(45, 8%, 25%)',
					800: 'hsl(45, 6%, 18%)',
					900: 'hsl(45, 4%, 12%)'
				},
				surface: {
					elevated: 'hsl(var(--surface-elevated))',
					subtle: 'hsl(var(--surface-subtle))',
					accent: 'hsl(var(--surface-accent))'
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
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-silver': 'var(--gradient-silver)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-elegant': 'var(--gradient-elegant)'
			},
			boxShadow: {
				premium: 'var(--shadow-premium)',
				elegant: 'var(--shadow-elegant)',
				glow: 'var(--shadow-glow)',
				soft: 'var(--shadow-soft)'
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