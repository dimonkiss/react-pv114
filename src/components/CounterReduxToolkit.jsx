import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { 
    increment,
    decrement,
    reset,
    incrementByNumber 
} from "../storeReduxToolkit/counterSlice";
import { useState } from "react";

const CounterReduxToolkit = () => {
    //get data state from store redux
    const count = useSelector((state) => state.counter.count);
    const title = useSelector((state) => state.counter.title);
    // set
    const dispatch = useDispatch();
    const [incValue, setIncValue]=useState(0);    
    return (
        <>
            <Stack spacing={2} alignItems="center">
                <h2>Counter Manager</h2>
                <h4>{title} {count}</h4>
                <input
                    type="number"
                    value={incValue}
                    onChange={(event)=>setIncValue(event.target.value)}                
                />
                <Stack>
                    <Button variant="contained" onClick={() => dispatch(increment())}>Increment+1</Button>
                    <Button variant="contained" color="success" onClick={() => dispatch(decrement())} >Decrement-1</Button>
                    <Button variant="contained" color="error" onClick={() => dispatch(reset())}>Clear</Button>
                    <Button variant="contained"  onClick={() => dispatch(incrementByNumber(Number(incValue)))}>Add Number</Button>
               
               </Stack>
            </Stack>
        </>
    )
}

export default CounterReduxToolkit;