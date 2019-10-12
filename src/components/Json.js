import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Json extends Component {
   state = {
      peoples: [],
      persons: {
         name: '',
         email: '',
         website: ''
      }
   }

   componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
            const peoples = res.data
            this.setState({ peoples })
         })
   }

   handleChange = e => {
      this.setState({ persons: e.target.value })
   }

   handleSubmit = e => {
      e.preventDefault();
      const users = {
         name: this.state.name,
         email: this.state.email,
         website: this.state.website
      }

      axios.post(`https://jsonplaceholder.typicode.com/users`, { users })
         .then(res => {
            console.log(res)
            console.log(res.data)
         })
   }

   renderList = () => {
      return this.state.peoples.map(person => {
         return (
            <tr>
               <td>{person.name}</td>
               <td>{person.email}</td>
               <td>{person.website}</td>
            </tr>
         )
      })
   }

   render() {
      const home = require('../icon/home.png')

      return (
         <div className='container'>
            <div className='mt-4'>
               <Link to='/'>
                  <h4 className='text-dark'><img
                     src={home}
                     height={'23px'}
                     alt=''
                     className='mt-0 mr-2 mb-2' />Home</h4>
               </Link>
            </div>
            <h1 className='display-3 mt-2 mb-2 text-center'>Create New <span className='font-weight-bolder'>POST</span></h1>
            <form onSubmit={this.handleSubmit}>
               <div className="form-row">
                  <div className="col-md-4 mb-3">
                     <div className="input-group">
                        <div className="input-group-prepend">
                           <span className="input-group-text bg-dark text-white">Name</span>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} placeholder='input your name here' />
                     </div>
                  </div>
                  <div className="col-md-4 mb-3">
                     <div className="input-group">
                        <div className="input-group-prepend">
                           <span className="input-group-text bg-dark text-white">Email</span>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} placeholder='input your email here' />
                     </div>
                  </div>
                  <div className="col-md-4 mb-3">
                     <div className="input-group">
                        <div className="input-group-prepend">
                           <span className="input-group-text bg-dark text-white">Website</span>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange} placeholder='input your website here' />
                     </div>
                  </div>
               </div>
               <button className='btn btn-secondary w-100' type='submit'>Submit</button>
            </form>
            <div>
               <h1 className='display-3 mb-2 text-center'>Display <span className='font-weight-bolder'>GET</span> from /POST</h1>
               <table className='table table-dark'>
                  <thead>
                     <tr>
                        <td scope='col'>Name</td>
                        <td scope='col'>Email</td>
                        <td scope='col'>Website</td>
                     </tr>
                  </thead>
                  <tbody>
                     {this.renderList()}
                  </tbody>
               </table >
            </div></div>
      )
   }
}

export default Json