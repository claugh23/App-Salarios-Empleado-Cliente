import React from "react";

export default function AgregarEmpleado() {
  return (
    <div className="container-fluid">
      <form action="">
        <div className="form-group col-md-6 ">
          <div className="form-row">
            <label htmlFor="InputName">Nombre</label>
            <input className="form-control" type="text" placeholder="your name" required={true} />
          </div>
          <div className="form-row">
            <label htmlFor="InputLastname">Apellidos</label>
            <input className="form-control" type="text" placeholder="your lastname" required={true} />
          </div>
          <div className="form-row">
            <label htmlFor="InputLastname">Correo Electronico</label>
            <input
              className="form-control"
              type="email"
              placeholder="username@domain.com"
              required={true}
            />
          </div>
          <div className="form-row col-sm-5">
            <label htmlFor="InputLastname">Posicion Actual</label>
            <input
              className="form-control"
              type="text"
              placeholder="Software Engineer"
              required={true}
            />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputLastname">Departamento</label>
            <select
              className="form-control"
              id="InputDepartment"
              required={true}
            >
              <option value="Contabilidad">Contabilidad</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Tecnologias de Informacion">
                Tecnologias de Informacion
              </option>
            </select>
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputHoursWorked">Horas Laborales</label>
            <input className="form-control" type="number" required={true} />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputHourPayment">Salario por Hora en $</label>
            <input className="form-control" type="number" placeholder="example: 1000" required={true} />
            <br />
          </div>
          <div className="form-row col-md-12">
            <button className="btn btn-primary " type="submit">
              Registrar Empleado al Sistema
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
