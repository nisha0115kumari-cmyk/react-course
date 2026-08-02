import { Header } from "../../components/Header";
import './NotFoundPage.css';

export function NotFoundPage({cart}){
  return(
    <>
    <title>Error</title>

    <Header cart={cart}/>

    <div className="not-found-message">
      Page not Found(404)
      </div>
    </>
  );
}