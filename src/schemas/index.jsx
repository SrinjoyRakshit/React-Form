import * as Yup from 'yup'

export const  signupSchema =  Yup.object({
    firstname: Yup.string().min(2).max(20).required("Please enter a valid name !"),
    lastname: Yup.string().min(2).max(20).required("Please enter a valid name !"),
    username: Yup.string().min(2).max(10).required("Username must be at least 8 characters !"),
    email: Yup.string().email().required("Please enter your  email !"),
    password: Yup.string().min(8).required("Password must be strong !"),
    number: Yup.number().required("Please enter a valid mobile number"),
    country: Yup.string().required("Select your country !"),
    city: Yup.string().required("Select your city !"),
    panNumber: Yup.string().max(10).required("Pan number must be of 10 digits !"),
    aadharNumber: Yup.string().max(12).required("Aadhar number must be of 2 digits !")
})