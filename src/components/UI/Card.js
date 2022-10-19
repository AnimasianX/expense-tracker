import "./Card.css";

const Card = (props) => {
    const classes = 'card ' + props.className;//If we want to add additional css class styling to our component, we can get it from the props.className property.
    //so whatever we set className to be in our ExpenseItem file under our Card component, it will render it with whatever we already have here.
    return (
        <div className={classes}>{props.children}</div>//props.children will take whatever is in between our opening and closing component tag used in 
        //ExpenseItem and render whatever html is in between as the children of our Card component.
    )
}

export default Card;