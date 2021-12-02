import React from "react";

function NewPlantForm({ newPlant, setNewPlant, plants, setPlants }) {

  const handleFormInput = (e) => {
    const formValue = {
      ...newPlant,
      [e.target.name]: e.target.value
    };
    setNewPlant(formValue);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formValue = {
      ...newPlant,
      id: plants.length + 1
    };
    setNewPlant(formValue);
    
    setPlants([
      ...plants,
      newPlant
    ])

    setNewPlant({
      ...newPlant,
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleFormInput}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleFormInput}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleFormInput}/>
        <button type="submit" onClick={handleFormSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
