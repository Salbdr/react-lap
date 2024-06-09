export default function ({name, languges, years, companyName}) {
    return(

         <div>
            <button style={{backgroundColor: companyName==="Twuaq" ? "#a55eea" : "" }}> 
                <h2>{name}</h2>
                <p>languges:{languges}</p>
                <p>years of work:{years}</p>
                <p>company:{companyName}</p>
            </button>
         </div>
    )
}