import connectDB from "@/config/db";
import Product from "@/models/Product";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server"; // Change if you use another auth method

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function DELETE(req) {
    try {
        // Connect DB
        await connectDB();

        // Verify user
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        // Parse body
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json({ success: false, message: "Product ID required" }, { status: 400 });
        }

        // Find product
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
        }

        // Check product ownership
        if (product.userId !== userId) {
            return NextResponse.json({ success: false, message: "Not your product" }, { status: 403 });
        }

        // Delete images from Cloudinary
        if (Array.isArray(product.image)) {
            for (const img of product.image) {
                const publicId = img.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(publicId);
            }
        }

        // Delete from DB
        await Product.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
