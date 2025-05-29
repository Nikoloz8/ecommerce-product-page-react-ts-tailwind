
import type { Dispatch, SetStateAction } from "react"

type TBurgerMenu = {
    toggleHeader: boolean
    setToggleHeader: Dispatch<SetStateAction<boolean>>
    HeaderBurgerbarUl: React.FC
}

export default function BurgerMenu({ toggleHeader, setToggleHeader, HeaderBurgerbarUl }: TBurgerMenu) {
    return (
        <div className={`w-[250px] p-[25px]! min-md:hidden! h-[100vh] absolute z-100 bg-[#FFFFFF] ${toggleHeader ? "block" : "hidden"}`}>

            <img src="/images/icon-close.svg" onClick={() => setToggleHeader(false)} alt="" />

            <HeaderBurgerbarUl />

        </div>)
}
