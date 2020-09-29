import React from 'react'
// import { View, Text } from 'react-native'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import Routes from './src/navigations/Routes';

function App() {
  return <Routes/>
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0051ff',
    accent: '#f1c40f',
  },
};

export default () => {
  return (
    <PaperProvider theme={theme}>
      <App/>
    </PaperProvider>
  )
}
