import Navbar from "@/components/NavBar";

function NosotrosPage() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <main className="justify-center items-center h-screen w-screen bg-red-500 bg-cover bg-center  bg-home-bg bg-gradient-to-r-[#5c4d42cc]">
          <div
            data-vc-full-width="true"
            data-vc-full-width-init="true"
            className="vc_row wpb_row vc_row-fluid vc_custom_1662135263527 vc_row-has-fill relative has-canvas"
            
          >
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper"></div>
              </div>
            </div>
          </div>
          <div className="hitems-center h-screen w-screen ">
            <div className="container mx-auto sm:px-4 px-4 lg:px-12 h-full ">
              <div className="flex flex-wrap w-full h-full items-center justify-center text-center bg-[#5c4d42cc]">
                <div className="lg:w-2/3 pr-4 pl-4 self-end">
                  <h1 className="text-white font-bold text-5xl ">
                    ¿Tienes una emergencia?
                  </h1>
                </div>
                <div className="lg:w-2/3 pr-4 pl-4 self-baseline ">
                  <p className="text-white-75 mb-5 text-2xl text-white">
                    Te contactamos de inmediato
                  </p>
                  <a
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 btn-xl"
                    href="#app"
                  >
                    Coversemos
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </>
  );
}

export default NosotrosPage;
