import React from 'react'
import ContactList from '../../components/ContactList'

const Cv = () => {
  return (
    <main>
        <section className='col_left'>
              {/* BEGIN Component Photo */}
              <div className="photo_wrapper">
                  <img src="" alt="" />
              </div>
               {/* END Component Photo */}
               {/* BEGIN Component Contact */}
                <ContactList />
                {/* END Component Contact */}
        </section>
        <section className='col_right'>
          
          </section>
    </main>
  )
}

export default Cv