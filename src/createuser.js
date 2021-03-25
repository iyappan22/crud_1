import React from "react";

function Createuser() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-md-6 offset-3">
            <lable>Name</lable>
            <input className="form-control" type="text" />
            <lable>Position</lable>
            <input className="form-control" type="text" />
            <lable>Office</lable>
            <input className="form-control" type="text" />
            <lable>Age</lable>
            <input className="form-control" type="text" />
            <lable>Start date</lable>
            <input className="form-control" type="text" />
            <button className="btn btn-primary center-align"> Add User</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createuser;
