import ApplicationRouter from "./components/router/Router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <ApplicationRouter />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
