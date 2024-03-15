import svg from '../../assets/react.svg'
const Header = () => {
  return (
    <div className='flex justify-between py-9 border-b-2 border-current'>
        <div className="text-4xl font-bold">Knowledge Cafe</div>
        <img src={svg} alt="" />
    </div>
  )
}

export default Header