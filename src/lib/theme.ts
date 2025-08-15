// Design tokens and theme configuration
export const theme = {
  colors: {
    primary: {
      teal: '#11C5A3',
      cyan: '#0AA0FF', 
      navy: '#0F2333',
      offWhite: '#F7FAFC',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #11C5A3 0%, #0AA0FF 100%)',
      secondary: 'linear-gradient(135deg, #0AA0FF 0%, #11C5A3 100%)',
      glass: 'linear-gradient(135deg, rgba(17, 197, 163, 0.1) 0%, rgba(10, 160, 255, 0.1) 100%)',
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.2)',
      backdrop: 'blur(20px)',
    }
  },
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px  
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
  },
  borderRadius: {
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px  
    xl: '2rem',     // 32px
  },
  typography: {
    fontFamily: {
      heading: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
    }
  },
  shadows: {
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }
} as const;