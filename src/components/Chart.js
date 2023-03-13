import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Chart() {
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Charts </h1>
      <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
        The charts below have been customized - for further customization options, please visit the <a
          target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
          documentation</a>.</p>
          <div>
            {
              open?"":<button onClick={()=>setOpen(true)}>Hi</button>
            }
            {
              open?<button onClick={()=>setOpen(false)}>save</button>:<>
              <button>hello</button>
              <button>welcome</button>
              </>
            }
          </div>
      <div className="d-flex flex-row profile-navbar">
       
            <Link to={"overview"} style={{ textDecoration: "none" }}>
              <div className="p-2 profile-link">Overview</div>
            </Link><Link to={"setting"} style={{ textDecoration: "none" }}>
              <div className="p-2 profile-link">Setting</div>
            </Link>


      </div>
      <Outlet />
    </>

  )
}

export default Chart