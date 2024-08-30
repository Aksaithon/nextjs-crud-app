"use client";

import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }: {id: string}) => {
  const router = useRouter();

  const removeProduct = async () => {
    const confirmed = confirm(`Are you sure`);

    if (!confirmed) return;

    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    } else {
      console.error("Failed to delete product");
    }
  };

  return (
    <button onClick={removeProduct} className=" btn btn-error ml-2 ">
      Delete
    </button>
  );
};

export default RemoveBtn;
