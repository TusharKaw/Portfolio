import "./Education.css"

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Deenbandhu Chhotu Ram University of Science & Technology",
      location: "Delhi, India",
      period: "2019 - 2023",
      gpa: "GPA: 7.75",
    },
  ]

  const courses = [
    {
      id: 1,
      title: "Internet & Web Development",
      institution: "Udemy",
      period: "2023",
    },
    {
      id: 2,
      title: "Agile Project Management",
      institution: "Coursera",
      period: "2022",
    },
    {
      id: 3,
      title: "MERN Stack Development",
      institution: "Udemy",
      period: "2022",
    },
    {
      id: 4,
      title: "Scrum Master Certification",
      institution: "Scrum Alliance",
      period: "2023",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="education-container">
          <div className="education-column">
            <h3 className="education-subtitle">Academic Education</h3>
            <div className="education-list">
              {educations.map((edu) => (
                <div key={edu.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{edu.period}</span>
                    <h4 className="education-degree">{edu.degree}</h4>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                  <p className="education-gpa">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <h3 className="education-subtitle">Professional Courses</h3>
            <div className="education-list">
              {courses.map((course) => (
                <div key={course.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{course.period}</span>
                    <h4 className="education-degree">{course.title}</h4>
                  </div>
                  <p className="education-institution">{course.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
