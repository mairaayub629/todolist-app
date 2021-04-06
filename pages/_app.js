import '../styles/globals.css'
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";


class MyApp extends App {


  static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {};
           return { pageProps };
  }


  render() {
      const { Component, pageProps } = this.props;
      const store = initStore();
      return (
          <>
              <Provider store={store}>
                  <Component {...pageProps} />
              </Provider>
          </>
      );
  }
}


export default withRedux(initStore)(MyApp);
