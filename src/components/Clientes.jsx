
import styles, { layout } from "../style"
import { microgenesis } from "../assets"
const Clientes = () => {
    return (
        <>
            <div className={`bg-primary ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
                    <section className="text-gradient ">
                        <h2 className="text-gradient font-poppins font-semibold ss:text-[68px] text-[52px] text-center">Proyectos</h2>
                        <div className="p-20  w-full md:w-1/2">
                            <h3 className="text-purple-300 font-bold mb-4">Microgenesis</h3>
                            <div className="rounded-lg shadow-lg  ">
                                <img src={microgenesis} alt="" className="rounded-t-lg" />
                                <div className="p-6 relative-[5]">
                                    <h2 className="font-bold mb-2 text-2xl text-purple-800 ">Primer Proyecto Real Colaborado
                                    </h2>
                                    <p className="text-purple-700 mb-2">Este es un pequeño trabajo HTML-CSS , Primer proyecto freelance de practica</p>
                                    <a href="https://microgenesis.net/" className="text-purple-600 hover:text-purple-500 underline text-sm" target="blank" rel="noopener">Mira mas 👉</a>

                                    {/* gradient start */}
                                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />

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

export default Clientes