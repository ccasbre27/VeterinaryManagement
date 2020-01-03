import React from 'react';
import Appointment from './Appointment';

const ListAppointments = ({ appointments }) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">Manage your appointments</h2>
                <div className="lista-citas">
                    {appointments.map(app => (
                        <Appointment
                            key={app.id}
                            appointment={app} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListAppointments;