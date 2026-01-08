import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm")
    fetch("https://fakestoreapi.com/products")
      .then(res =>{
        if(!res.ok){
          throw new Error('Failed to load products.json')
        }
        return res.json()
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
        console.log(data)
      }) 
      .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return { products, loading };
};
