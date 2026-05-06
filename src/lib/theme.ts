// Design tokens and theme configuration
export const theme = {
  colors: {
    primary: {
      purple: '#A259C6',
      purpleDark: '#7B2FF2',
      purpleLight: '#C084FC',
      navy: '#0F2333',
      offWhite: '#F7FAFC'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #A259C6 0%, #7B2FF2 100%)',
      primaryReverse: 'linear-gradient(135deg, #7B2FF2 0%, #A259C6 100%)',
      glass: 'linear-gradient(135deg, rgba(162, 89, 198, 0.1) 0%, rgba(123, 47, 242, 0.1) 100%)'
    },
    glass: {
      backdrop: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.2)'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem', 
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  shadows: {
    glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(17, 197, 163, 0.3)',
    depth: '0 20px 40px rgba(0, 0, 0, 0.1)'
  },
  typography: {
    
      heading: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700
    }
  }
} as const;

export type Theme = typeof theme;