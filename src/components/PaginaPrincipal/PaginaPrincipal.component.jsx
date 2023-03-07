import React, { useEffect, useState } from "react";
import { moduleOption } from "./utils/Calculadora.constants";
import AgregarEmpleado from "../AgregarEmpleado/AgregarEmpleado.component";
import VerEmpleados from "../VerEmpleados/VerEmpleados.component";
import CalculadoraSalarial from "../CalculadoraSalarial/CalculadoraSalarial.component";
import CalculadoraEdad from "../CalculadoraEdad/CalculadoraEdad.component";

export default function PaginaPrincipal() {
  const [markedOption, SetMarkedOption] = useState(null);

  const OptionSelected = (value) => {
    SetMarkedOption(value);
  };

  return (
    <div className="container-fluid">
      <hr />
      <h3 className="text-center">
        ERP PARA EMPLEADOS / {markedOption == 0 ? "Agrega un empleado" : ""}
        {markedOption == 1 ? "Empleados Actuales Registrados" : ""}
        {markedOption == 2 ? "Calculadora de Salarios" : ""}
        {markedOption == 3 ? "Calculadora de Edad" : ""}
      </h3>
      <hr />
      <p>Selecciona una de las opciones</p>
      <div className="card text-white bg-secondary">
        <div className="card-body">
          <div className="row">
            {moduleOption.map((options) => {
              return (
                <div
                  className="col d-flex justify-content-center"
                  key={options.value}
                >
                  <a
                    className="btn btn-info"
                    onClick={() => {
                      OptionSelected(options.value);
                    }}
                  >
                    {options.key}
                  </a>
                </div>
              );
            })}
          </div>
          <hr />
          {markedOption === 0 ? <AgregarEmpleado /> : ""}
          {markedOption === 1 ? <VerEmpleados /> : ""}
          {markedOption === 2 ? <CalculadoraSalarial /> : ""}
          {markedOption === 3 ? <CalculadoraEdad /> : ""}
          <hr />
        </div>
      </div>
    </div>
  );
}
