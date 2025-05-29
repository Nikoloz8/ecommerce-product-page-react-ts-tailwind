import { useState } from 'react'
import './App.css'

function App() {

  const thumbnailImages: string[] = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg"
  ]

  function mappingImages(arr: string[]) {
    {
      return arr.map((e, index) => {
        return <img key={index} onClick={() => setSelectedImage(index)} className={`w-[88px] max-sm:w-[75px] rounded-[10px] ${index === selectedImage ? "border-solid border-[2px] border-[#FF7E1B]" : undefined}`} src={`${e}`} alt="" />
      })
    }
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [hideImage, setHideImage] = useState(false)
  const [count, setCount] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [cartState, setCartState] = useState({ count: 0, hasItem: false })
  const [toggleHeader, setToggleHeader] = useState(false)
  
  const handleAddToCart = () => {
    if (count > 0) {
      if (cartState.hasItem) {
        setCartState({ count: cartState.count + count, hasItem: true })
      } else {
        setCartState({ count, hasItem: true })
      }
      setCount(0)
    }
  }


  const handleDelete = () => {
    setCartState({ count, hasItem: false })
  }
  
  const body = document.querySelector("body")

  function updateBodyClass() {
    if (toggleHeader) {
      body?.classList.add("overflow-y-hidden");
    } else {
      body?.classList.remove("overflow-y-hidden");
    }
  }

  updateBodyClass()


  return (
    <>
      <div className={`w-[250px] p-[25px]! min-md:hidden! h-[100vh] absolute z-100 bg-[#FFFFFF] ${toggleHeader ? "block" : "hidden"}`}>
        <img src="/images/icon-close.svg" onClick={() => setToggleHeader(false)} alt="" />
        <ul className='flex flex-col mt-[50px] gap-[20px]'>
          <li className='text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]'>Collections</li>
          <li className='text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]'>Men</li>
          <li className='text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]'>Women</li>
          <li className='text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]'>About</li>
          <li className='text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]'>Contact</li>
        </ul>
      </div>
      <div className='w-[100%] h-[100%] flex justify-center relative pb-[50px]!'>
        <div className={`absolute max-mobile:hidden bg-[rgba(0,0,0,0.8)] z-10 ${!hideImage ? "hidden" : "flex"} pt-[80px]! justify-center w-[100%] h-[100%]`}>
          <div className='w-[550px] max-sm:items-center flex flex-col gap-[20px] relative'>
            <div className='flex justify-end max-sm:w-[70%]'>
              <img src="/images/icon-close.svg" onClick={() => setHideImage(false)} className='w-[20px]' alt="" />
            </div>
            <div className='flex items-center w-[100%] max-sm:w-[70%] relative'>
              <button className="w-[56px] h-[56px] left-[-5%] absolute rounded-full bg-white cursor-pointer flex items-center justify-center" onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : 0)} >
                <img src="/images/icon-previous.svg" alt="Previous" />
              </button>
              <img className='rounded-[15px] w-[100%]' src={`/images/image-product-${selectedImage + 1}.jpg`} alt="" />
              <button className="w-[56px] h-[56px] left-[95%] absolute rounded-full bg-white cursor-pointer flex items-center justify-center" onClick={() => setSelectedImage(selectedImage < 3 ? selectedImage + 1 : 3)}>
                <img src="/images/icon-next.svg" alt="Previous" />
              </button>
            </div>
            <div className='flex w-[100%] justify-center items-center'>
              <div className='flex justify-around max-sm:justify-between w-[80%] max-sm:w-[70%]'>
                {mappingImages(thumbnailImages)}
              </div>
            </div>
          </div>
        </div>
        <div className='w-[1200px] max-lg:w-[100vw] relative'>
          <div className={`w-[360px] right-[-6%] z-100 max-md:left-[50%] max-md:-translate-x-1/2 max-md:transform max-2xl:right-[1%] top-[85px] h-[256px] bg-[#FFFFFF] shadow-[0_20px_50px_-20px_#1D202680] ${showCart ? "block" : "hidden"} rounded-[10px] absolute`}>
            <header className='p-[32px]! border-b-[1px] border-solid border-[#E4E9F2]'>
              <h4 className='text-[#1D2026] font-[700] text-[1.6rem] leading-[100%]'>Cart</h4>
            </header>
            {
              cartState.hasItem ? <div className='flex flex-col p-[24px]! gap-[20px]'>
                <div className='flex justify-between'>
                  <img className='w-[50px]! rounded-[4px]' src="/images/image-product-1-thumbnail.jpg" alt="" />
                  <div>
                    <h3 className='text-[1.6rem] font-[400] leading-[26px] text-[#69707D]'>Fall Limited Edition Sneakers</h3>
                    <h4 className='text-[1.6rem] font-[400] leading-[26px] text-[#69707D]'>$125.00 x {cartState.count} <span className='text-[1.6rem] font-[700] leading-[26px] text-[#1D2026]'>${cartState.count * 125}.00</span></h4>
                  </div>
                  <button onClick={() => handleDelete()}>
                    <img src="/images/icon-delete.svg" alt="" />
                  </button>
                </div>
                <button className='w-[100%] h-[56px] rounded-[10px] bg-[#FF7E1B] text-[1.6rem] font-[700] leading-[100%] text-[#FFFFFF]'>Checkout</button>
              </div> : <div className='w-[100%] h-[60%] flex items-center justify-center'>
                <h4 className='text-[#69707D] font-[700] text-[1.6rem] leading-[26px]'>Your cart is empty.</h4>
              </div>
            }
          </div>
          <header className='max-xl:p-[0_32px_0_32px] border-b-[1px] h-[100px] border-solid border-[#E4E9F2] flex items-center justify-between'>
            <div className='flex h-[100%] gap-[20px]! items-center'>
              <button>
                <img onClick={() => setToggleHeader(true)} src="/images/icon-menu.svg" className='mt-[4px]! max-md:block hidden' alt="" />
              </button>
              <img src="/images/logo.svg" alt="" />
              <ul className={`max-md:hidden flex gap-[30px] h-[100%] items-center text-[1.5rem] font-[400] leading-[26px] text-[#69707D]`}>
                <li className='hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!'><a href="#">Collections</a></li>
                <li className='hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!'><a href="#">Men</a></li>
                <li className='hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!'><a href="#">Women</a></li>
                <li className='hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!'><a href="#">About</a></li>
                <li className='hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!'><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className='flex items-center gap-[30px]'>
              <button onClick={() => setShowCart(!showCart)} className='cursor-pointer'>
                <span className={`flex items-center justify-center bg-[#FF7E1B] w-[19px] h-[13px] rounded-[6.5px] text-[#FFFFFF] font-[700] relative top-[8px] left-[10px] text-[10px] leading-[100%] ${cartState.count < 1 ? "hidden" : undefined}`}>
                  {cartState.count}
                </span>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" className='hover:fill-[#1D2026]' fill="#69707D" fillRule="nonzero" /></svg>
              </button>
              <img className='w-[50px]! border-[2px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] rounded-[100%]' src="/images/image-avatar.png" alt="" />
            </div>
          </header>
          <main onClick={() => setShowCart(false)} className='max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[100px] w-[100%] mt-[60px] flex justify-around'>
            <div className='w-[450px] max-mobile:w-[100%]! max-mobile:justify-center max-mobile:relative gap-[32px] flex flex-col'>
              <button className="hidden max-mobile:flex w-[40px] h-[40px] absolute rounded-full bg-white cursor-pointer items-center justify-center ml-[10px]" onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : 0)} >
                <img src="/images/icon-previous.svg" alt="Previous" />
              </button>
              <img onClick={() => setHideImage(true)} className='max-mobile:rounded-[0] w-[100%] rounded-[15px]' src={`/images/image-product-${selectedImage + 1}.jpg`} alt="" />
              <button className="w-[40px] h-[40px] right-[0] absolute rounded-full bg-white cursor-pointer hidden max-mobile:flex items-center mr-[10px] justify-center" onClick={() => setSelectedImage(selectedImage < 3 ? selectedImage + 1 : 3)}>
                <img src="/images/icon-next.svg" alt="Previous" />
              </button>
              <div className='flex w-[100%] max-mobile:hidden justify-between'>
                {mappingImages(thumbnailImages)}
              </div>
            </div>
            <div className='max-w-[450px] max-mobile:p-[20px]! flex flex-col gap-[32px]'>
              <h3 className='font-[700] text-[#FF7E1B] text-[1.3rem] leading-[100%]'>SNEAKER COMPANY</h3>
              <h1 className='font-[700] text-[#1D2026] text-[4.4rem] leading-[48px]'>Fall Limited Edition Sneakers</h1>
              <p className='font-[400] text-[1.6rem] leading-[26px] text-[#69707D]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
              <div className='max-mobile:flex max-mobile:justify-between'>
                <h4 className='flex items-center gap-[16px] font-[700] text-[2.8rem] text-[#1D2026] leading-[100%]'>$125.00 <span className='p-[4px_8px_4px_8px]! text-[1.6rem] font-[700] text-[#FF7E1B] leading-[100%] bg-[#FFEEE2] rounded-[6px]' >50%</span></h4>
                <h5 className='text-[1.6rem] font-[700] leading-[26px] text-[#B6BCC8] decoration-solid line-through'>$250.00</h5>
              </div>
              <div className='flex gap-[20px] max-mobile:flex-col'>
                <div className='max-mobile:w-[100%] w-[160px] h-[60px] bg-[#F6F8FD] rounded-[10px] flex items-center justify-around'>
                  <button className='cursor-pointer' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs><use className='hover:fill-[#FFAB6A]' fill="#FF7E1B" fillRule="nonzero" href="#a" /></svg>
                  </button>
                  <h5 className='text-[1.6rem] font-[700] text-[#1D2026] leading-[100%]'>{count}</h5>
                  <button className='cursor-pointer' onClick={() => setCount(count + 1)}>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use className='hover:fill-[#FFAB6A]' fill="#FF7E1B" fillRule="nonzero" href="#b" /></svg>
                  </button>
                </div>
                <button onClick={() => handleAddToCart()} className='max-mobile:w-[100%] max-mobile:shadow-[0_20px_50px_-20px_#FF7E1B]! w-[270px] h-[56px] rounded-[10px] bg-[#FF7E1B] flex items-center cursor-pointer justify-center text-[1.6rem] leading-[100%] font-[700] text-[#FFFFFF] gap-[16px] hover:bg-[#FFAB6A]'>
                  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fillRule="nonzero" /></svg>
                  Add to cart
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
