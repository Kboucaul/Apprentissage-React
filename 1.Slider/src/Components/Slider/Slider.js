import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {
    const [slideAnim, setSlideAnim] = useState({
            index: 0,
            inProgress: false
    })

    const slide = (direction) => {
      // On autorise le changement d'image seulement si la transition est terminée (cela empeche le spam click)
      if (slideAnim.inProgress === false) {
        // Calcul du nouvel index
        let index = slideAnim.index;
        index += direction;
        index = (index === dataSlider.length) ? 0 : (index + dataSlider.length) % dataSlider.length;
        setSlideAnim({index: index, inProgress: true})
      // On évite le spam click avec un setTimeOut qui permet d'attendre la fin de la transition
        setTimeout(() => {
        setSlideAnim({index: index, inProgress: false});
      }, 400);
      }
    }

    // Au click, cela nous permet de nous rendre sur la bonne image
    const moveDot = (index) => {
      if (index >= 0 || index < dataSlider.length) {
        setTimeout(() => {
          setSlideAnim({index: index, inProgress: false});
        }, 400);
      }
    }

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
            <div
            key={obj.id}
            className={slideAnim.index === index ? "slide active-anim" : "slide"}
            >
                <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" /> 
            </div>
        )
      })}
      <BtnSlider moveSlide={slide} direction={"next"} slideDirection={1}/>
      <BtnSlider moveSlide={slide} direction={"prev"} slideDirection={-1}/>

       { /* Affichage des points */ }
      <div className="container-dots">
        { /* Création d'un tableau à la volée du nombre d'éléments dans le dataSlider */ }
        {Array.from({length: dataSlider.length}).map((item, index) => {
          {/* On retourne la div avec la classe correspondante en fonction de l'index */}
          return <button 
          type="button"
          key={index}
          className={slideAnim.index === index ? "dot active": "dot" }
          onClick={() => moveDot(index)}
          ></button>
        })}
      </div>
    </div>
  )
}