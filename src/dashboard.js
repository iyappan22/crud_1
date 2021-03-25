import React from "react";
import Notificationcard from "./notificationcard";

function Dashboard() {

    let notificationcard = [
        {
        name :"EARNINGS (MONTHLY)",
        value: 40000,
        currency: "$",
        color:"primary",
        icon:"fa-calendar",
        isprogress:false
    },
    {
        name :"EARNINGS (ANNUAL)",
        value: 215000,
        currency: "$",
        color:"success",
        icon:"fa-calendar",
        isprogress:false
    },
    {
        name :"TASKS",
        value: "50%",
        color:"info",
        icon:"fa-clipboard-list",
        isprogress:true
    },
    {
        name :"PENDING REQUESTS",
        value: 18,
        color:"warning",
        icon:"fa-comments",
        isprogress:false
    },
    ]
    return (
      <>
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <div class="row">
                        {
                        notificationcard.map((card)=>{
                    return <Notificationcard data={card}></Notificationcard>
                        })
                    }

                    
                    </div>

      </>
    );
  }
  
  export default Dashboard;