import React, { useEffect, useState } from "react";
import { empleadoData } from "./utils/CalculadoraSalaria.constants";
export default function CalculadoraSalarial() {
  //state para renderizar la informacion en la tabla
  const [datosEmpleado, SetDatosEmpleado] = useState([]);

  //states para generar el formulario y los calculos
  const [calculoSalarialState,SetCalculoSalarial] = useState({})

  async function GetDataFromServer(){
    const request = await fetch(
      "http://localhost:8080/api/v1/empleados/ObtenerEmpleado"
    )
      .then((response) => response.json())
      .then((data) => SetDatosEmpleado(data))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    GetDataFromServer();
  }, []);

  {
    /**Funcion que realiza el calculo del salario con rebajas y lo muestra en la tabla adjunta */
  }
  const CalculoSalarial = () => {
    let DatosCalculos = {};
    const calculoSalarioBruto = datosEmpleado.horasLaborales * datosEmpleado.salarioPorHora;
    const calculoCargasLaborales = datosEmpleado.cargasLaborales * calculoSalarioBruto;
    const calculoSalarioNeto = calculoSalarioBruto - calculoCargasLaborales;
    
    DatosCalculos = {
      id: 0,
      empleado: datosEmpleado.nombreEmpleado,
      salarioBruto: calculoSalarioBruto,
      cargaLaboral: calculoCargasLaborales,
      salarioNeto: calculoSalarioNeto,
    };

    SetNombreEmpleado(document.getElementById("InputName").value);
    SetHorasLaborales(document.getElementById("InputHoursWorked").value);
    SetCargasLaborales(document.getElementById("InputCharges").value);
    SetSalarioPorHora(document.getElementById("InputHourPayment").value);

    SetCalculoSalarial(DatosCalculos);
  };
 
  return (
    <div className="container-fluid">
      <form action="">
        <div className="form-group col-sm-4 ">
          <div className="form-row ">
            <label htmlFor="InputName">Seleccione el empleado</label>
            <select className="form-control" id="InputName" required={true}>
              {datosEmpleado.map((empleado) => {
                return (
                  <option key={empleado.id} value={empleado.nombre}>
                    {empleado.nombre} 
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-row col-sm-3">
            <label htmlFor="InputHoursWorked">Horas Laborales</label>
            <input
              id="InputHoursWorked"
              className="form-control"
              type="number"
              required={true}
            />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputCharges">Cargas Laborales %</label>
            <input
              id="InputCharges"
              className="form-control"
              type="number"
              required={true}
            />
          </div>
          <div className="form-row col-sm-3">
            <label htmlFor="InputHourPayment">Salario por Hora $</label>
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
              className="btn btn-warning"
              type="button"
              onClick={() => {
                CalculoSalarial();
              }}
            >
              Realizar Calculo
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="table-responsive">
        <table className="table table-info">
          <thead>
            <tr>
              <th scope="col">Nombre del Empleado</th>
              <th scope="col">Salario bruto en $</th>
              <th scope="col">Cargas Laborales %</th>
              <th scope="col">Salario Neto en $</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>{datosEmpleado.empleado}</td>
              <td>{datosEmpleado.salarioBruto}</td>
              <td>{datosEmpleado.cargaLaboral}</td>
              <td>{datosEmpleado.salarioNeto}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
