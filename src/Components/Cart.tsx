type TCart = {
    showCart: boolean
    cartState: {
        hasItem:boolean,
        count:number
    }
    handleDelete: () => void
}

export default function Cart({showCart, cartState, handleDelete} :TCart) {
    return (
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
        </div>)
}
