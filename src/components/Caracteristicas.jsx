import React from 'react'
import { caracteristicas } from '../constants'
import styles, { layout } from '../style'
import CaracteristicaCard from './CaracteristicaCard'
import Button from './Button'
const Caracteristicas = () => {
    return (
        <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} h-full`}>
                <div className={`${styles.boxWidth}`}>

                    <section id="caracteristicas" className={layout.section}>
                        <div className={layout.sectionInfo}>
                            <h2 className={`${styles.heading2} text-gradient`} >
                                Déjame ayudarte a crear una presencia en línea efectiva.
                            </h2>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimGrey`}>
                                Como desarrollador web frontend, puedo ayudarte a crear un sitio web moderno y atractivo que represente de manera efectiva tu negocio o proyecto en línea. Juntos podemos trabajar en mejorar la experiencia del usuario, aumentar el tráfico de tu sitio y, en última instancia, impulsar el crecimiento de tu negocio.
                            </p>
                            <Button styles={`mt-10`} />
                        </div>

                        <div className={`${layout.sectionImg} flex-col relative z-[5]`}>
                            {caracteristicas.map((caracteristica, index) => (
                                <CaracteristicaCard key={caracteristica.id} {...caracteristica} index={index} />
                            ))}
                            {/* gradient start */}
                            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Caracteristicas