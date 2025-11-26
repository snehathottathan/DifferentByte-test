import React, { useEffect, useState } from "react";
import './FromComponent.scss'
export default function FormComponent() {

    //state to store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    //state to store local data
    const [storedData, setStoredData] = useState([])

    useEffect(() => {

        let localData = localStorage.getItem('formValues');

        let parsedData = localData ? JSON.parse(localData) : [];


        setStoredData(parsedData)

    }, [])

    /**
     * 
     * @param {*} e 
     */
    const onSubmit = (e) => {

        e.preventDefault()
      

        let dataValues = []

        let localData = localStorage.getItem('formValues');

        let parsedData = localData ? JSON.parse(localData) : [];
        dataValues.push(...parsedData, formData)


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