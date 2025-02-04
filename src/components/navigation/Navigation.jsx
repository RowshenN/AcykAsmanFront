import React from 'react'

import logo from '../../images/logo.svg'
import globe from '../../images/globe.svg'

const Navigation = () => {
  return (
    <div className='w-full '>
      <div>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <p>Baş sahypa</p>
            <p>Hyzmatlar</p>
            <p>Biz barada</p>
            <p>Müşderiler</p>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-center gap-2'>
            <img src={globe} alt="globe" />
            <p>EN</p>
          </div>
          <button>Habarlaşmak üçin</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
