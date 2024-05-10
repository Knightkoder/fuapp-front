"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../../components/NavBar";
import ServiciosCards from "./components/Servicios";
import useFormStore from "@/store/cotizacionStore";
//import { Tabs } from '@radix-ui/themes'

const queryClient = new QueryClient();

/*queryClient.setDefaultOptions({
  queries: {
    refetchIntervalInBackground: true,
    refetchInterval: 10_000,
    refetchOnWindowFocus: false,
  },
})*/
const appData = () => {
  return {
    percent: 0,

    appInit() {
      // source: https://codepen.io/A_kamel/pen/qBmmGKJ
      window.addEventListener("scroll", () => {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop,
          height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        this.percent = Math.round((winScroll / height) * 100);
      });
    },
  };
};
function DashboardPage() {
  const { stepOne, stepTwo, stepThree, setData } = useFormStore();
  console.log(stepOne);
  console.log(stepTwo);
  console.log(stepThree);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="mt-32 w-full" x-data="appData()" x-init="appInit()">
          <ServiciosCards />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default DashboardPage;
