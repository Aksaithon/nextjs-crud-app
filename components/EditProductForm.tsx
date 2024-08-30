"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditProductForm = ({ id, name, image, price, category }) => {
  const [newName, setNewName] = useState(name);
  const [newImage, setNewImage] = useState(image);
  const [newPrice, setNewPrice] = useState(price);
  const [newCategory, setNewCategory] = useState(category);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update product API call here

    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        image: newImage,
        price: newPrice,
        category: newCategory,
      }),
    });

    router.refresh();
    router.push("/products");
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold py-18  text-2xl">Update Product {id}</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3  max-w-80">
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          className=" input input-bordered input-accent w-full "
          type="text"
        />
        <input
          onChange={(e) => setNewImage(e.target.value)}
          value={newImage}
          className=" input input-bordered input-accent w-full "
          type="text"
        />
        <input
          onChange={(e) => setNewPrice(e.target.value)}
          value={newPrice}
          className=" input input-bordered input-accent w-full "
          type="text"
        />
        <input
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          className=" input input-bordered input-accent w-full "
          type="text"
        />

        <button className=" btn btn-primary w-full ">Update Product</button>
      </form>
    </>
  );
};

export default EditProductForm;
