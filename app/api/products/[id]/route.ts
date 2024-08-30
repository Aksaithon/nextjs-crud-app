import ConnectMongoDB from "@/lib/DbConnect";
import ProductModel from "@/Models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    await ConnectMongoDB();
    const products = await ProductModel.find({_id: id});
    return NextResponse.json(products[0]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};



export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
  
    try {
      await ConnectMongoDB(); // Connect to the database
  
      // Parse the request body
      const { name, image, price, category } = await req.json();
  
      // Find the product by ID and update it
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        { name, image, price, category },
        { new: true } // Return the updated product
      );
  
      if (!updatedProduct) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Product updated successfully!", product: updatedProduct },
        { status: 200 }
      );
    } catch (error) {
      console.error("Failed to update product", error);
      return NextResponse.json(
        { error: "Failed to update product" },
        { status: 500 }
      );
    }
  };


export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    await ConnectMongoDB();

    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    
    if (!deletedProduct) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
};