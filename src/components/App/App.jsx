import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"

import { getCategories } from "../../features/categories/categoriesSlice"
import { getProducts } from "../../features/products/productsSlice"

import { ROUTES } from "../../utils/routes"
import Home from "../Home/Home"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import SingleProduct from "../Products/SingleProduct"
import UserForm from "../User/UserForm"
import Profile from "../Profile/Profile"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar amount={7} />
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
