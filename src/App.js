import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import ListAppointments from './components/ListAppointments';

class App extends Component {
  state = {
    appointments: []
  }

  // cuando la aplicación carga
  componentDidMount() {
    const appointmentsLS = localStorage.getItem('appointments');
    if(appointmentsLS) {
      this.setState({
        // parseamos para setear los appointments 
        appointments : JSON.parse(appointmentsLS)
      });
    }
  }

  // cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  createNewAppointment = data => {
    // copiamos el state actual
    const appointments = [...this.state.appointments, data];

    // agregamos el nuevo state
    this.setState({
      appointments
    });

  }

  deleteAppointment = (id) => {
    // copia del state
    const currentAppointments = [...this.state.appointments];

    // filtrar para obtener los elementos diferentes del id para poder actualizar el estado
    const appointments = currentAppointments.filter( app => app.id !== id);

    this.setState({
      appointments
    });

  }

  render(){
    return (
      <div className="container">
        <Header 
          title='Veterinary Management' />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment 
              createNewAppointment={this.createNewAppointment}/>
          </div>
          <div className="col-md-10 mx-auto">
            <ListAppointments 
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
