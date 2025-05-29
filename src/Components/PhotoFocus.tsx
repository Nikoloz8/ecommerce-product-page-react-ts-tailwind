import type { JSX } from "react"

type TPhotoFocus = {
    hideImage: boolean
    setHideImage: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedImage: React.Dispatch<React.SetStateAction<number>>
    selectedImage: number
    mappingImages: (images: string[]) => JSX.Element[]
    thumbnailImages: string[]
}

export default function PhotoFocus({ hideImage, setHideImage, setSelectedImage, selectedImage, mappingImages, thumbnailImages }: TPhotoFocus) {
    return (
        <div className={`absolute max-mobile:hidden bg-[rgba(0,0,0,0.8)] z-10 ${!hideImage ? "hidden" : "flex"} pt-[60px]! justify-center w-[100%] h-[100%]`}>
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
        </div>)
}
