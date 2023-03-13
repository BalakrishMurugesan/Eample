import React, { useContext } from 'react'
import UserContext from '../UserContext'

function Dashboard() {
    const context=useContext(UserContext)
    const cardData=[
        {
            name:"Earnings (Monthly)",
            earning:"$40000",
            color:"primary",
            icon:"calendar"
        },
        {
            name:"Earnings (annual)",
            earning:"$215000",
            color:"success",
            icon:"dollar-sign"
        },
        {
            name:"Task",
            earning:"50%",
            color:"info",
            icon:"clipboard-list"
        },
        {
            name:"Pending Requests",
            earning:18,
            color:"warning",
            icon:"comments"
        },
    ]
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard   {context.username}</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                {
                    cardData.map((data)=>{
                        return <div class="col-xl-3 col-md-6 mb-4">
                        <div class={`card border-left-${data.color} shadow h-100 py-2`}>
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            {data.name}</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{data.earning}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class={`fa fa-${data.icon} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    })
                }
                
            </div>
        </>
    )
}

export default Dashboard