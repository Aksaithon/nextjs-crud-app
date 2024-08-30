"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and images are required");
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image, price, category }),
      })

      if(res.ok){
        router.push('/products')
      }else{
         throw new Error('Failed to create a product')
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" flex justify-between item-center ">
        <h1 className=" font-bold py-10  text-2xl ">Add product form</h1>
      </div>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-3 w-fit">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Product name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="/images/1.jpg"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="1"
          defaultValue={"1"}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Product Category"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <button className=" btn btn-primary w-inherit">Add product</button>
      </form>
    </>
  );
};

export default AddProduct;
