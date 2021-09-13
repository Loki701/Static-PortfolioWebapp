import './Skills.css'

export default function Skills() {

    const skillsArray = [
        {'title': 'HTML & CSS', 'percent': '80%'},,
        {'title': 'JavaScript', 'percent': '70%'},
        {'title': 'Python', 'percent': '65%'},
        {'title': 'C++', 'percent': '65%'},
        {'title': 'React', 'percent': '50%'},
        {'title': 'MongoDB', 'percent': '50%'},
        {'title': 'FastAPI', 'percent': '50%'},
    ]

    const listSkills = skillsArray.map((skill) =>{
        return <div className ="skills-row">
            <h1 className="skills-bar-title">{skill.title}</h1>
            <div className="skills-progress-bar">
            <div className = "skills-progress" style={{height: '1rem',width: `${skill.percent}`}}/>
            <p style={{fontSize: '1.2rem'}}>{skill.percent}</p>
            </div>
        </div>
    })
  return (
    <>
      <a name="Skills" />
      <div className="skills">
        <div className="skills-container">
            <div className='skills-title'>
                <h1> MY KNOWLEDGE LEVEL IN SOFTWARE</h1>
            </div>

            <div className="skills-table">
                {listSkills}
            </div>
        </div>
      </div>
    </>
  );
}
