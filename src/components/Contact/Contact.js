import './Contact.css'

export const Contact = () => {
  return `
    <section class="contact" id="contact">
      <h2>Contacto</h2>
      <p>¿Hablamos? Puedes escribirme para colaboraciones, proyectos o cualquier propuesta interesante.</p>

      <ul class="contact-list">
        <li>
          <strong>Email:</strong> 
          <a href="mailto:guillempaniagua@gmail.com">guillempaniagua@gmail.com</a>
        </li>

        <li>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/guillem-paniagua-2ab458358/" target="_blank">
            linkedin.com/in/guillem-paniagua
          </a>
        </li>

        <li>
          <strong>GitHub:</strong> 
          <a href="https://github.com/Guillepani" target="_blank">
            github.com/Guillepani
          </a>
        </li>
      </ul>
    </section>
  `
}
