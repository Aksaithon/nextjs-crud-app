import ConnectMongoDB from "@/lib/DbConnect";
import ProductModel from "@/Models/ProductSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectMongoDB();
    const products = await ProductModel.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  const { name, category, image, price } = await req.json();
  await ConnectMongoDB();

  await ProductModel.create({ name, category, image, price });
  return NextResponse.json(
    { message: "Product created successfully!" },
    { status: 201 }
  );
};
