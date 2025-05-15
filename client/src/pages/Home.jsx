// import React from 'react'
// import banner from '../assets/banner.jpg'
// import bannerMobile from '../assets/banner-mobile.jpg'
// import { useSelector } from 'react-redux'
// import { valideURLConvert } from '../utils/valideURLConvert'
// import {Link, useNavigate} from 'react-router-dom'
// import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

// const Home = () => {
//   const loadingCategory = useSelector(state => state.product.loadingCategory)
//   const categoryData = useSelector(state => state.product.allCategory)
//   const subCategoryData = useSelector(state => state.product.allSubCategory)
//   const navigate = useNavigate()

//   const handleRedirectProductListpage = (id,cat)=>{
//       console.log(id,cat)
//       const subcategory = subCategoryData.find(sub =>{
//         const filterData = sub.category.some(c => {
//           return c._id == id
//         })

//         return filterData ? true : null
//       })
//       const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

//       navigate(url)
//       console.log(url)
//   }


//   return (
//    <section className='bg-white'>
//       <div className='container mx-auto'>
//           <div className={`w-full h-full min-h-48 bg-blue-100 rounded ${!banner && "animate-pulse my-2" } `}>
//               <img
//                 src={banner}
//                 className='w-full h-full hidden lg:block'
//                 alt='banner' 
//               />
//               <img
//                 src={bannerMobile}
//                 className='w-full h-full lg:hidden'
//                 alt='banner' 
//               />
//           </div>
//       </div>
      
//       <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10  gap-2'>
//           {
//             loadingCategory ? (
//               new Array(12).fill(null).map((c,index)=>{
//                 return(
//                   <div key={index+"loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
//                     <div className='bg-blue-100 min-h-24 rounded'></div>
//                     <div className='bg-blue-100 h-8 rounded'></div>
//                   </div>
//                 )
//               })
//             ) : (
//               categoryData.map((cat,index)=>{
//                 return(
//                   <div key={cat._id+"displayCategory"} className='w-full h-full' onClick={()=>handleRedirectProductListpage(cat._id,cat.name)}>
//                     <div>
//                         <img 
//                           src={cat.image}
//                           className='w-full h-full object-scale-down'
//                         />
//                     </div>
//                   </div>
//                 )
//               })
              
//             )
//           }
//       </div>

//       {/***display category product */}
//       {
//         categoryData?.map((c,index)=>{
//           return(
//             <CategoryWiseProductDisplay 
//               key={c?._id+"CategorywiseProduct"} 
//               id={c?._id} 
//               name={c?.name}
//             />
//           )
//         })
//       }



//    </section>
//   )
// }

// export default Home




// import React from 'react'
// import banner from '../assets/banner.jpg'
// import banner1 from '../assets/banner1.png'

// import bannerMobile from '../assets/banner-mobile.jpg'
// import { useSelector } from 'react-redux'
// import { valideURLConvert } from '../utils/valideURLConvert'
// import {Link, useNavigate} from 'react-router-dom'
// import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

// const Home = () => {
//   const loadingCategory = useSelector(state => state.product.loadingCategory)
//   const categoryData = useSelector(state => state.product.allCategory)
//   const subCategoryData = useSelector(state => state.product.allSubCategory)
//   const navigate = useNavigate()

//   const handleRedirectProductListpage = (id, cat) => {
//     console.log(id, cat)
//     const subcategory = subCategoryData.find(sub => {
//       const filterData = sub.category.some(c => {
//         return c._id == id
//       })

//       return filterData ? true : null
//     })
//     const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

//     navigate(url)
//     console.log(url)
//   }

//   return (
//     <section className='bg-white'>
//       <div className='container mx-auto'>
//         <div className='w-full h-full min-h-48 bg-blue-100 rounded overflow-hidden relative'>
//           <div className='flex space-x-4 animate-scroll'>
//             <img
//               src={banner}
//               className='w-full h-full object-cover'
//               alt='banner'
//             />
//             <img
//               src={bannerMobile}
//               className='w-full h-full object-cover lg:hidden'
//               alt='banner'
//             />
//             {/* Add another banner */}
//             <img
//               src={banner1}
//               className='w-full h-full object-cover'
//               alt='banner 2'
//             />
//             <img
//               src={bannerMobile}
//               className='w-full h-full object-cover lg:hidden'
//               alt='banner 2'
//             />
//           </div>
//         </div>
//       </div>

