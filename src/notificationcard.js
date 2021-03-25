import React from "react";

function Notificationcard(details) {


    return (
      <>
                    <div class="col-xl-3 col-md-6 mb-4 notification-card">
                            <div class={`card border-left-${details.data.color} shadow h-100 py-2`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class={`text-xs font-weight-bold text-${details.data.color} text-uppercase mb-1`}>
                                            {details.data.name}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{details.data.currency}{details.data.value}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={`fas ${details.data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

      </>
    );
  }
  
  export default Notificationcard;