import { useState } from 'react'
import './App.css'
import HeaderBurgerbarUl from './Components/HeaderBurgerbarUl'
import HeaderUl from './Components/HeaderUl'
import HeaderCartAvatar from './Components/HeaderCartAvatar'
import PhotoFocus from './Components/PhotoFocus'
import Cart from './Components/Cart'
import MainImages from './Components/MainImages'
import MainText from './Components/MainText'
import LogoBurgerButton from './Components/LogoBurgerButton'
import Header from './Components/Header'
import Main from "./Components/Main"
import BurgerMenu from './Components/BurgerMenu'

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


      <div className='w-[100%] h-[100%] flex justify-center relative pb-[50px]!'>

        <PhotoFocus hideImage={hideImage} setHideImage={setHideImage} setSelectedImage={setSelectedImage} selectedImage={selectedImage} mappingImages={mappingImages} thumbnailImages={thumbnailImages} />



        <div className='w-[1200px] max-lg:w-[100vw] relative'>

        {toggleHeader ? <div className='absolute w-[100%] z-[10] h-[100%] bg-[rgba(0,0,0,0.8)]'>

        </div> : null}

        <BurgerMenu
          toggleHeader={toggleHeader}
          setToggleHeader={setToggleHeader}
          HeaderBurgerbarUl={HeaderBurgerbarUl}
        />

          <Cart showCart={showCart} cartState={cartState} handleDelete={handleDelete} />

          <Header LogoBurgerButton={LogoBurgerButton}
            HeaderUl={HeaderUl}
            HeaderCartAvatar={HeaderCartAvatar}
            setToggleHeader={setToggleHeader}
            setShowCart={setShowCart}
            showCart={showCart}
            cartState={cartState} />

          <Main
            setSelectedImage={setSelectedImage}
            setShowCart={setShowCart}
            selectedImage={selectedImage}
            setHideImage={setHideImage}
            thumbnailImages={thumbnailImages}
            handleAddToCart={handleAddToCart}
            setCount={setCount}
            count={count}
            mappingImages={mappingImages}
            MainImages={MainImages}
            MainText={MainText} />

        </div>
      </div>
    </>
  )
}

export default App
