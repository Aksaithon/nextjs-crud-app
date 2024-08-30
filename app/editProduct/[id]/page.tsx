import EditProductForm from "@/components/EditProductForm";
import React from "react";

const getPRoductById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-cache",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to fetch product", error);
  }
};

const editProduct = async ({ params }: any) => {
  const { id } = params;
  const product = await getPRoductById(id);
  const { name, image, price, category } = product;

  console.log(product);

  return (
    <>
      <EditProductForm
        id={id}
        name={name}
        image={image}
        price={price}
        category={category}
      />
    </>
  );
};

export default editProduct;
