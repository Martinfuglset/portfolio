import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
      <main className='flex justify-around px-20 space-x-10'>
        <div className='flex flex-row content-center'>
          <div className='text-7xl leading-relaxed ml-64'>
            <div className='h-72'></div>
            <a className='hover:underline' href='/projects'>Projects</a><br></br>
            <a className='hover:underline' href='/abilities'>Abilities</a><br></br>
            <a className='hover:underline' href='/cv'>CV</a><br></br>
          </div>
          <Spline class="scale-75" scene="https://prod.spline.design/Zn4pPGV65ax0UvRZ/scene.splinecode" />
        </div>
      </main>
  )
}
