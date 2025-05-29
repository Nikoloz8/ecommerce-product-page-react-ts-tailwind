import type { JSX } from "react"

type TMainImages = {
    selectedImage: number
    setHideImage: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedImage: React.Dispatch<React.SetStateAction<number>>
    mappingImages: (images: string[]) => JSX.Element[]
    thumbnailImages: string[]
}

export default function MainImages({ selectedImage, setHideImage, setSelectedImage, mappingImages, thumbnailImages }: TMainImages) {
    return (
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
        </div>)
}
