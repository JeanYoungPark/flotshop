import React from 'react'
import "assets/css/common.css"
import 'assets/css/product.css'
import { BannerComponent } from 'components/product/BannerComponent'
import { ProductComponent } from 'components/product/ProductComponent'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { Menu } from 'components/Menu'

export const Product = () => {
  return (
    <>
        <Header/>
        <Search/>
        <Menu/>
        <BannerComponent/>
        <ProductComponent/>
    </>
  )
}
