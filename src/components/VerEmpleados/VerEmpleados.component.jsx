import React from "react";

export default function VerEmpleados() {
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
           
            <tr className="table-primary">
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
