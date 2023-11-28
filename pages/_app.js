import App from "next/app";
import "../styles/global.css";
import ThemeProvider from "@/providers/ThemeProvider";

export default function DemoApp({ Component, pageProps, example }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

DemoApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  return { ...ctx, example: "data three" };
};
