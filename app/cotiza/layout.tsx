import clsx from "clsx";
// Components
import Provider from "@/components/Provider";
import Sidebar from "@/components/Sidebar";
// Styles

import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
    <Navbar />
    <div className="bg-magnolia font-ubuntu h-full flex flex-col justify-start lg:justify-center items-center ">
      

      <main className="font-normal relative w-full max-w-lg lg:max-w-[940px] mt-12">
        <div className="lg:bg-white w-full flex flex-col lg:flex-row px-4 lg:p-4 rounded-2xl lg:shadow-lg">
          <Sidebar />
          <Provider>{children}</Provider>
        </div>

        <footer
          className={clsx(
            "absolute -bottom-16 lg:-bottom-12",
            "py-4 px-4",
            "text-xs lg:text-sm text-cool-gray",
            "flex flex-col gap-x-1 lg:flex-row justify-center w-full items-center"
          )}
        >
          <span>
            Coded by{" "}
            <a
              href="https://www.funerariapp.cl"
              target="_blank"
              className="text-marine-blue"
            >
              Funerariapp 2024
            </a>
            .
          </span>
        </footer>
      </main>
    </div>
    </>);
}
