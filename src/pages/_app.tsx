import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { ScrollProvider } from "@/hooks/useLenis";
import Meta from "@/components/meta/meta";
import theme from "@/theme/theme";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const isTouchableDevice = useIsTouchDevice();

  const LoadingBarRef: any = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!isTouchableDevice) console.log("Show CUstom Cursor");
  }, [isTouchableDevice]);

  useEffect(() => {
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouteComplete = () => {
    if (LoadingBar !== null) {
      setTimeout(function () {
        LoadingBarRef.current.complete();
      }, 300);
    }
  };

  const handleRouteStart = () => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme}>
      <Meta
        title={"Lucia Serrano | Photo Portfolio"}
        description="Lucia Serrano Photo Portfolio"
      />
      {!isTouchableDevice ? null : null}
      <LoadingBar ref={LoadingBarRef} height={2} color="#ff98a2" />
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </ChakraProvider>
  );
}
