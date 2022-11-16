import Box from '../components/Box'
import Spline from '@splinetool/react-spline';


export default function Home() {
  return (
      <main>
        <div class="h-32"></div>
        <h1 className="text-7xl leading-loose">
          Portfolio
        </h1>
        <div class="h-32"></div>
        <div class="flex gap-72">
          <div>
            <Box num={0}/>
            <Box num={1}/>
            <Box num={2}/>
          </div>
            <Spline class="scale-75" scene="https://draft.spline.design/aMVqo3z2bhQ2CNvk/scene.splinecode" /> 
        </div>
      </main>
  )
}
