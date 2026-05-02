import PollOption from "./PollOption"

function PollList ({options, vote, hasVoted}) {

    const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
    
    return (
        <div>
            {options.map((option) => (
                <PollOption 
                    key={option.id}
                    option={option}
                    totalVotes={totalVotes}
                    vote={vote}
                    hasVoted={hasVoted}
                />
            ))}
        </div>
    )
}

export default PollList;