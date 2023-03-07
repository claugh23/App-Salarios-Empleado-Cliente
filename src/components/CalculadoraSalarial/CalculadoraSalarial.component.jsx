import React, { useEffect, useState } from "react";
import { empleadoData } from "./utils/CalculadoraSalaria.constants";
export default function CalculadoraSalarial() {
  //state para renderizar la informacion en la tabla
  const [datosEmpleado, SetDatosEmpleado] = useState({});

  //states para generar el formulario y los calculos
  const [nombreEmpleado, SetNombreEmpleado] = useState("");
  const [horasLaborales, SetHorasLaborales] = useState(0);
  const [cargasLaborales, SetCargasLaborales] = useState(0);
  const [salarioPorHora, SetSalarioPorHora] = useState(0);
  const MostrarDatosEmpleado = (dataEmpleados) => {
    SetDatosEmpleado(dataEmpleados);
  };
  {
    /**Funcion que realiza el calculo del salario con rebajas y lo muestra en la tabla adjunta */
  }
  const CalculoSalarial = () => {
    let DatosCalculos = {};
    const calculoSalarioBruto = horasLaborales * salarioPorHora;
    const calculoCargasLaborales = cargasLaborales * calculoSalarioBruto;
    const calculoSalarioNeto = calculoSalarioBruto - calculoCargasLaborales;
    DatosCalculos = {
      id: 0,
      empleado: nombreEmpleado,
      salarioBruto: calculoSalarioBruto,
      cargaLaboral: calculoCargasLaborales,
      salarioNeto: calculoSalarioNeto,
    };

    SetNombreEmpleado(document.getElementById("InputName").value);
    SetHorasLaborales(document.getElementById("InputHoursWorked").value);
    SetCargasLaborales(document.getElementById("InputCharges").value);
    SetSalarioPorHora(document.getElementById("InputHourPayment").value);

    MostrarDatosEmpleado(DatosCalculos);
  };
  useEffect(() => {
    MostrarDatosEmpleado(datosEmpleado);
  }, []);
  return (
    <div className="container-fluid">
      <form action="">
        <div className="form-group col-sm-4 ">
          <div className="form-row ">
            <label htmlFor="InputName">Seleccione el empleado</label>
            <select className="form-control" id="InputName" required={true}>
              {empleadoData.map((empleado) => {
                return (
                  <option key={empleado.value} value={empleado.empleadoKey}>
                    {empleado.empleadoKey}
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
