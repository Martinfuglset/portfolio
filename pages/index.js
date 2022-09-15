import Box from '../components/Box'

export default function Home() {
  return (
      <main>
          <h1 className="text-7xl leading-loose">
            Portfolio
          </h1>
          <div class="h-28"></div>
          <Box num={0}/>
          <Box num={1}/>
          <Box num={2}/>
        </main>
  )
}