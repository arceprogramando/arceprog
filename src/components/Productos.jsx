import { bill } from "../assets"
import styles, { layout } from "../style"
const Productos = () => {
    return (
        <>
            <div className={`bg-primary ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
                    <section id="product" className={`${layout.sectionReverse} `}>
                        <div className={layout.sectionImgReverse}>
                            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5ss] max-w-sm" />

                            {/* gradient start */}
                            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                            {/* gradient end */}
                        </div>

                        <div className={layout.sectionInfo}>
                            <h2 className={`${styles.heading2} text-gradient`}>
                                Mis servicios de desarrollo web frontend
                            </h2>
                            <p className={`${styles.paragraph} max-w-[550px] mt-5  text-dimGrey`}>
                                Ofrezco servicios de desarrollo web frontend para ayudarte a crear la presencia en línea que tu negocio necesita. Mis precios son personalizables y dependen de las necesidades específicas de tu proyecto. Estoy disponible para discutir detalles y responder cualquier pregunta que puedas tener, así que no dudes en contactarme para obtener un presupuesto personalizado.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Productos