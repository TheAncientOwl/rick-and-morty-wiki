import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import Category from './components/category';
import CategoryType from './components/category/CategoryType';
import { useState } from 'react';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(CategoryType.character);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar onCategoryChange={setCurrentCategory} />
        <Category type={currentCategory} />
      </ThemeProvider>
    </>
  );
}
