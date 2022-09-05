import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Navbar } from '../components';

const ProductPage = () => {
  const [productData, setProductData] = useState<any>({});
  const router = useRouter();

  const pid = router.query.id;

  useEffect(() => {
    if (pid) {
      axios(
        `https://upayments-studycase-api.herokuapp.com/api/products/${pid}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodmFtMDAwMEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2h2YW0wMDAwIiwiaWF0IjoxNjYyMzk1MjczLCJleHAiOjE2NjI4MjcyNzN9.UPDuqM1q5mnvXQGhX6_yoVAJmTjb7-DAsRhaIo7iQtA`,
          },
        }
      )
        .then((res) => {
          console.log('res', res.data.product);
          setProductData(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pid]);
  return (
    <div className="bg-[#ECECED] py-4 min-h-screen">
      <Navbar />
      <div className="px-96">
        <div className="flex">
          <figure>
            <img
              src={productData.avatar}
              alt={productData.name}
              height={500}
              width={500}
            />
          </figure>
          <div className="flex flex-col justify-between px-5">
            <h1 className="text-4xl font-bold">{productData.name}</h1>
            <h2 className="text-2xl">${productData.price}</h2>
          </div>
        </div>
        <br />
        <hr className="font-bold" />
        <h1 className="text-4xl font-bold py-2">Description</h1>
        <div className="my-3">{productData.description}</div>
      </div>
    </div>
  );
};

export default ProductPage;
