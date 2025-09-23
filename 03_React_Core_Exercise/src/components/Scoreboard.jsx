function Scoreboard({total, leaderLabel, status, onReset}) {
    return(
        <section>
            <div>
                <strong>Ukupno glasova: </strong>
                <span>{total}</span>
            </div>
            <div>
                <strong>Najbolji tim: </strong>
                <span>{leaderLabel}</span>
            </div>
            <div>
                <strong>Status:</strong>
                <span>{status}</span>
            </div>
            <button type="button" onClick={onReset}>Resetiraj</button>
        </section>
    )
}

export default Scoreboard