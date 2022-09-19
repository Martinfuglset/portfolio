
const Box2 = ({ org, loc, deg, per, deg2, per2 }) => {

    return (
        <div class="box-content h-28 w-96 border-t py-2 border-[#181818] dark:border-[#EFEFEF] leading-relaxed">
            <div class="flex justify-between">
                <div className="w-45">
                    <a>{org}</a><br></br>
                    <div className="h-6"></div>
                    <a>{deg}</a><br></br>
                    <a>{deg2}</a>
                </div>
                <div class="text-right w-52">
                    <a>{loc}</a><br></br>
                    <div className="h-6"></div>
                    <a>{per}</a><br></br>
                    <a>{per2}</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Box2