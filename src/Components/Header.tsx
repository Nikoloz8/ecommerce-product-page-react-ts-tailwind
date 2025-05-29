type THeader = {
    LogoBurgerButton: React.FC<{ setToggleHeader: React.Dispatch<React.SetStateAction<boolean>> }>
    HeaderUl: React.FC
    HeaderCartAvatar: React.FC<{ setShowCart: React.Dispatch<React.SetStateAction<boolean>>, showCart: boolean, cartState: { count: number, hasItem: boolean } }>
    setToggleHeader: React.Dispatch<React.SetStateAction<boolean>>
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
    showCart: boolean
    cartState: { count: number, hasItem: boolean }
};

export default function Header({ LogoBurgerButton, HeaderUl, HeaderCartAvatar, setToggleHeader, setShowCart, showCart, cartState }: THeader) {
    return (
        <header className='max-xl:p-[0_32px_0_32px] border-b-[1px] h-[100px] border-solid border-[#E4E9F2] flex items-center justify-between'>
            <div className='flex min-w-[175px]! h-[100%] gap-[20px]! max-md:mr-[30px]! items-center'>

                <LogoBurgerButton setToggleHeader={setToggleHeader} />
                <HeaderUl />

            </div>

            <HeaderCartAvatar setShowCart={setShowCart} showCart={showCart} cartState={cartState} />

        </header>)
}
