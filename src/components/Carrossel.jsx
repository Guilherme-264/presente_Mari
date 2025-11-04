import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Carrossel.css'
import { useEffect } from 'react'

export default function Carrossel(visivel) {


    useEffect(() => {
      const carrossel = document.getElementById('carrossel')
      if (carrossel && window.bootstrap) {
        const bsCarousel = new window.bootstrap.Carousel(carrossel)
        bsCarousel.cycle()
      }
    }, [])
  

  return (
    <div
      id="carrossel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >


      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carrossel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carrossel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carrossel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <img
            src="/img/img6nova.png"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/img/img4.jpeg"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/img/img5.jpeg"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
      

      {/* Botões de navegação */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carrossel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carrossel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>

    </div>  
  )
}
