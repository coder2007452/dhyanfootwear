import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {

        const { userId } = getAuth(request)
        const { address, items } = await request.json();

        if (!address || items.length === 0) {
            return NextResponse.json({ success: false, message: "Invalid Data" });
        }

        //calculate amount using items
        const amount = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.product);
                if (!product) return 0; // skip if not found
                return (product.offerPrice || 0) * (item.quantity || 0);
            })
        ).then(values => values.reduce((sum, val) => sum + val, 0));

        await inngest.send({
            name: 'order/created',
            data: {
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.02), // 10% tax
                date: Date.now(),
            }
        })

        //Clear User Cart
        const user = await User.findById(userId)
        user.cartItems = {}
        await user.save()

        return NextResponse.json({ success: true, message: "Order Placed Successfully" });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}