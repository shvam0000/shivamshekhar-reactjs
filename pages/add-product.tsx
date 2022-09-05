import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Navbar } from '../components';

const optionsList = [
  {
    value: 'accessories',
    option: 'Accessories',
  },
  {
    value: 'electronics',
    option: 'Electronics',
  },
  {
    value: 'clothing',
    option: 'Clothing',
  },
  {
    value: 'furniture',
    option: 'Furniture',
  },
];

const AddProduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<any>();
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [email, setEmail] = useState<string>('shvam0000@gmail.com');

  const router = useRouter();

  const submitHandler = () => {
    fetch(`https://upayments-studycase-api.herokuapp.com/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        Name: name,
        Price: price,
        Category: category,
        Description: description,
        Avatar: avatar,
        DeveloperEmail: email,
      }),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodmFtMDAwMEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2h2YW0wMDAwIiwiaWF0IjoxNjYyMzk1MjczLCJleHAiOjE2NjI4MjcyNzN9.UPDuqM1q5mnvXQGhX6_yoVAJmTjb7-DAsRhaIo7iQtA`,
      },
    })
      .then((res) => {
        console.log(res);
        router.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#ECECED] py-4 min-h-screen">
      <Navbar />
      <h1 className="flex justify-center items-center py-5 text-3xl font-medium">
        Create Product
      </h1>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Product Name"
              className="px-9 py-4 my-3 rounded-lg w-xl shadow-xl"
            />
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description"
              className="px-9 py-4 rounded-lg w-xl shadow-xl"
              cols={24}
              rows={4}
            />
          </div>
          <div>
            <input
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
              type="text"
              placeholder="Image URL"
              className="px-9 py-4 my-3 rounded-lg w-xl shadow-xl"
            />
          </div>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white px-24 flex py-4 my-3 rounded-lg shadow-xl"
              name="categories">
              <option value="" disabled defaultValue="Categories">
                Categories
              </option>
              {optionsList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              type="number"
              placeholder="Price"
              className="px-9 py-4 my-3 rounded-lg w-xl shadow-xl"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Developer Email"
              className="px-9 py-4 my-3 rounded-lg w-xl shadow-xl"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-white px-36 flex py-4 my-3 rounded-lg shadow-xl uppercase">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
