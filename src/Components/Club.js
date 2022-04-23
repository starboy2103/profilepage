import React, {useState} from 'react'

export default function Club() {
  const title="Club"
  const [clubs]=useState(
      [
          {name: 'Google Developer Student Club', subhead: 'Web Development Lead', desc: 'A development club for various domains and an enormous amout of knowledge', id: 1}
      ]
  )
  return (
    <div>
        <h2 className="title">{title}</h2>
        {
            clubs.map((club) => (
                <div className="clubs" key={club.id}>
                    <h2 className='main-head'>{club.name}</h2>
                    <h2 className='sub-head'>{club.subhead}</h2>
                    <h4 className="desc">{club.desc}</h4>
                </div>
            ))
        }        
    </div>
  )
}
