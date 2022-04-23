import React, { useState } from 'react'

export default function Projects() {
    const title="Projects";
    const [proj] = useState(
        [
            {name: 'MerchWeb', subhead: 'Web Dev', desc: 'It is a simple dyanamic web store for all items', id: 1},
            {name: 'My Study Table', subhead: 'Web Dev', desc: 'It is a student study planner and academic partner', id: 2},
            {name: 'VaxIndiaTech', subhead: 'Web Dev', desc: 'An award winning project in EY-Techathon by GDSC VIT in MIT, Massachusetts', id:31},
            {name: 'Procheck', subhead: 'IOT', desc: 'A pantented project on RFID-based product authentication', id: 4},
            {name: 'FedChain', subhead: 'ML', desc: 'A blockchain-based Federated learning project in which ML models will be trained as a service', id: 5},
            {name: 'HRMS', subhead: 'SD', desc: 'An AI based Human Resource Management System{Medium-scale project)', id: 6}
        ]
    );
    return (
    <div>
        <h1 className="title">{title}</h1>
        {
            proj.map((pro) => (
                <div className="main-cont" key={pro.id}>
                    <h2 className="main-head">{ pro.name }</h2>
                    <h4 className="subhead">{ pro.subhead }</h4>
                    <h5 className="desc">{ pro.desc }</h5>
                </div>
            ))
        }
    </div>
  )
}
