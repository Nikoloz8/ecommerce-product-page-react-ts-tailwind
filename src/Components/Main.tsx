import type {JSX, Dispatch, SetStateAction } from "react"

type TMain = {
    setSelectedImage: Dispatch<SetStateAction<number>>
    setShowCart: Dispatch<SetStateAction<boolean>>
    selectedImage: number
    setHideImage: Dispatch<SetStateAction<boolean>>
    thumbnailImages: string[]
    handleAddToCart: () => void
    setCount: Dispatch<SetStateAction<number>>
    count: number
    mappingImages: (images: string[]) => JSX.Element[]
    MainImages: React.FC<{
        selectedImage: number
        setHideImage: Dispatch<SetStateAction<boolean>>
        setSelectedImage: Dispatch<SetStateAction<number>>
        mappingImages: (images: string[]) => JSX.Element[]
        thumbnailImages: string[]
    }>
    MainText: React.FC<{
        setCount: Dispatch<SetStateAction<number>>
        count: number
        handleAddToCart: () => void
    }>
}

export default function Main({ setSelectedImage, setShowCart, selectedImage, setHideImage, thumbnailImages, handleAddToCart, setCount, count, mappingImages, MainImages, MainText }:TMain) {
    return (
        <main onClick={() => setShowCart(false)} className='max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[100px] w-[100%] mt-[60px] flex justify-around'>

            <MainImages selectedImage={selectedImage} setHideImage={setHideImage} setSelectedImage={setSelectedImage} mappingImages={mappingImages} thumbnailImages={thumbnailImages} />
            <MainText setCount={setCount} count={count} handleAddToCart={handleAddToCart} />

        </main>)
}
