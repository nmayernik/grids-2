module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    fontFamily: {
      'display':['InterDisplay'],
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
             'xs': '.75rem',
             'sm': '14px',
             'md': '16px',
             'base': '18px',
             'lg': '20px',
             'xl': '24px',
             '2xl': '28px',
             '3xl': '36px',
             '4xl': ['40px', '44px'],
             '5xl': '48px',
            },
    fontFamily: {
      'sans': ['Inter',  '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      'display': ['InterDisplay', 'Inter', 'sans-serif']
    }
  }
};
