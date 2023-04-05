import styles from "../style"
import { miproyecto } from "../assets"
import GetStarted from "./GetStarted"
const Inicio = () => {
    return (
        <>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>

                    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                            <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                                <p className={`${styles.paragraph} ml-2`}>
                                    <span className="text-white">6</span> Meses Trabajando en mejorar{" "}
                                </p>
                            </div>

                            <div className="flex flex-col  lg:flex-row  justify-between items-center w-full">
                                <div className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                                    <div className="flex flex-row justify-between items-center w-full">

                                        <h1>Consegui tu <br className="sm:block hidden" />{" "}<span className="text-gradient">Pagina Web</span>{" "}
                                        </h1>
                                        <a href="https://web.whatsapp.com/" className="ss:flex hidden md:mr-4 mr-0" target="blank" rel="noopener noreferrer">
                                            <GetStarted />
                                        </a>
                                    </div>

                                    <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">Rapido  y  a precio accesible</h2>
                                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                        Me considero una persona proactiva y entusiasta, con un gran interés en mejorar el entorno web y trabajar en empresas, así como en pequeños proyectos que busquen expandirse.
                                    </p>
                                </div>
                                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                                    <img src={miproyecto} alt="Felipe Arce" className="w-[100%] h-[100%] relative z-[5]" />

                                    {/* gradient start */}
                                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                                    {/* gradient end */}
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Inicio