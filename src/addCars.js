import "../src/Mycomponents/addCars.css"
import React, {useState} from "react";

function AddCars(props){
    
    // const [carName, setCar] =useState("");
    // const [price, setPrice] =useState("");
    // const [Warantee, setWarantee] =useState("");


    const AddToCart = (item)=> {
        props.AddtoCart(item);
        
    }



    return(
        <div className="mydiv">
            <h1 className="h1">********Car Sales********</h1>
            <table border="1">
                <tbody>
                 <tr>
                    <td>
                        <h1>2018 Ford Ranger</h1>
                        <h3>R350 000</h3>
                        <h3>4 years Warantee</h3>
                            {/* <select>
                            <option value=" ">Available Cars</option>
                            <option value="Jaguar Sport" >Jaguar Sport</option>
                            <option value="Mustang GT 500">Mustang GT 500</option>
                            <option value="BMW Z4">BMW Z4</option>
                            <option value="Mecerdes AMG">Mecerdes Benz GLE</option>
                            <option value="Toyota Sport">Toyota Sport</option>
                            <option value="Mustang Mach1">Mustang Mach1</option>
                            <option value="Porche Turbo 911">Porche Turbo 911</option>
                            </select>{""}<br></br> */}
                            <button  onClick={()=>AddToCart({
                                carName:"2018 Ford Ranger", price:"R350 000", Warantee:"4 years", km:"56 000" ,topSpeed:"240 km/h",Manual:"Gear 7"
                                })}>
                                    Add to cart
                            </button>

                    </td>
    
                        <td>
                            <h1>2017 Toyota Corolla Quest</h1>
                            <h3>R120 000</h3>
                            <h3>4 years Warantee</h3>
                            {/* <select onChange={(e)=> setsuvRange(e.target.value)}>
                            <option value="Available Cars">Available Cars</option>
                            <option value="Jaguar SUV">Jaguar SUV</option>
                            <option value="Mustang SUV">Mustang SUV</option>
                            <option value="BMW X6">BMW X6</option>
                            <option value="Mecerdes Benz GLC">Mecerdes Benz GLC</option>
                            <option value="Toyota SUV">Toyota SUV</option>
                            <option value="Dodge Journey">Dodge Journey</option>
                            <option value="Porche Chayyenne">Porche Chayyenne</option>
                            </select>{""}<br></br> */}
                         <button  onClick={()=>AddToCart({
                            carName:"Toyota Corolla Quest", price:"R120 000", Warantee:"4 years", km:"100 000", topSpeed:"220km/h", Automatic:"Gear 5"
                            })}>
                                Add to cart
                        </button>

                        </td>

                        <td>
                            <h1>2019 BMW M4</h1>
                            <h3>R900 000</h3>
                            <h3>4 years Warantee</h3>
                            {/* <select onChange={(e)=> setBakkieRange(e.target.value)}>
                            <option value="Available Cars">Available Cars</option>
                            <option value="Mitsubishi bakkie">Mitsubishi Bakkie</option>
                            <option value="Ford Ranger">Ford Ranger</option>
                            <option value="Toyoya Legend 45">Toyota Legend 45</option>
                            <option value="Mecerdes Benz G-Class">Mecerdes Benz G-Class</option>
                            <option value="Toyota Legend 50">Toyota Legend 50</option>
                            <option value="Isuzu Bakkie">Isuzu Bakkie</option>
                            <option value="GWM Bakkie">GWM Bakkie</option>
                            </select>{""}<br></br> */}
                         <button  onClick={()=>AddToCart({
                            carName:"2019 BMW M4", price:"R900 000", Warantee:"7 years", km:"72 000",topSpeed:"260 km/h", Automatic:"Gear 5"
                            })}
                            >Add to cart
                            </button>

                        </td>
                        <td>
                            <h1>2016 Ford fiesta</h1>
                            <h3>R200 000</h3>
                            <h3>5 years Warantee</h3>
                            <button  onClick={()=>AddToCart({
                                carName:"2016 Ford Fiesta", price:"R200 000", Warantee:"5 years", km:"82 000", topSpeed:"230km/h", Manual:"Gear 6"
                                })}>
                                Add to cart
                            </button>

                        </td>
         
                </tr>
                <tr>
                    <td>
                        <h1>2016 Renualt Clio</h1>
                        <h3>R150 000</h3>
                        <h3>6 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2016 Renualt Clio", price:"R150 000", Warantee:"6 years", km:"82 000", topSpeed:"230km/h", Manual:"Gear 5"
                            })}>Add to cart</button>
                    </td>
                    <td>
                        <h1>2019 Mecerdes Benz Viano</h1>
                        <h3>R1 200 000</h3>
                        <h3>9 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2019 Mecerdes Benz Viano", price:"R1 200 000", Warantee:"9 years", km:"82 000", topSpeed:"260km/h", Automatic:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                    <td>
                        <h1>2020 Porche Chayyenne</h1>
                        <h3>R1 300 000</h3>
                        <h3>5 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2020 Porche Chayyenne", price:"R1 300 000", Warantee:"5 years", km:"87 000", topSpeed:"280km/h", Manual:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                    <td>
                        <h1>2018 Mustang GT350i</h1>
                        <h3>R1 500 000</h3>
                        <h3>8 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2018 Mustang GT350i", price:"R1 500 000", Warantee:"8 years", km:"93 000", topSpeed:"320km/h", Automatic:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>2019 Mecerdes Benz ML GT350i</h1>
                        <h3>R1 500 000</h3>
                        <h3>7 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2019 Mustang GT350i", price:"R1 500 000", Warantee:"7 years", km:"132 000", topSpeed:"300km/h", Automatic:"Gear 8"
                            })}>Add to cart</button>

                    </td>
                    <td>
                        <h1>2018 BMW 320d GT</h1>
                        <h3>R650 000</h3>
                        <h3>8 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2018 Mustang GT350i", price:"R1 500 000", Warantee:"8 years", km:"123 000", topSpeed:"320km/h", Automatic:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                    <td>
                        <h1>2018 Dodge SRT</h1>
                        <h3>R1 000 000</h3>
                        <h3>6 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2018 Mustang GT350i", price:"R1 000 000", Warantee:"6 years", km:"111 000", topSpeed:"320km/h", Manual:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                    <td>
                        <h1>2021 Hyndai i30N</h1>
                        <h3>R550 000</h3>
                        <h3>6 years Warantee</h3>
                        <button  onClick={()=>AddToCart({
                            carName:"2018 Mustang GT350i", price:"R1 500 000", Warantee:"6 years", km:"193 000", topSpeed:"320km/h", Automatic:"Gear 8"
                            })}>Add to cart</button>
                    </td>
                </tr>
                </tbody>
</table>
</div>
    )
}
export default AddCars;
