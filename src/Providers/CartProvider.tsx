import { createContext, useEffect, useState } from "react";
import { api } from "../axiosRequest/apiRequest";
import { useNavigate } from "react-router-dom";
import { boolean } from "zod";




interface ICartContext{
  products: IProduct[] 
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  cart:IProduct[]
  setCart:React.Dispatch<React.SetStateAction<IProduct[]>>
  addProduct: (id: number) => void
  deleteProduct: (id: number) => void
}

export interface IProduct{
  id: number 
	name: string
	category:string
	price:string
	img:string
  [Symbol.iterator]() : IterableIterator<IProduct>
}

interface ICartProviderProps{
  children:React.ReactNode
}

export const CartContext = createContext({} as ICartContext);
CartContext.Provider;

export const CartProvider = ({ children }: ICartProviderProps ) => {
  const [products,setProducts]=useState<IProduct[]>([])
  useEffect(()=>{
    const getProducts=async()=>{
      const token= localStorage.getItem("@TOKEN")
      try {
        const {data}= await api.get<IProduct[]>("/products",{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        setProducts(data)
      } catch (error) {
        
      }
      
    }
    getProducts()
  },[])
   
  const [openModal,setOpenModal]=useState(false)
  const [cart,setCart]=useState<IProduct[]>([] as IProduct[])

  const addProduct=(id:number)=>{
   
       const addProductCart=products.find(product=>product.id===id
       ) as IProduct
       
       const productExists=cart.some(product=>product.id===id)
       if (productExists) {
        console.log("produto já existe no carrinho")
       } else{
        const newCart:IProduct[]= [...cart,addProductCart]
        setCart(newCart)
       }
      
  }
const deleteProduct=(id:number)=>{
  const removeProductCart=products.filter(product=>product.id===id)
  setCart(removeProductCart)  

}

  return <CartContext.Provider value={{products,openModal,setOpenModal,cart,setCart,addProduct,deleteProduct}}>{children}</CartContext.Provider>;
};
