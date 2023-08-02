import { useEffect, useRef } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/cart";

function App() {
  const { userDetail } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const counterRef = useRef(1);
  useEffect(() => {
    dispatch(fetchUser(counterRef.current));
  }, []);

  const loadMoreUsers = () => {
    dispatch(fetchUser(++counterRef.current));
  };
  return (
    <>
      <Header />
      <pre style={{ color: "white" }}>
        {JSON.stringify(userDetail, undefined, 4)}
      </pre>
      <button onClick={loadMoreUsers}>Add more Users</button>

      <ProductList />
    </>
  );
}

export default App;
