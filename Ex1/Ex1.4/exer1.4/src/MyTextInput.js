import React, { useState } from "react";
import TextField from "@mui/material/TextField";
export default function MyTextInput(){
const [value, setvalue] = useState("")
return (
    <TextField
    label="Name"
    value={value}
    onChange={(e)=> setvalue(e.target.value)}
margin="normal"
/>
)
}