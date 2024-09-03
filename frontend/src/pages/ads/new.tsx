import axios from "axios";
import React, { useEffect, useState } from "react";

type category = {
  id: number;
  name: string;
};

export default function newAd() {
  const [categories, setCategories] = useState<category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get<category[]>(
        "http://localhost:4000/category"
      );
      setCategories(result.data);
      console.log(result);
    };
    fetchCategories();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        //Prevent the borwser from reloading the page
        e.preventDefault();

        //Read the form data
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);

        //Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        axios.post("http://localhost:4000/ad", formJson);
      }}>
      <label htmlFor="Titre">Titre de l'annonce :</label>
      <br />
      <input
        type="text"
        className="text-field"
        name="Titre"
      />
      <br />
      <label htmlFor="price">Prix : </label>
      <br />
      <input
        type="number"
        className="text-field"
        name="price"
      />
      <select name="category">
        {categories.map((el) => (
          <option
            value={el.id}
            key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <button className="button"> Submit</button>
    </form>
  );
}
