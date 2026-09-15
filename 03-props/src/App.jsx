import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Mia khalida"
        age={12}
        img="https://img.businessoffashion.com/resizer/v2/AWWWA3F5IJANXPAOB7VBUSBEDE.jpeg?auth=38abc1e681ca5248634aa0291bac3a8fd4c066a99afe7a0178d92e42bb56caba&width=1440"
      />
      <Card
        user="Dani daniels"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyb7Vxp2rzTEpdLA8KLpgTOBgeLfZWoooGyLE4pYh_g&s=10"
        age={112}
      />
    </div>
  );
};

export default App;
