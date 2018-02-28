import Typography from 'typography';

const fontFamily = ['Raleway', 'sans-serif'];

const typography = new Typography({
  baseFontSize: '24px',
  bodyFontFamily: fontFamily,
  headerFontFamily: fontFamily,
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '700']
    }
  ]
});

export default typography;
