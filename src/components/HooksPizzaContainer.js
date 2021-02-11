import { useSelector, useDispatch } from 'react-redux'
import { buyPizza } from '../redux'

function HooksPizzaContainer(){
    const numOfPizza = useSelector(state => state.pizza.numOfPizza)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Pizza - {numOfPizza}</h2>
            <button onClick={
                ()=> dispatch(buyPizza())
            }>Buy Pizza</button>
        </div>
    )
}

export default HooksPizzaContainer