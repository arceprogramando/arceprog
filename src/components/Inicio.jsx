import { miproyecto } from "../assets";
const Inicio = () => {
  return (
    <>
      <section className="flex container max-w-5xl mx-auto md:flex-row flex-col border-0  rounded-xl ">
        <div className="flex-1 flex justify-center items-startflex-col xl:px-0 sm:px-16 px-6">
          <div className="flex flex-col  lg:flex-row  justify-between items-center w-full">
            <div className="font-poppins font-semibold text-white flex flex-col items-center ">
              <div className="flex flex-row justify-between items-center w-full relative ">
                  <h1 className="text-gradient font-bold text-8xl p-2">Felipe Arce</h1>
                <p className="font-semibold   text-white  w-full p-2 absolute  left-1/2  -bottom-4"></p>
              </div>
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-7 max-w-[530px] -mt-4 text-start">
                "Hago cosas"
                <span className=" block max-w-[550px] mt-4">
                  Aveces hago webs bonitas o scripts para facilitar mi trabajo.
                  Tengo interés en seguir aprendiendo, me gusta trabajar,
                  aprender e interactuar con gente del mundillo IT.
                  Tengo un titulo de FullStack con Stack MERN, 
                  Pero me especialice en el front , me gusta todo ,todo...
                </span>
              </p>
            </div>
            <div className="relative">
              <img
                src={miproyecto}
                alt="Felipe Arce"
                className="relative z-[5] max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
