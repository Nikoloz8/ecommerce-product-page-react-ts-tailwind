export default function LogoBurgerButton({ setToggleHeader }: { setToggleHeader: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <>
            <button>
                <img onClick={() => setToggleHeader(true)} src="/images/icon-menu.svg" className='mt-[4px]! max-md:block hidden' alt="" />
            </button>
            <img src="/images/logo.svg" className='min-md:mr-[30px]!' alt="" />
        </>
    )
}
