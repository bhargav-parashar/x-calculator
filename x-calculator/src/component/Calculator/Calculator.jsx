import React,{useState} from "react";
import styles from "./Calculator.module.css";
import Button from "../Button/Button.jsx";

const Calculator = () =>{
    const [input, setInput] = useState("");
    const [output,setOutput] = useState("");
    const handleInput = (e)=>{
        const inp = e.target.value;
        setInput((prev)=>prev+inp);
    };
    const handleClear = () =>{
        setInput("");
        setOutput("");
    };
    const handleEquate = ()=>{
        try{
            !input?setOutput("Error"):setOutput(eval(input));
        }catch(err){
            setOutput("Error");
        }
    };
    return(
        <div className={styles.wrapper}>
           <h1>React Calculator</h1>
           <input type="text" value={input} />
           <p>{output}</p>
           <div className={styles.grid}>
            <Button label={"7"} handleClick={handleInput}/>
            <Button label={"8"} handleClick={handleInput}/>
            <Button label={"9"} handleClick={handleInput}/>
            <Button label={"+"} handleClick={handleInput}/>
            <Button label={"4"} handleClick={handleInput}/>
            <Button label={"5"} handleClick={handleInput}/>
            <Button label={"6"} handleClick={handleInput}/>
            <Button label={"-"} handleClick={handleInput}/>
            <Button label={"1"} handleClick={handleInput}/>
            <Button label={"2"} handleClick={handleInput}/>
            <Button label={"3"} handleClick={handleInput}/>
            <Button label={"*"} handleClick={handleInput}/>
            <Button label={"C"} handleClick={handleClear}/>
            <Button label={"0"} handleClick={handleInput}/>
            <Button label={"="} handleClick={handleEquate}/>
            <Button label={"/"} handleClick={handleInput}/>
           </div>
        </div>
    )
};
export default Calculator;