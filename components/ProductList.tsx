import ProductModel from "@/Models/ProductSchema";
// import Image from "next/image";
import Link from "next/link";
import RemoveBtn from "./RemoveButton";

const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
  }
};

const ProductList = async () => {
  const products = await fetchProducts();

  return (
    <div className=" overflow-x-auto ">
      <div className=" flex justify-between item-center ">
        <h1 className=" font-bold py-10  text-2xl  ">NextJS 14 CRUP APP </h1>
      </div>

      <div className=" text-right  ">
        <Link href={"/addProduct"} className=" btn btn-primary ">
          Add Product
        </Link>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {products.map(
            ({
              _id,
              name,
              category,
              image,
              price,
            }: {
              _id: string;
              name: string;
              category: string;
              image: string;
              price: number;
            }) => (
              <tr className=" hover " key={_id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className=" flex items-center  gap-3 ">
                    <div className=" avatar ">
                      <div className=" mask mask-squircle w-12 h-12 ">
                        <img
                          src={image}
                          alt={name}
                          width={80}
                          height={80}
                          className="object-cover rounded-full "
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{name}</div>
                    </div>
                  </div>
                </td>

                <td>${price}</td>

                <td>{category}</td>

                <th>
                  <Link href={`/editProduct/${_id}`}>
                    <button className=" btn btn-primary ">Edit</button>
                  </Link>
                  <RemoveBtn id={_id} />
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
