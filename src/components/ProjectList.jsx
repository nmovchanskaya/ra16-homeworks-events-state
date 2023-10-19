export const ProjectList = ({projects}) => {

  let projectsElems = projects.map((item) => {
    return <img src={item.img} className="projects__img"/>
  });

  return (
    <div className="projects">
        <figure>
            {projectsElems}
        </figure>
    </div>
  )
}
