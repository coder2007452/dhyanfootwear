// pages/terms-and-conditions.js
import Link from "next/link";
import React from "react";

export default function TermsAndConditions() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-700 mb-6">Last updated: August 16, 2025</p>

            <p className="mb-4">
                Please read these Terms and Conditions carefully before using our
                website operated by <strong>Dhyan Footwear</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Interpretation</h2>
            <p className="mb-4">
                The words with the initial letter capitalized have meanings defined
                under the following conditions. These definitions shall have the same
                meaning regardless of whether they appear in singular or plural.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Acknowledgement</h2>
            <p className="mb-4">
                These are the Terms and Conditions governing the use of this Service
                and the agreement between You and the Company. These Terms and
                Conditions set out the rights and obligations of all users regarding
                the use of the Service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Your Access</h2>
            <p className="mb-4">
                By accessing or using the Service, You agree to be bound by these Terms
                and Conditions. If You disagree with any part of these Terms, You may
                not access the Service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Intellectual Property
            </h2>
            <p className="mb-4">
                The Service and its original content, features, and functionality are
                and will remain the exclusive property of Dhyan Footwear and its
                licensors. Our trademarks and trade dress may not be used without the
                prior written consent of Dhyan Footwear.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Orders</h2>
            <p className="mb-4">
                By placing an order through the Service, You warrant that You are
                legally capable of entering into binding contracts. We reserve the
                right to refuse or cancel Your order at any time for certain reasons
                including but not limited to: product availability, errors in the
                description or prices, or suspected fraudulent transactions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
            <p className="mb-4">
                To the maximum extent permitted by applicable law, Dhyan Footwear shall
                not be liable for any indirect, incidental, special, consequential or
                punitive damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
            <p className="mb-4">
                We may terminate or suspend Your access immediately, without prior
                notice or liability, for any reason whatsoever, including without
                limitation if You breach these Terms and Conditions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
            <p className="mb-4">
                The laws of India shall govern these Terms and Your use of the Service.
                Your use of the Service may also be subject to other local, state,
                national, or international laws.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these Terms and Conditions, You can
                contact us:
            </p>
            <ul className="list-disc list-inside">
                <li>
                    By visiting this page on our website:{" "}
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
