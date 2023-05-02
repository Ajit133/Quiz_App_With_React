import Answers from "../Answers";
import MiniPlyer from "../MiniPlyer";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answers />
        <ProgressBar />
        <MiniPlyer />
        </>
    );
};

export default Quiz;