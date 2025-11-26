import React, { useEffect, useState } from "react";

export default function FormComponent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [storedData, setStoredData] = useState([])

    useEffect(() => {
        let localData = localStorage.getItem('formValues');

        console.log("locaData", JSON.parse(localData));
        let parsedData = JSON.parse(localData);

setStoredData(parsedData)

    }, [])

    const onSubmit = (e) => {

        e.preventDefault()
 console.log("dataValues",storedData);

        let dataValues = []

     
        if(storedData && storedData.length){
        dataValues.push(...storedData,formData)
        
        }else{
             dataValues.push(storedData,formData)
        }
        console.log("dataValues",dataValues);
        


        // console.log("formData", formData);

        localStorage.setItem("formValues", JSON.stringify(dataValues))
        

        // setFormData({ name: "",
        // email: "",
        // message: ""})

    }

    const onChange = (e) => {

        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="form-class">
            <form className="form" onSubmit={onSubmit}>
                <label>Name</label>
                <input name="name" onChange={onChange}>
                </input>
                <label>Email</label>
                <input name="email" onChange={onChange}>
                </input>
                <label>Message</label>
                <input name="message" onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}