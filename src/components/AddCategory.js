import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //Inicializo useState con un string vacio "" para no tener el mensaje de error en consola de un undefined
  const [inputValue, setInputValue] = useState("");

  //Manejador de evento del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //Manejador de evento del submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search your giphy name here"
      />
    </form>
  );
};

//Hago obligatorio que me pasen "setCategories" desde otro componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
