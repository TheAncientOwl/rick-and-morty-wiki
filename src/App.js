import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import Category from './components/category';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Category reqType='character'></Category>
      </ThemeProvider>
    </>
  );
}
