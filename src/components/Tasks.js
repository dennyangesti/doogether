import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

class Todolist extends Component {
   state = {
      input: '',
      todo: []
   }

   handleChange = (e) => {
      this.setState({ input: e.target.value })
   }
   handleSubmit = (e) => {
      e.preventDefault()

      const { todo } = this.state

      const tasks = this.task.value
      const completed = 1
      this.setState({
         input: '',
         todo: [...todo, {
            tasks,
            completed
         }]
      })
   }

   handleDelete = (target) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
         if (result.value) {
            Swal.fire(
               'Deleted!',
               'Your list has been removed.',
               'success'
            )
            var todolist = [...this.state.todo]

            todolist.splice(target, 1)
            this.setState({ todo: todolist })
         }
      })
   }

   handleFinish = (target) => {
      var todolist = [...this.state.todo]

      todolist[target].completed = 0
      this.setState({ todo: todolist })
      Swal.fire(
         'Good job!',
         '',
         'success'
      )
   }

   handleBack = (target) => {
      var todolist = [...this.state.todo]

      todolist[target].completed = 1
      this.setState({ todo: todolist })

   }

   renderTODO = () => {
      let lists = this.state.todo.map((item, index) => {
         if (item.completed === 0) {
            return (
               <li className='list-group-item d-flex justify-content-between h4 bg-success text-white'>
                  <span key={index}>{item.tasks}</span>
                  <span>
                     <button className='btn btn-secondary btn-sm mx-1' onClick={() => { this.handleBack(index) }}>Back</button>
                     <button className='btn btn-danger btn-sm mx-1' onClick={() => { this.handleDelete(index) }}>X</button>
                  </span>
               </li>
            )
         }
         if (item.completed === 1) {
            return (
               <li className='list-group-item d-flex justify-content-between h4 bg-secondary text-white'>
                  <span key={index}>{item.tasks}</span>
                  <span>
                     <button className='btn btn-success btn-sm mx-1' onClick={() => { this.handleFinish(index) }}>Done</button>
                     <button className='btn btn-danger btn-sm mx-1' onClick={() => { this.handleDelete(index) }}>X</button>
                  </span>
               </li>
            )
         }
      })
      return lists
   }

   render() {
      const home = require('../icon/home.png')

      return (

         <div className="container mt-5 p-0">
            <div className='jumbotron bg-warning mb-0'>
               <Link to='/'>
                  <h4 className='text-dark'><img
                     src={home}
                     height={'23px'}
                     alt=''
                     className='mt-0 mr-2 mb-2' />Home</h4>
               </Link>
               <div className='row'>
                  <div className='col-12 justify-content-center d-flex'>
                     <h1 className='display-1'>What <span className='font-weight-bold'>To-do</span> Now?</h1>
                  </div>
               </div>
               <div className='row'>
                  <form className='form-group' onSubmit={this.handleSubmit} className='col-12'>
                     <div className='col-12 mt-4 text-center align-self-center justify-content-center d-flex input-group'>
                        <div class="input-group-prepend">
                           <span class="input-group-text bg-dark text-white" id="basic-addon1">What you want to do next?</span>
                        </div>
                        <input ref={input => this.task = input} value={this.state.input} onChange={this.handleChange} placeholder='Input here' className='w-50' />
                        <button className='btn btn-success'>Submit</button>
                     </div>
                  </form>
               </div>
            </div>
            <ul className='list-group list-group-flush mb-5'>
               {this.renderTODO()}
            </ul>

         </div>
      );
   }
}

export default Todolist 