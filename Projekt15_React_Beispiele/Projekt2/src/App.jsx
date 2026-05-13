import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './components/Product'

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Cola',
      price: 8.99,
      image: '../pictures/image-1.jpeg',
      inStock: true
    },
    {
      id: 2,
      name: 'Bacardi',
      price: 5.99,
      image: '../pictures/image-2.jpeg',
      inStock: false
    },
    {
      id: 3,
      name: 'Parfüm',
      price: 15.99,
      image: '../pictures/image-3.jpeg',
      inStock: true
    }
  ]
  return (
    products.map(product => (
      <Product key={product.id} name={product.name} price={product.price} image={product.image} inStock={product.inStock} />
    ))
  )
}
