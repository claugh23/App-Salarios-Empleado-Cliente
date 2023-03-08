import React, { useEffect, useState } from "react";

export default function AgregarEmpleado() {
  const [dataEmpleados, SetDataEmpleados] = useState({});

  const AgregarEmpleado = () => {
    const nombre = document.getElementById("InputName").value;
    const apellidos = document.getElementById("InputLastname").value;
    const correo = document.getElementById("InputEmail").value;
    const posicionActual = document.getElementById("InputPosition").value;
    const departamento = document.getElementById("InputDepartment").value;
    const horasLaborales = document.getElementById("InputHoursWorked").value;
    const salarioPorHora = document.getElementById("InputHourPayment").value;

    SetDataEmpleados({
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      posicionActual: posicionActual,
      departamento: departamento,
      horasLaborales: horasLaborales,
      salarioPorHora: salarioPorHora,
      salarioMensual: 0,
      salarioAnual: 0,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataEmpleados,
    };

    fetch("http://localhost:8080/api/v1/empleados/NuevoEmpleado", options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container-fluid">
      <form action="">
        <div className="form-group col-md-6 ">
          <div className="form-row">
            <label htmlFor="InputName">Nombre</label>
            <input
              id="InputName"
              className="form-control"
              type="text"
              placeholder="your name"
              required={true}
            />
          </div>
          <div className="form-row">
            <label htmlFor="InputLastname">Apellidos</label>
            <input
              id="InputLastname"
              className="form-control"
              type="text"
              placeholder="your lastname"
              required={true}
            />
          </div>
          <div className="form-row">
            <label htmlFor="InputEmail">Correo Electronico</label>
            <input
              id="InputEmail"
              className="form-control"
              type="email"
              placeholder="username@domain.com"
              required={true}
            />
          </div>
          <div className="form-row col-sm-5">
            <label htmlFor="InputPosition">Posicion Actual</label>
            <input
              id="InputPosition"
              className="form-control"
              type="text"
              placeholder="Software Engineer"
              required={true}
            />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputDepartment">Departamento</label>
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
            <label htmlFor="InputHoursWorked">Horas Laborales Diarias</label>
            <input
              id="InputHoursWorked"
              className="form-control"
              type="number"
              required={true}
            />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputHourPayment">Salario por Hora en $</label>
            <input
              id="InputHourPayment"
              className="form-control"
              type="number"
              placeholder="example: 1000"
              required={true}
            />
            <br />
          </div>
          <div className="form-row col-md-12">
            <button
              className="btn btn-primary "
              type="button"
              onClick={() => {
                AgregarEmpleado();
              }}
            >
              Registrar Empleado al Sistema
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
