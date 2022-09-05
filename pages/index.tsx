import { ItemCard, Navbar } from '../components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [productData, setProductData] = useState<any[]>([]);
  useEffect(() => {
    axios('https://upayments-studycase-api.herokuapp.com/api/products', {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodmFtMDAwMEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2h2YW0wMDAwIiwiaWF0IjoxNjYyMzk1MjczLCJleHAiOjE2NjI4MjcyNzN9.UPDuqM1q5mnvXQGhX6_yoVAJmTjb7-DAsRhaIo7iQtA`,
      },
    })
      .then((res) => {
        console.log(res.data.products);
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-[#ECECED] py-4">
      <Navbar />
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {productData.map((data, index) => (
          <div
            onClick={() => {
              router.push(`/${data._id}`);
            }}
            key={index}>
            <ItemCard
              avatar={data.avatar}
              name={data.name}
              price={data.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
