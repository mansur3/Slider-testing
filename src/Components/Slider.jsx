import {useState} from "react";
import {nanoid} from "nanoid";
import {Show} from "./ShowOne";


export const Slider = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [page, setPage] = useState(0);
    const [prevdisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

    const initState = {
        id : 1,
        question : "",
        answer : ""
    }
    const [QA, setQA] = useState([initState]);

    const handlePrev = () => {
        if(page === 0) {
            setPrevDisabled(true);
        } else {
            setPrevDisabled(false);
        }
        setPage(page - 1);

    }
    const handleNext = () => {
        if(page <= QA.length - 1) {
            if(page === QA.length - 1) {
                setNextDisabled(true);
            } else {
                setNextDisabled(false);
            }
            setPage(page + 1);
        }
        
    }


    return (
        <div>
            <div>
            <input data-testid = "question"  onChange = {(e) => setQuestion(e.target.value)} type = "text" placeholder = "Enter the question" /><br />
            <input  data-testid = "answer" onChange = {(e) => setAnswer(e.target.value)} type = "text" placeholder = "Enter the answer" /> <br />
            <button data-testid = "addbtn" onClick = {() => { 
                const data = {
                    id : nanoid(4),
                    question : question,
                    answer : answer
                }
                setQA([...QA, data])
            }}>ADD</button>
            </div>
            <div>
                
                    <Show data = {QA[page]} />
               
            </div>
            <div>
                {
                    prevdisabled ? (
                        <button disabled onClick = {handlePrev}>Prev</button>
                    ) : (
                        <button  onClick = {handlePrev}>Prev</button>
                    )
                }
                {
                    nextDisabled ? (
                        <button disabled >Next</button>
                    ) : (
                        <button onClick = {handleNext}>Next</button>
                    )

                }
                
                
            </div>
            
        </div>
        
    )
}