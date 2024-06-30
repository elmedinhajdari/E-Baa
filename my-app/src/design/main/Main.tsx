import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { categories } from "../components/data/categories";
import { products } from "../components/data/products";
import { sliderImages } from "../components/data/sliderImages";
import { brands } from "../components/data/brands";
import Policy from "../components/policy/Policy";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Swipper */}
        <div className="swiper">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {sliderImages.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <img src={imageSrc} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Most Wanted Products */}
        <div className="most-wanted-products">
          <div className="pt-3 pb-3">
            <span className="most-wanted-text">
              Most Wanted Products in E-Baa
            </span>
          </div>
          <div className="product-category d-flex justify-content-between">
            {categories.map((category) => (
              <div className="product-item" key={category.id}>
                <img
                  src={category.imageUrl}
                  alt=""
                  className={category.id === 1 ? "first-img" : "product-img"}
                />
                <button className="product-button">{category.name}</button>
              </div>
            ))}
          </div>
        </div>

        {products.map((product, index) => (
          <div key={index}>
            <div className="pt-3 pb-3 d-flex align-items-center gap-4">
              <span className="most-wanted-text">{product.categoryName}</span>
              <span className="look-more">
                <a href="#more">Look more-&gt;</a>
              </span>
            </div>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={false}
              className="pt-2 pb-2"
              modules={[Pagination]}
            >
              <div className="row justify-content-between">
                {product.items.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="card card-size card-padding">
                      <img
                        className="card-img-top"
                        src={item.imageSrc}
                        alt=""
                      />
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex flex-column flex-grow-1">
                          <span className="card-text">{item.description}</span>

                          <span className="actual-price">{item.price}</span>
                          {item.isItemDiscounted && (
                            <span className="discount">
                              <span className="original-price">
                                {item.originalPrice}
                              </span>
                              {item.discount}
                            </span>
                          )}
                        </div>
                        <span className="tvsh">Including TVSH</span>
                        <button className="add-to-cart-btn mt-1 mb-1">
                          Add to Cart
                        </button>
                        <div></div>
                      </div>
                      {item.isNew && <span className="top-left-text">NEW</span>}
                      <div className="top-right-icons">
                        <div className="icon-column">
                          <FavoriteBorderIcon className="fav-icon" />
                          <AutorenewOutlinedIcon className="comp-icon" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        ))}
        {/* Most Wanted Brands */}
        <div className="most-wanted-brands">
          <div className="pt-3 pb-3 most-wanted-text text-center">
            <span>MOST LOOKED BRANDS!</span>
          </div>
          <div className="brand-list d-flex justify-content-between">
            {brands.map((brands) => (
              <div className="" key={brands.id}>
                <img src={brands.imageUrl} alt="" />
              </div>
            ))}
          </div>
        </div>
        <Policy />
      </div>
      <Footer />
    </>
  );
};

export default Main;
