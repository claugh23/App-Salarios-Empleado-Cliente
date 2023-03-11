import React, { useEffect, useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";

export default function AgregarEmpleado() {
  const formik = useFormikContext();
  const [dataEmpleados, SetDataEmpleados] = useState({});
  const [responseAPI, SetResponseAPI] = useState({});
  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
  });

  async function AgregarEmpleado(values) {
    SetDataEmpleados({
      
    });

    const request = await fetch(
      "http://localhost:8080/api/v1/empleados/NuevoEmpleado",
      {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify({
          nombre: values.nombre,
          apellidos: values.apellidos,
          correo: values.correo,
          posicionActual: values.posicionActual,
          departamento: values.departamento,
          horasLaborales: values.horasLaborales,
          salarioPorHora: values.salarioPorHora,
        }),
      }
    )
      .then((response) => SetResponseAPI(response.status))
      
  }

  return (
    <div className="container-fluid">
      <div className="form-group col-md-6 ">
        <Formik
          initialValues={{
            nombre: "",
            apellidos: "",
            correo: "",
            posicionActual: "",
            departamento: "",
            horasLaborales: 0,
            salarioPorHora: 0,
          }}
          onSubmit={(values) => {
            AgregarEmpleado(values);
          }}
        >
          <Form>
            <label>Nombre</label>
            <Field
              className="form-control"
              name="nombre"
              type="text"
              required
            />
            <label>Apellidos</label>
            <Field
              className="form-control"
              name="apellidos"
              type="text"
              required
            />
            <label>Correo Electronico</label>
            <Field
              className="form-control"
              name="correo"
              type="email"
              required
            />
            <label>Posicion Actual</label>
            <Field
              className="form-control"
              name="posicionActual"
              type="text"
              required
            />
            <label>Departamento</label>
            <Field
              className="form-control w-50"
              as="select"
              name="departamento"
              required
            >
              <option value="">-SELECT-</option>
              <option value="TECNOLOGIA DE INFORMACION">
                TECNOLOGIA DE INFORMACION
              </option>
              <option value="CONTABILIDAD">CONTABILIDAD</option>
              <option value="RECURSOS HUMANOS">RECURSOS HUMANOS</option>
              <option value="AUDITORIA">AUDITORIA</option>
              <option value="BODEGA">BODEGA</option>
              <option value="SEGURIDAD">SEGURIDAD</option>
              <option value="LOGISTICA">LOGISTICA</option>
            </Field>
            <label>Horas Laborales</label>
            <Field
              className="form-control w-50"
              name="horasLaborales"
              type="number"
              placeholder="example: 10"
              required
            />
            <label>Salario por Hora $</label>
            <Field
              className="form-control w-50"
              name="salarioPorHora"
              type="number"
              placeholder="Example: 25"
              required
            />
            <br />
            <button className="btn btn-primary" type="submit">
              Registrar Empleado
            </button>
          </Form>
        </Formik>

        <hr />
        {responseAPI == 201 ? <div className="alert alert-success" role="alert">
          <strong>EMPLEADO REGISTRADO AL SISTEMA</strong> 
        </div>:""}
        {responseAPI == 500 ? <div className="alert alert-danger" role="alert">
          <strong>OCURRIO UN ERROR AL REGISTRAR EL EMPLEADO, EL SERVIDOR PUEDE QUE ESTE PRESENTANDO FALLAS O NO ESTA DISPONIBLE</strong> 
        </div>:""}
        
      </div>
    </div>
  );
}
