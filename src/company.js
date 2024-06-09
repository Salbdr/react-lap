import Employ from "./Employ"
export default function(props) {
    return(
        <div>
            <div style={{textAlign:"center"} }>
            <h1>companyName:{props.name}</h1>
            <p>worker number:{props.workerN}</p>
            <p>year of founded:{props.year}</p>
            <p>services:{props.services}</p>
            <p>work price :{props.price}</p>
            </div>
            <h1  style={{textAlign:"center"}}>Employers:</h1>
          <div  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Employ name={props.name1} languges={props.languges1} years={props.years1} companyName={props.name}/>
            <Employ name={props.name2} languges={props.languges2} years={props.years2} companyName={props.name}/>
            <Employ name={props.name3} languges={props.languges3} years={props.years3} companyName={props.name}/>
            <Employ name={props.name4} languges={props.languges4} years={props.years4} companyName={props.name}/>
            </div>
        </div>
    )
}
