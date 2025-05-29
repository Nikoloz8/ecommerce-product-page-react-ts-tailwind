type THeaderCartAvatar = {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
    showCart:boolean
    cartState:{
        count:number,
        hasItem:boolean
    }
}

export default function HeaderCartAvatar({ setShowCart, showCart, cartState } :THeaderCartAvatar) {
    return (
        <div className='flex items-center gap-[30px]'>
            <button onClick={() => setShowCart(!showCart)} className='cursor-pointer'>
                <span className={`flex items-center justify-center bg-[#FF7E1B] w-[19px] h-[13px] rounded-[6.5px] text-[#FFFFFF] font-[700] relative top-[8px] left-[10px] text-[10px] leading-[100%] ${cartState.count < 1 ? "hidden" : undefined}`}>
                    {cartState.count}
                </span>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" className='hover:fill-[#1D2026]' fill="#69707D" fillRule="nonzero" /></svg>
            </button>
            <img className='w-[50px]! border-[2px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] rounded-[100%]' src="/images/image-avatar.png" alt="" />
        </div>)
}
