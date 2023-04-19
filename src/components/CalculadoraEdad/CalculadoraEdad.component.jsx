import React from "react";
import { useState } from "react";
export default function CalculadoraEdad() {
  const [birthdate, setBirthdate] = useState("");

  function handleInputChange(event) {
    setBirthdate(event.target.value);
  }

  function calculateAge() {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <div className="container-fluid">
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h6 className="text-dark">Ingresa tu fecha de nacimiento</h6>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <input
                    className="form-control col-md-6"
                    type="date"
                    name="InputDate"
                    id="InputDate"
                    onChange={handleInputChange}
                  />
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
        {document.getElementById("InputDate")?.value != null ? (
          <div className="card">
            <div className="card-body">
              <div className="alert alert-info mt-2" role="alert">
                <strong>Tu edad actual es: </strong>{calculateAge()}
              </div>
              
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

     
    </div>
  );
}
