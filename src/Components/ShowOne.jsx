

const Show = ({data}) => {
    return (
        <div style = {{border : "1px solid black"}} key = {data.id}>
            <p>Question : {data.question}</p>
            <p> Answer : {data.answer}</p>
        </div>
    )
}
export {Show};