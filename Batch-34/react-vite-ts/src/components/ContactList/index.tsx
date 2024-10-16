import React from 'react'

const SingleContact = ({name, desc}: {name: string, desc: string})=> {
    return (
        <li>
            <strong className='label'>{name}</strong>
            <p className="desc">{desc}</p>
        </li>
    )
}

function ContactList() {
  return (
    <div className="contact_wrapper">
        <h2>Contact</h2>
        <ul>
        <SingleContact name='Phone' desc="0988777666" />
        <li>
            <strong className='label'>Phone</strong>
            <p className="desc">0988777666</p>
        </li>
        <li>
            <strong className='label'>Phone</strong>
            <p className="desc">0988777666</p>
        </li>
        </ul>
    </div>
  )
}

export default ContactList