import React,  { useState, useEffect } from 'react'
import noImage from 'assets/images/noImage.avif'
import { BsSuitHeart, BsHandbag, BsWindowSplit } from "react-icons/bs"
import { CiGrid2H, CiGrid41 } from "react-icons/ci"
import { Paging } from 'components/Paging'
import { fromTopIn20, fromBottomIn40 } from 'utils'
import { useMutation } from 'react-query'
import { productListApi } from 'api/product'
import { Link } from 'react-router-dom'

type componentType = {
    props: {
        categoryId?: string,
        subCategoryId?: string
    }
}

type productType = {
    id: number;
    category_id: number;
    title: string;
    price: number;
    discount: number;
    description: string;
    sub_category_id?: number;
    likes: number;
    images?: {id: number, url: string, product_id: number}[];
    new_price?: string;
    final_price?: string;
}

export const ProductComponent: React.FC<componentType> = ({props: {categoryId, subCategoryId}}) => {
    const [grid, setGrid] = useState(2);
    const { mutate: productMutate, data: productData} = useMutation<productType[], any, { categoryId?: string, subCategoryId?: string }>(({categoryId, subCategoryId}) => productListApi(categoryId, subCategoryId));

    useEffect(() => {
        productMutate({categoryId, subCategoryId});
    }, [productMutate, categoryId, subCategoryId]);
    
    for(let data of productData || []) {
        data.new_price = Math.floor(data.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        data.final_price = Math.floor(data.price * ((100 - data.discount) / 100)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    const renderProductList = (productData || []).map((data: productType, i: number) => (
        <li className='product' key={i}>
            <Link to={subCategoryId ? `/products/${categoryId}/${subCategoryId}/view/${data.id}` : `/products/${categoryId}/view/${data.id}`}>
                <div className="img">
                    <div><img src={data.images?.length ? data.images[0]?.url : noImage} alt="product 1"/></div>
                    <div className="likes"><button><strong>Like</strong> <span className="count">{data.likes}</span></button></div>
                    <div className="icons">
                        <span><BsSuitHeart/></span>
                        <span><BsHandbag /></span>
                        <span><BsWindowSplit /></span>
                    </div>
                </div>
                <div className="description">
                    <strong className="name">{data.title}</strong>
                    <div className="reviewCount">리뷰 0</div>
                    <div className="price line">{data.new_price}원</div>
                    <div className="discountPrice">{data.final_price}원 <span className="discount">({data.discount}%)</span></div>
                </div>
            </Link>
        </li>
    ));
            

    useEffect(() => {
        fromTopIn20();
        fromBottomIn40();
    }, []);

    return (
        <div className='wrapper'>
            <div className='top fromTopIn20'>
                <h1>PRODUCT</h1>
                <ul>
                    <li><span>의류</span></li>
                    <li><span>산책</span></li>
                    <li><span>리빙</span></li>
                </ul>
            </div>
            <div className={`content ${grid === 1 ? 'typeA' : 'typeB'}`}>
                <div className='nav'>
                    <span className={`${grid === 1 && 'grid'}`}  onClick={() => setGrid(1)}><CiGrid2H /></span>
                    <span className={`${grid === 2 && 'grid'}`} onClick={() => setGrid(2)}><CiGrid41 /></span>
                </div>
                <ul className='products fromBottomIn40'>
                    {renderProductList}
                </ul>
            </div>
            <Paging />
        </div>
    )
}
