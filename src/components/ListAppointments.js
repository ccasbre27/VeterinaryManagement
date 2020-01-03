import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const ListAppointments = ({ appointments, deleteAppointment }) => {

    // imprimir un mensaje si hay citas o no
    const message = Object.keys(appointments).length === 0 ? 'There are not appointments yet :(' : 'Manage your appointments';

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
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