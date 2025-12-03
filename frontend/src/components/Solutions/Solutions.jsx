import TopSolution from "./TopSolution";
import BottomSolution from "./BottomSolution";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="Solutions v-border-container">
      <div className="solution-title">Top Solutions</div>
      <TopSolution />
      <BottomSolution />
    </div>
  );
};

export default Solutions;
