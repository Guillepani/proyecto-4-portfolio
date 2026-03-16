import './Skills.css'

export const Skills = () => {
  return `
    <section class="skills" id="skills">
      <h2>Skills</h2>

      <ul class="skills-list">

        <li class="skill-card html">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML">
          <span>HTML</span>
        </li>

        <li class="skill-card css">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS">
          <span>CSS</span>
        </li>

        <li class="skill-card js">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">
          <span>JavaScript</span>
        </li>

        <li class="skill-card git">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
          <span>Git</span>
        </li>

        <li class="skill-card react">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
          <span>React</span>
        </li>

        <li class="skill-card node">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js">
          <span>Node.js</span>
        </li>

      </ul>
    </section>
  `
}
