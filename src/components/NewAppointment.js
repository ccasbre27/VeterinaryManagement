import React, { Component } from 'react';
import uuid from 'uuid';

class NewAppointment extends Component {

    state = {
        appointment: {
            petName: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        },
        error: false
    }

    handleChange = (e) => {
        this.setState({
            appointment: {
                ...this.state.appointment, // esta linea toma una copia, se recomienda hacerlo
                [e.target.name] : [e.target.value]
            }
        });
    }

    handleSubmit = (e) => {
        // para prevenir que se envíen los datos
        e.preventDefault();

        // extraer los datos del state con destructuring
        const { petName, owner, date, time, symptoms } = this.state.appointment;

        // validar que los campos estén llenos
        if (petName === '' || owner === '' || date === '' || time === '' || symptoms === '') {
            this.setState({
                error: true
            });

            // detener la ejecución
            return;
        }

        // generar objeto con los datos
        const newAppointment = {...this.state.appointment};
        newAppointment.id = uuid();

        // agregamos al cita
        this.props.createNewAppointment(newAppointment);

        
    }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Enter the information to create a new appointment
                    </h2>
                    <form
                        onSubmit={this.handleSubmit}>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    name="petName" 
                                    className="form-control" 
                                    placeholder="Pet name" 
                                    onChange={this.handleChange}
                                    value={this.state.appointment.petName}/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    name="ownerName" 
                                    className="form-control" 
                                    placeholder="Owner name"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner} />
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="date" 
                                    name="date" 
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.date}/>
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="time" 
                                    name="time" 
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.time} />
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms Description</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control" 
                                    name="symptoms"
                                    placeholder="Describe the symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.symptoms}>

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