import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
   render() {
      return (
         <div>
            <div className='col-sm-8 mx-auto card mt-5 mb-5 shadow-lg' style={{ opacity: '0.9' }}>
               <div className='card-body'>

                  <div className=' border-bottom border-secondary card-title text-center'>
                     <h1>Welcome, <span className='font-weight-bolder'>Doogether!</span></h1>
                  </div>

                  <div className='justify-content-around d-flex mt-5'>
                     <Link to='/todo'>
                        <button className='btn btn-lg btn-primary'>To-do Application</button>
                     </Link>
                     <Link to='/json'>
                        <button className='btn btn-lg btn-primary'>API Placeholder</button>
                     </Link>
                  </div>

                  <div className='card-title d-flex justify-content-end mt-5'>
                     <small>This apps created by: <span className='font-weight-bold'>Denny A. Pratama</span></small>
                  </div>

               </div>
            </div>
         </div>
      )
   }
}

export default Home