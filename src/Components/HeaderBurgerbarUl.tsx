export default function HeaderBurgerbarUl() {

    const liStyle = "text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]"

    return (
        <ul className='flex flex-col mt-[50px] gap-[20px]'>
            <li className={`${liStyle}`}>Collections</li>
            <li className={`${liStyle}`}>Men</li>
            <li className={`${liStyle}`}>Women</li>
            <li className={`${liStyle}`}>About</li>
            <li className={`${liStyle}`}>Contact</li>
        </ul>
    )
}
