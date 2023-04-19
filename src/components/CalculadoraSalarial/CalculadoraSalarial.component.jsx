import React, { useEffect, useState } from "react";
import { empleadoData } from "./utils/CalculadoraSalaria.constants";
export default function CalculadoraSalarial() {
  //state hooks para renderizar la informacion en la tabla
  const [datosEmpleado, SetDatosEmpleado] = useState([]);
  const [calculoLaboral,SetCalculoLaboral] = useState({});
  

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
  let calculoSalarioBruto = 0
  let calculoCargasLaborales = 0
  let calculoSalarioNeto = 0
  const CalculoSalarial = async () => {
   
    let formData = {
      horasLaboralesInfo:document.getElementById('InputHoursWorked')?.value,
      cargasLaboralesInfo:document.getElementById('InputCharges')?.value,
      salarioPorHoraInfo:document.getElementById('InputHourPayment')?.value
    }
    let calculoSalarioBruto = formData.horasLaboralesInfo * formData.salarioPorHoraInfo;
    let calculoCargasLaborales = formData.cargasLaboralesInfo * calculoSalarioBruto;
    let calculoSalarioNeto = calculoSalarioBruto - calculoCargasLaborales;

    let DatosCalculos = {
      nombre:document.getElementById('InputName')?.value,
      dato1:calculoSalarioBruto,
      dato2:formData.cargasLaboralesInfo,
      dato3:calculoSalarioNeto
    };
    SetCalculoLaboral(DatosCalculos);
    
   
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
                  <option key={empleado._id} value={empleado.nombre}>
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
              <td>{calculoLaboral.nombre}</td>
              <td>{calculoLaboral.dato1} $</td>
              <td>{calculoLaboral.dato2} </td>
              <td>{calculoLaboral.dato3} $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
