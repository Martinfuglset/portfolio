import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
      <main>
        <div className='content-center flex'>
          <div className='text-7xl leading-relaxed'>
            <a href='/projects'>Projects</a><br></br>
            <a href='/abilities'>Abilities</a><br></br>
            <a href='/cv'>CV</a><br></br>
          </div>
          <Spline class="scale-75" scene="https://prod.spline.design/Zn4pPGV65ax0UvRZ/scene.splinecode" /> 
        </div>
      </main>
  )
}
