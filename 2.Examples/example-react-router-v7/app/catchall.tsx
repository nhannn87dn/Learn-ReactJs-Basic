import { useNavigate } from "react-router";
import { Button } from "./components/ui/button";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <main className="container mx-auto">
        <h1 className="text-3xl font-bold underline">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
    </main>
  )
}

export default NotFoundPage