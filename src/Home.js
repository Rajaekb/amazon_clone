import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-AU_ENG_PVD5221._CB408305644_.jpg"
            alt="" />
<div className="home__row">
<Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
         <Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
</div>
<div className="home__row">
<Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
         <Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
         <Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
</div>

<div className="home__row">
<Product
        id="123123"
        title="the constannt innovayions creates"
        price={11.5}
        rating={5}
        image="https://www.mindtheproduct.com/wp-content/uploads/2016/12/the-product-experience-headphones.png"
        />
        
</div> 
        </div>
    )
}

export default Home
