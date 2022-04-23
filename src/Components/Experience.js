import React, {useState} from 'react'

export default function Experience() {
  const [exp] = useState(
      [
          {name: 'Linguee Global Solutions', subhead: 'Product Development Intern', desc: 'To develop and manage the creation of a HRMS', id: 1},
      ]
  )
  return (
    <div>
        {
            exp.map((ex) => (
                <div className="main-cont" key={ex.id}>
                    <h2 className='main-head'>{ex.name}</h2>
                    <h2 className='sub-head'>{ex.subhead}</h2>
                    <h4 className="desc">{ex.desc}</h4>
                </div>
            ))
        }
    </div>
  )
}
