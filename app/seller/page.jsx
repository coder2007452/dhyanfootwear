'use client';
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { getToken } = useAppContext();

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Shoes");
  const [sizes, setSizes] = useState([]);
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('offerPrice', offerPrice);


    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      const token = await getToken();

      const { data } = await axios.post(
        '/api/product/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        setFiles([]);
        setName('');
        setDescription('');
        setPrice('');
        setCategory('Men');
        setOfferPrice('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        {/* Image Upload */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input
                  type="file"
                  id={`image${index}`}
                  hidden
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                />
                <Image
                  className="max-w-24 cursor-pointer"
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  alt={`upload-${index}`}
                  width={100}
                  height={100}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-description">
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>

        {/* Pricing and Dropdowns */}
        <div className="flex items-center gap-5 flex-wrap">
          {/* Price */}
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* Offer Price */}
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>

          {/* Category */}
          <div className="flex gap-4">
            {/* Category */}
            <div className="flex-1">
              <p className="mb-2">Category</p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="border border-gray-300 w-full px-3 py-2"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* Sub Category */}
            <div className="flex-1">
              <p className="mb-2">Sub Category</p>
              <select
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
                className="border border-gray-300 w-full px-3 py-2"
              >
                <option value="Shoes">Shoes</option>
                <option value="Slippers">Slippers</option>
                <option value="Formal">Formal</option>
                <option value="Sandal">Sandal</option>
                <option value="Chappal">Chappal</option>
                <option value="Flip-flop">Flip Flop</option>
                <option value="Loafers">Loafers</option>
                <option value="Heels">Heels</option>
                <option value="Flats">Flats</option>
                <option value="Everyday-wear">Everyday Wear</option>
                <option value="Office-wear">Office Wear</option>
              </select>
            </div>
          </div>
          {/* Sizes */}
        </div>
        <div>
          <p className='mb-2'>Sizes</p>
          <div className='flex gap-3 grid grid-cols-5 sm:grid-cols-8 gap-2'>
            <div onClick={() => setSizes(prev => prev.includes("1") ? prev.filter(item => item !== "1") : [...prev, "1"])}>
              <p className={`${sizes.includes("1") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>1</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("2") ? prev.filter(item => item !== "2") : [...prev, "2"])}>
              <p className={`${sizes.includes("2") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>2</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("3") ? prev.filter(item => item !== "3") : [...prev, "3"])}>
              <p className={`${sizes.includes("3") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>3</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("4") ? prev.filter(item => item !== "4") : [...prev, "4"])}>
              <p className={`${sizes.includes("4") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>4</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("5") ? prev.filter(item => item !== "5") : [...prev, "5"])}>
              <p className={`${sizes.includes("5") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>5</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("6") ? prev.filter(item => item !== "6") : [...prev, "6"])}>
              <p className={`${sizes.includes("6") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>6</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("7") ? prev.filter(item => item !== "7") : [...prev, "7"])}>
              <p className={`${sizes.includes("7") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>7</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("8") ? prev.filter(item => item !== "8") : [...prev, "8"])}>
              <p className={`${sizes.includes("8") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>8</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("9") ? prev.filter(item => item !== "9") : [...prev, "9"])}>
              <p className={`${sizes.includes("9") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>9</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("10") ? prev.filter(item => item !== "10") : [...prev, "10"])}>
              <p className={`${sizes.includes("10") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>10</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("11") ? prev.filter(item => item !== "11") : [...prev, "11"])}>
              <p className={`${sizes.includes("11") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>11</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("12") ? prev.filter(item => item !== "12") : [...prev, "12"])}>
              <p className={`${sizes.includes("12") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>12</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("13") ? prev.filter(item => item !== "13") : [...prev, "13"])}>
              <p className={`${sizes.includes("13") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>13</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("14") ? prev.filter(item => item !== "14") : [...prev, "14"])}>
              <p className={`${sizes.includes("14") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>14</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("15") ? prev.filter(item => item !== "15") : [...prev, "15"])}>
              <p className={`${sizes.includes("15") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>15</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("16") ? prev.filter(item => item !== "16") : [...prev, "16"])}>
              <p className={`${sizes.includes("16") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>16</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("17") ? prev.filter(item => item !== "17") : [...prev, "17"])}>
              <p className={`${sizes.includes("17") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>17</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("18") ? prev.filter(item => item !== "18") : [...prev, "18"])}>
              <p className={`${sizes.includes("18") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>18</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("19") ? prev.filter(item => item !== "19") : [...prev, "19"])}>
              <p className={`${sizes.includes("19") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>19</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("20") ? prev.filter(item => item !== "20") : [...prev, "20"])}>
              <p className={`${sizes.includes("20") ? 'bg-red-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>20</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
