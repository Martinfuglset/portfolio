import Link from "next/link"

const Box = ({ num }) => {

    const categories = [
        { label: 'Projects', line1: 'Housing price analysis', line2: 'NLP image generation', line3: 'Monte Carlo simulation', dots: '...'},
        { label: 'Abilities', line1: 'Python', line2: 'JavaScript', line3: 'R', dots: '...'},
        { label: 'CV', line1: 'View', dots: ''},
    ]

    return (
        <Link href={"/"+categories[num].label.toLowerCase()}>
            <div class="box-content h-32 w-80 border-t py-2 border-[#181818] dark:border-[#EFEFEF] hover:cursor-pointer">
                <div class="flex justify-between hover:underline">
                    <div>
                        <a>{categories[num].label}</a>
                    </div>
                    <div class="text-right">
                        {categories[num].line1}<br></br>
                        {categories[num].line2}<br></br>
                        {categories[num].line3}<br></br>
                        {categories[num].dots}
                    </div>
                </div>
            </div>
        </Link>
    )
  }
  
  export default Box