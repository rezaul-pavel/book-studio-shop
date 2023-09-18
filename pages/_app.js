import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <div className="container d-flex flex-column full-height w-100 p-0">
        <Header />
        <div className="flex-grow-1 pt-2 pb-2">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
