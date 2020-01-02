import React, { Component } from 'react';

class NewAppointment extends Component {

    state = {

    }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Enter the information to create a new appointment
                    </h2>
                    <form>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    name="petName" 
                                    className="form-control" 
                                    placeholder="Pet name" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    name="ownerName" 
                                    className="form-control" 
                                    placeholder="Pet name" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="date" 
                                    name="date" 
                                    className="form-control"/>
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="time" 
                                    name="time" 
                                    className="form-control" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms Description</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control" 
                                    name="symptoms"
                                    placeholder="Describe the symptoms">

                                </textarea>
                           
                            </div>

                            <input 
                                type="submit"
                                className="py-3 mt-2 btn btn-success btn-block"
                                value="Add New Appointment" />

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAppointment;