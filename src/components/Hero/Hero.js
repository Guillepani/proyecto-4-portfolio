import './Hero.css'

export const Hero = () => {
  return `
    <section class="hero" id="hero">
      <div class="hero-content">
        <p class="hero-code">console.log("Construyendo mi futuro en el desarrollo web");</p>

        <h2>
          Desarrollo interfaces modernas y convierto ideas en
          <span>proyectos reales</span>
        </h2>

        <p class="hero-text">
          Actualmente compagino trabajo y formación mientras construyo mi camino como
          desarrollador web, con foco en diseño, funcionalidad y evolución constante.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="hero-btn primary">Ver proyectos</a>
          <a href="#contact" class="hero-btn secondary">Contactar</a>
        </div>
      </div>
    </section>
  `
}
