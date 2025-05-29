
export default function HeaderUl() {

    const liStyle = "hover:text-[#1D2026] items-center flex h-[100%] border-b-[4px] border-solid border-[#FFFFFF] hover:border-[#FF7E1B] pt-[8px]!"
    const liArray = ["Collections", "Men", "Women", "About", "Contact"]

    return (
        <ul className={`max-md:hidden flex gap-[30px] h-[100%] items-center text-[1.5rem] font-[400] leading-[26px] text-[#69707D]`}>
            {liArray.map((e, index) => {
                return <li key={index} className={`${liStyle}`}><a href="#">{e}</a></li>
            })}

        </ul>)
}
