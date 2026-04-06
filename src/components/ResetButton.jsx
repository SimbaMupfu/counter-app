export default function ResetButton({ resetMethod }){

    return (
        <div className="Reset">
            <button
            className="resetButton"
            onClick={resetMethod}>
                Reset
            </button>
        </div>
    )
}