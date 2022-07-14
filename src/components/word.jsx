import { useParams } from "react-router-dom";


const Word = () => {
    const { word } = useParams();
    const { color } = useParams();
    const { bgcolor } = useParams();

    return (
        <div style={{backgroundColor: bgcolor}} className="w-50 mx-auto p-3 border border-secondary mt-3">
            <h1 style={{color: color}}>
                The {isNaN(word) ?
                    'word'
                    : 'number'
                } is: {word}
            </h1>
        </div>
    )
}
export default Word;