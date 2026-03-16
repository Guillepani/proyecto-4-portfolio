import './Experience.css'

export const Experience = () => {
  return `
    <section class="experience" id="experience">
      <div class="experience-header">
        <button class="experience-tab active" data-tab="exp">Experiencia</button>
        <button class="experience-tab" data-tab="edu">Formación</button>
      </div>

      <div class="experience-content">
        <div class="experience-panel active" id="exp">
          <p class="experience-intro">
            Mi camino profesional ha sido una evolución constante hasta llegar al punto
            en el que decidí apostar de verdad por la tecnología.
          </p>

          <article class="experience-item">
            <h3>Primeras etapas laborales</h3>
            <p>
              Comencé trabajando como <strong>operario en distintas fábricas</strong>,
              una etapa en la que desarrollé disciplina, responsabilidad y capacidad
              para adaptarme a entornos exigentes.
            </p>
          </article>

          <article class="experience-item">
            <h3>Reinvención profesional</h3>
            <p>
              Con el tiempo sentí la necesidad de <strong>dar un giro a mi trayectoria</strong>.
              La tecnología siempre me había llamado la atención, así que decidí orientar
              mi camino hacia un sector que realmente me motivaba.
            </p>
          </article>

          <article class="experience-item">
            <h3>Etapa de transición</h3>
            <p>
              Para poder compaginar trabajo y estudio, obtuve la
              <strong> TIP de Vigilante de Seguridad</strong>, una decisión estratégica
              que me permitió mantener estabilidad laboral mientras avanzaba en mi formación.
            </p>
          </article>

          <article class="experience-item">
            <h3>Objetivo actual</h3>
            <p>
              Hoy sigo construyendo ese cambio: trabajo, estudio programación y desarrollo
              proyectos con la meta de dedicarme profesionalmente al
              <strong> desarrollo web y de software</strong>.
            </p>
          </article>
        </div>

        <div class="experience-panel" id="edu">
          <p class="experience-intro">
            Mi formación ha pasado por distintas etapas, pero todas han aportado algo a la
            disciplina y mentalidad con la que afronto hoy mi camino en tecnología.
          </p>

          <article class="experience-item">
            <h3>RockTheCode Full Stack Web</h3>
            <p>
              Actualmente cursando el programa <strong>Full Stack Web</strong> de <strong>ThePower Education</strong>,
              enfocado en tecnologías web modernas y creación de proyectos reales.
            </p>
          </article>

          <article class="experience-item">
            <h3>Grado Superior en Actividades Físico-Deportivas</h3>
            <p>
              Una etapa que reforzó hábitos como la constancia, la planificación y la disciplina. Y ya no solo eso, es que no puedo evitar que el deporte me acompañe durante mi día a día.
            </p>
          </article>

          <article class="experience-item">
            <h3>Grado Medio en Actividades Físicas en el Medio Natural</h3>
            <p>
              Formación orientada a la adaptación, la organización y el trabajo en diferentes contextos.
            </p>
          </article>

          <article class="experience-item">
            <h3>FP de Informática</h3>
            <p>
              Mi primer contacto académico con el mundo tecnológico, que con el tiempo ha vuelto
              a convertirse en el eje principal de mi desarrollo profesional.
            </p>
          </article>
        </div>
      </div>
    </section>
  `
}
