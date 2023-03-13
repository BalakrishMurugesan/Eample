import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function Table() {
    const [student, setStudent] = useState([])

    const fetchdata=async()=>{  
        const value = await axios.get('https://63e089a365b57fe606446f28.mockapi.io/student')
        setStudent(value.data)
}
    useEffect(()=>{
        fetchdata()
},[])

    const handleDelete=async(id)=>{
       
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Student Details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                axios.delete(`https://63e089a365b57fe606446f28.mockapi.io/student/${id}`)
                  .then(() => {
                    fetchdata();
                  })
                swal("Sucessfully deleted!", {
                  icon: "success",
                });
              } else {
                swal("Your imaginary file is safe!");
              }
            });
    }
    return (
        <>
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Roll</th>
                                    <th>Age</th>
                                    <th>DOB</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Roll</th>
                                    <th>Age</th>
                                    <th>DOB</th>
                                </tr>
                            </tfoot>
                            <tbody>

                                {student.map((data)=>{
                                    return <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.roll}</td>
                                    <td>{data.age}</td>
                                    <td>{data.dob}</td>
                                    <td>
                                        <Link to={`/student/${data.id}`}><button className='btn btn-primary'>View</button></Link>
                                        <button className='btn btn-danger m-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table