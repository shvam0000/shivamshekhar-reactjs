import { ItemCard, Navbar } from '../components';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Plus } from '../utils/icons';

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

export default function Home() {
  const router = useRouter();
  const [productData, setProductData] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState();
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

    axios('https://upayments-studycase-api.herokuapp.com/api/categories/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodmFtMDAwMEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2h2YW0wMDAwIiwiaWF0IjoxNjYyMzk1MjczLCJleHAiOjE2NjI4MjcyNzN9.UPDuqM1q5mnvXQGhX6_yoVAJmTjb7-DAsRhaIo7iQtA`,
      },
    })
      .then((res) => {
        console.log('categories', res.data.categories);
        setCategoryList(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return categoryList;
    }
    return categoryList.filter((item) => item.name === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, categoryList]);

  return (
    <div className="bg-[#ECECED] py-4 ">
      <Navbar />
      <div className="flex justify-between items-center px-32">
        <div>
          <input
            required
            type="text"
            placeholder="Apple Watch, Samsung S21, Macboo..."
            className="px-9 py-4 my-3 rounded-lg w-xl shadow-xl"
          />
        </div>
        <div>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white px-24 flex py-4 my-3 rounded-lg shadow-xl"
            name="categories">
            <option value="">Categories</option>
            {categoryList.map((option) => (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
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
      <div className="text-6xl bottom-0 left-0 sticky">
        <a href="/add-product">
          <Plus />
        </a>
      </div>
    </div>
  );
}
