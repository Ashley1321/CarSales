import React from "react"
import "./Mycomponents/display.css"

function DisplayBookmark(props){
    return(
        <div>
            {props.list.map((display,cars)=>(
                <div key={cars} className="output">
                    <h1>My Cart</h1>
                    <hr></hr>
                    <div>
                        <h3>{display.carName}</h3>
                    </div>

                    <div>
                        <h3>{display.price}</h3>
                    </div>
                    
                    <div>
                        <h3>{display.Warantee}</h3>
                    </div>

                    <div>
                        <h3>{display.km}</h3>
                    </div>

                    <div>
                        <h3>{display.topSpeed}</h3>
                    </div>

                    <div>
                        <h3>{display.Manual}</h3>
                    </div>

                    <div>
                        <h3>{display.Automatic}</h3>
                    </div>

                </div>

            ))}
            
        </div>
    )
}

export default DisplayBookmark;