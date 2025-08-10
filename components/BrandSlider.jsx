"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function BrandSlider() {

    const scrollAnimation = {
        animation: "scroll 20s linear infinite",
        "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
        },
    };

    return (
        <div className="overflow-hidden w-full bg-white py-6 shadow-md">
            <div className="flex gap-12 animate-scroll whitespace-nowrap">
                
                <div className="flex-shrink-0">
                    <Image
                        src={assets.flite}
                        alt="Flite"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.bata}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.vkc}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.para}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.walk}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.action}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.campus}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.hit}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.otho}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                {/* Repeat 2 brands multiple times to fill width */}
                <div className="flex-shrink-0">
                    <Image
                        src={assets.flite}
                        alt="Flite"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.bata}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.vkc}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.para}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.walk}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.action}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.campus}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.hit}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={assets.otho}
                        alt="Bata"
                        width={120}
                        height={60}
                        className="object-contain transition"
                    />
                </div>
            </div>
        </div>
    );
}
