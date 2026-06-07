import heroImg from './assets/hero.png';

function Cards({money}) {
  return (
    <>
      <img src={heroImg} alt="The Rides" className="w-64 rounded-lg" />
      <h1>The Rides : {money}</h1>
    </>
  )
}
export default Cards
