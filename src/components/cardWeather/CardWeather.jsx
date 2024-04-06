
const CardWeather = ({day,imgW,dog}) => {
  return (
    <>
<div className=" flex flex-col justify-between  p-3 items-center bg-white w-44 h-32 rounded-xl">
    <p className="">{day}fzfz</p>
    <img src={imgW} alt=""  />
    <p>{dog}zdefcez</p>


</div>
    </>
  )
}

export default CardWeather
