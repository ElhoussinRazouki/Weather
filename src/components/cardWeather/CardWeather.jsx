
const CardWeather = ({day,imgW,dog}) => {
  return (
    <>
<div className=" flex flex-col p-3 items-center bg-white w-28  h-32 rounded-xl ">
    <p className="">{day}</p>
    <img src={imgW} alt=""  />
    <p>{dog}</p>


</div>
    </>
  )
}

export default CardWeather
