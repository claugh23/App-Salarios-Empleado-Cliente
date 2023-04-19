import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function VerEmpleados() {
  const [empleados, SetEmpleados] = useState([]);

  const GetDataFromServer = () => {
    const request = fetch(
      "https://30b6-170-246-157-53.ngrok-free.app/api/v1/empleados/ObtenerEmpleado"
    )
      .then((response) => response.json())
      .then((data) => SetEmpleados(data))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    GetDataFromServer();
  }, []);

  return (
    <div className="container-fluid">
      <div className="table-responsive-md">
        <table
          className="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle"
        >
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo Electronico</th>
              <th>Posicion Actual</th>
              <th>Departamento</th>
              <th>Horas Laborales</th>
              <th>Pago por Hora</th>
              <th>Salario Mensual</th>
              <th>Salario Anual</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {empleados.map((data) => {
            return(
              <tr className="table-primary" key={data.id}>
              <td>{data.nombre}</td>
              <td>{data.apellidos}</td>
              <td>{data.correo}</td>
              <td>{data.posicionActual}</td>
              <td>{data.departamento}</td>
              <td>{data.horasLaborales}</td>
              <td>$ {data.salarioPorHora} </td>
              <td>$ {data.salarioMensual} </td>
              <td>$ {data.salarioAnual} </td>
            </tr>
            )
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
