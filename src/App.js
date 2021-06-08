import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import Category from './components/category';
import CategoryType from './components/category/CategoryType';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Category type={CategoryType.character}></Category>
      </ThemeProvider>
    </>
  );
}
