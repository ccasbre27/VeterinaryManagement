import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const ListAppointments = ({ appointments, deleteAppointment }) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">Manage your appointments</h2>
                <div className="lista-citas">
                    {appointments.map(app => (
                        <Appointment
                            key={app.id}
                            appointment={app}
                            deleteAppointment={deleteAppointment} />
                    ))}
                </div>
            </div>
        </div>
    );
}

ListAppointments.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
};

export default ListAppointments;