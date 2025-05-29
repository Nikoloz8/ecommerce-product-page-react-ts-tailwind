export default function HeaderBurgerbarUl() {

    const liArray = ["Collections", "Men", "Women", "About", "Contact"]
    const liStyle = "text-[1.8rem] font-[700] text-[#1D2026] leading-[26px]"

    return (
        <ul className='flex flex-col mt-[50px] gap-[20px]'>
            {
                liArray.map((e, index) => {
                    return <li key={index} className={`${liStyle}`}>{e}</li>
                })
            }
        </ul>
    )
}
