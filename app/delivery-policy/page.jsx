// pages/delivery-policy.js
import Link from "next/link";
import React from "react";

export default function DeliveryPolicy() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Delivery Policy</h1>
            <p className="text-gray-700 mb-6">Last updated: August 16, 2025</p>

            <p className="mb-4">
                Thank you for shopping with <strong>Dhyan Footwear</strong>. This
                Delivery Policy outlines how we process and deliver your orders to
                ensure a smooth and reliable shopping experience.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Processing Time</h2>
            <p className="mb-4">
                All orders are processed within <strong>1-3 business days</strong>
                (excluding weekends and public holidays) after receiving your order
                confirmation email. You will receive another notification once your
                order has been shipped.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Delivery Time</h2>
            <p className="mb-4">
                Delivery times vary depending on your location. Estimated delivery time
                within India is <strong>3-7 business days</strong> after dispatch.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Delivery Charges</h2>
            <p className="mb-4">
                Delivery charges are calculated at checkout based on the delivery
                location and weight of the package. We may offer free delivery
                promotions from time to time.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Delivery Locations
            </h2>
            <p className="mb-4">
                We currently deliver across India. International delivery is not
                available at this time.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                5. Delays and Exceptions
            </h2>
            <p className="mb-4">
                Delivery delays may occasionally occur due to unforeseen circumstances
                such as weather conditions, courier delays, or high order volumes. We
                will notify you promptly if your delivery is expected to be delayed.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Order Tracking</h2>
            <p className="mb-4">
                Once your order has been dispatched, you will receive an email or SMS
                with a tracking number and link to monitor your shipment status.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                7. Incorrect Address
            </h2>
            <p className="mb-4">
                Please ensure your delivery address is correct when placing your order.
                We are not responsible for failed deliveries due to incorrect or
                incomplete address details.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                8. Damaged or Missing Items
            </h2>
            <p className="mb-4">
                If your order arrives damaged or with missing items, please contact us
                within <strong>48 hours</strong> of delivery with photos and details so
                we can investigate and resolve the issue.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p className="mb-4">
                For any questions about our Delivery Policy, please contact us:
            </p>
            <ul className="list-disc list-inside">
                <li>
                    By visiting our website:{" "}
                    <a
                        href="https://dhyanfootwear.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        https://dhyanfootwear.vercel.app/
                    </a>
                </li>
            </ul>
            <footer className="mt-12 border-t pt-6 text-center">
                <Link href="/" className="text-blue-600 hover:underline">
                    ← Back to Home
                </Link>
            </footer>
        </div>
    );
}
