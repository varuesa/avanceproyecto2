
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Toast from "./components/ui/Toast";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
    <Toast />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}


export default App;
