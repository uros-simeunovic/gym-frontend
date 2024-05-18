import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrainingsPage = () => {
  return (
    <div className="p-4">
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default TrainingsPage;