//       <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2'>
//         {
//           loadingCategory ? (
//             new Array(12).fill(null).map((c, index) => {
//               return (
//                 <div key={index + "loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
//                   <div className='bg-blue-100 min-h-24 rounded'></div>
//                   <div className='bg-blue-100 h-8 rounded'></div>
//                 </div>
//               )
//             })
//           ) : (
//             categoryData.map((cat, index) => {
//               return (
//                 <div key={cat._id + "displayCategory"} className='w-full h-full' onClick={() => handleRedirectProductListpage(cat._id, cat.name)}>
//                   <div>
//                     <img
//                       src={cat.image}
//                       className='w-full h-full object-scale-down'
//                     />
//                   </div>
//                 </div>
//               )
//             })
//           )
//         }
//       </div>

//       {/* Display category products */}
//       {
//         categoryData?.map((c, index) => {
//           return (
//             <CategoryWiseProductDisplay
//               key={c?._id + "CategorywiseProduct"}
//               id={c?._id}
//               name={c?.name}
//             />
//           )
//         })
//       }

//     </section>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner.png'; // First banner for desktop
import banner2 from '../assets/banner1.png';
import banner3 from '../assets/banner2.png'
import bannerMobile1 from '../assets/banner-mobile1.png'; 
import bannerMobile2 from '../assets/banner-mobile.png'; 
import bannerMobile3 from '../assets/banner-mobile2.png'; 
import { useSelector } from 'react-redux';
import { valideURLConvert } from '../utils/valideURLConvert';
import { Link, useNavigate } from 'react-router-dom';
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay';

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory);
  const categoryData = useSelector(state => state.product.allCategory);
  const subCategoryData = useSelector(state => state.product.allSubCategory);
  const navigate = useNavigate();

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = [banner1, banner2, banner3]; 
  const mobileBanners = [bannerMobile1, bannerMobile3, bannerMobile2]; 

  const handleRedirectProductListpage = (id, cat) => {
    console.log(id, cat);
    const subcategory = subCategoryData.find(sub => {
      return sub.category.some(c => c._id === id);
    });
    const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`;
    navigate(url);
    console.log(url);
  };

  // Auto-slide functionality every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleNextBanner = () => {
    setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  const handlePreviousBanner = () => {
    setCurrentBannerIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className='bg-white'>
      <div className='container mx-auto'>
        <div className='relative'>
          {/* Desktop Carousel */}
          <div className='hidden lg:block'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
              >
                {banners.map((bannerImage, index) => (
                  <div key={index} className='w-full flex-shrink-0'>
                    <img src={bannerImage} className='w-full h-auto object-cover' alt={`banner ${index}`} />
                  </div>
                ))}
              </div>
            </div>
            {/* Controls */}
            <button onClick={handlePreviousBanner} className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2'>&#60;</button>
            <button onClick={handleNextBanner} className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2'>&#62;</button>
          </div>

          {/* Mobile Carousel */}
          <div className='lg:hidden relative'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
              >
                {mobileBanners.map((bannerImage, index) => (
                  <div key={index} className='w-full flex-shrink-0'>
                    <img src={bannerImage} className='w-full h-auto object-cover' alt={`mobile-banner ${index}`} />
                  </div>
                ))}
              </div>
            </div>
            {/* Controls */}
            <button onClick={handlePreviousBanner} className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2'>&#60;</button>
            <button onClick={handleNextBanner} className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2'>&#62;</button>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2'>
        {loadingCategory ? (
          new Array(12).fill(null).map((_, index) => (
            <div key={index + "loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
              <div className='bg-blue-100 min-h-24 rounded'></div>
              <div className='bg-blue-100 h-8 rounded'></div>
            </div>
          ))
        ) : (
          categoryData.map(cat => (
            <div key={cat._id + "displayCategory"} className='w-full h-full' onClick={() => handleRedirectProductListpage(cat._id, cat.name) }  >
              <div>
                <img src={cat.image} className='w-full h-full object-scale-down' alt={cat.name} />
              </div>
            </div>
          ))
        )}
      </div>
      {categoryData?.map(c => (
        <CategoryWiseProductDisplay key={c?._id + "CategorywiseProduct"} id={c?._id} name={c?.name}  />
      ))}
    </section>
  );
};

export default Home;
