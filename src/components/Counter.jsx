import { Button, Stack } from "@mui/material"
import { useContext } from "react"
import { CounterContext } from "../contexts/counterContextWithReducer"
import Box from "@mui/material";
import { decrement as dec, increment as inc, reset as res, incrementbyn, selectCount } from "../store/reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {

    const { count, title, increment, decrement, reset } = useContext(CounterContext);
    const countByRedux=useSelector(selectCount);

    const dispatch = useDispatch();

    const plus = () => dispatch({ type: "INCREMENT" });
    // const plus = () => dispatch(inc());
    const minus = () => dispatch(dec());
    const clear = () => dispatch(res());
    

    return (
        <>
            <Stack spacing={2} alignItems="center">
                <h2>Counter Manager</h2>
                <h3>{title} {count}</h3>
                <Stack>
                    <Button variant="contained" onClick={() => increment(1)}>(Increment+1)</Button>
                    <Button variant="contained" color="success" onClick={() => decrement(1)}>(Decrement-1)</Button>
                    <Button variant="contained" color="error" onClick={reset}>Clear</Button>
                </Stack>
                <Stack>
                    <Button variant="contained" onClick={() => increment(2)}>Increment(+2)</Button>
                    <Button variant="contained" color="success" onClick={() => decrement(2)}>Decrement(-2)</Button>
                    <Button variant="contained" color="error" onClick={reset}>Clear</Button>
                </Stack>
            </Stack>

             <Stack spacing={2} alignItems="center">
                <h2>Counter Manager using React/Redux</h2>
                <h3>{countByRedux}</h3>
                <Stack>
                    <Button variant="contained"onClick={plus}>Increment</Button>
                    <Button variant="contained" color="success" onClick={minus}>Decrement</Button>
                    <Button variant="contained" color="error" onClick={clear}>Reset</Button>
                    <Button variant="contained"  onClick={ () => dispatch(incrementbyn(2))}>Increment on 2</Button>

                </Stack>
            </Stack> 
        </>
    )
}