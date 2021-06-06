import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import { Container } from './components/ContentElements';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
