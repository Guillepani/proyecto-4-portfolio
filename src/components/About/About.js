import './About.css'

export const About = () => {
  return `
    <section class="about" id="about">
      <div class="about-content">

        <div class="about-text">
          <h2>Sobre mí</h2>

          <p>
            Soy Guillem, pero puedes llamarme Guille. Estoy en constante <strong>aprendizaje</strong> y me
            apasiona el <strong>desarrollo web</strong>, ya sea <strong>frontend</strong> o <strong>backend</strong>.
            ¿Lo mejor de esto? Que nunca dejo de aprender y cualquier desafío o reto es una
            oportunidad perfecta para <strong>crecer</strong>.
          </p>

          <p>
            Más abajo encontrarás algunos de los <strong>proyectos</strong> en los que he trabajado,
            y si quieres saber más sobre mí, ¡no dudes en <strong>contactarme</strong>!
          </p>
        </div>

        <div class="about-photo">
          <img src="/guillepani.jpg" alt="Foto de Guillem" />
        </div>

      </div>
    </section>
  `
}
