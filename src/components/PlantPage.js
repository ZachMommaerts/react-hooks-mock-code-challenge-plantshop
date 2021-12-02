import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ newPlant, setNewPlant] = useState({
    id: '',
    name: '',
    image: '',
    price: ''
  });

  const fetchPlants = () => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantList => setPlants(plantList))
    .catch(error => alert(error));
  };

  useEffect(fetchPlants, []);

  const filterSearch = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm
          setPlants={setPlants} 
          plants={plants}
          newPlant={newPlant} 
          setNewPlant={setNewPlant}
        />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filterSearch}/>
    </main>
  );
}

export default PlantPage;
