import Link from 'next/link'
import Box2 from '../components/Box2'
import Button from '../components/Button'

export default function CV() {
  return (
      <main>
        <div className='flex justify-around px-20 space-x-10'>
          <div>
            <div class="h-32"></div>
            <h1 className="text-5xl leading-loose">
              Education
            </h1>
            <div class="h-32"></div>
            <Box2 org={'Handelshøyskolen BI'} loc={'Oslo, Norway'} deg={'Bachelor of Economics'} per={'aug 2020 - aug 2023'}/>
          </div>
          <div>
            <div class="h-32"></div>
            <h1 className="text-5xl leading-loose">
              Experience
            </h1>
            <div class="h-32"></div>
            <Box2 org={'Fuglset Konsult'} loc={'Oslo, Norway'} deg={'Business Analyst'} per={'nov 2021 - current'}/>
            <Box2 org={'Equinavia'} loc={'Connecticut, USA'} deg={'Business Analyst'} per={'oct 2019 - jul 2020'} deg2={'Account Manager'} per2={'jun 2018 - jun 2020'}/>
          </div>
          <div>
            <div class="h-32"></div>
            <h1 className="text-5xl leading-loose">
              Certifications
            </h1>
            <div class="h-32"></div>
            <Box2 org={'IBM Python for Data Science, AI & Development'} loc={'jun 2021'} deg={'Link ->'}/>
            <Box2 org={'Bloomberg Market Concepts'} loc={'oct 2020'} deg={'Link ->'}/>
          </div>
        </div>
        <div className='h-32'></div>
        <div className='flex justify-center'>
          <Button text={'Download'} link={'https://drive.google.com/file/d/1yGwirkyA8Mwr1J7GoqDUVsQf0Rrzr1QT/view?usp=sharing'}/>
        </div>
      </main>
  )
}

