import './Projects.css'
import { projects } from '../../data/projectsData.js'

export const Projects = () => {
  const section = document.createElement('section')
  section.className = 'projects'
  section.id = 'projects'

  const container = document.createElement('div')
  container.className = 'projects__container'

  const heading = document.createElement('div')
  heading.className = 'projects__heading'

  const tag = document.createElement('span')
  tag.className = 'projects__tag'
  tag.textContent = 'Portfolio'

  const title = document.createElement('h2')
  title.textContent = 'Proyectos'

  const description = document.createElement('p')
  description.textContent =
    'Estos son algunos de los proyectos en los que he trabajado durante mi formación, combinando diseño, lógica, maquetación responsive y consumo de APIs.'

  heading.append(tag, title, description)

  const scrollZone = document.createElement('div')
  scrollZone.className = 'projects-scroll-zone'

  const track = document.createElement('div')
  track.className = 'projects-track'

  for (const project of projects) {
    const article = document.createElement('article')
    article.className = 'project-card'

    const imageWrapper = document.createElement('div')
    imageWrapper.className = 'project-card__image-wrapper'

    const mainImage = document.createElement('img')
    mainImage.src = project.image
    mainImage.alt = `Captura del proyecto ${project.title}`
    mainImage.className = 'project-card__image project-card__image--main'

    imageWrapper.appendChild(mainImage)

    if (project.hoverImage) {
      const hoverImage = document.createElement('img')
      hoverImage.src = project.hoverImage
      hoverImage.alt = `Segunda captura del proyecto ${project.title}`
      hoverImage.className = 'project-card__image project-card__image--hover'
      imageWrapper.appendChild(hoverImage)
    }

    const content = document.createElement('div')
    content.className = 'project-card__content'

    const projectTitle = document.createElement('h3')
    projectTitle.textContent = project.title

    const projectDescription = document.createElement('p')
    projectDescription.textContent = project.description

    const buttons = document.createElement('div')
    buttons.className = 'project-card__buttons'

    if (project.demo) {
      const demoLink = document.createElement('a')
      demoLink.href = project.demo
      demoLink.target = '_blank'
      demoLink.rel = 'noopener noreferrer'
      demoLink.textContent = 'Probar demo'
      buttons.appendChild(demoLink)
    }

    const githubLink = document.createElement('a')
    githubLink.href = project.github
    githubLink.target = '_blank'
    githubLink.rel = 'noopener noreferrer'
    githubLink.textContent = 'Ver en GitHub'
    buttons.appendChild(githubLink)

    content.append(projectTitle, projectDescription, buttons)
    article.append(imageWrapper, content)
    track.appendChild(article)
  }

  scrollZone.appendChild(track)
  container.append(heading, scrollZone)
  section.appendChild(container)

  return section
}
