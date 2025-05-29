type TMainText = {
    count: number,
    handleAddToCart: () => void
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function MainText({setCount, count ,handleAddToCart}:TMainText) {
    return (
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
        </div>)
}
