import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    appBarTabForeground: '#ffffff',
    mainBackground: '#e1e3e8',
    repositoryItemBackground: '#ffffff',
    textInputBackground: '#ffffff',
    textInputBorderAccent: '#c0c0c0',
    textInputError: '#d73a4a',
    textInputAccent: '#c3c3c3',
    textAccentDark: '#565656',
    negativeBackground: '#d6394c'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      Default: "System"
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borderRadius: 4
};

export default theme;