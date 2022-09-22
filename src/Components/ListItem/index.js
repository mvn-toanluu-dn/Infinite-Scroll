import { useEffect, useRef, useState } from "react";
import Item from "../Modules/Item/index";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const userRef = useRef();
  useEffect(() => {
    const getData = async (load) => {
      if (load) {
        await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
          .then((res) => res.json())
          .then((json) => {
            setUsers([...users, ...json.data]);
            setTotalPage(json.total_pages);
          })
          .catch((err) => console.log(err));
      }
    };
    getData(loading);
    setLoading(false);
  }, [users, loading, pageNumber, setUsers]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        userRef.current.clientHeight + userRef.current.offsetTop
      ) {
        setLoading(true);
        if (pageNumber < totalPage) {
          setPageNumber(pageNumber + 1);
        }
        if(pageNumber === totalPage) {
            setLoading(false);
        }
      }
    });
    return () => {
        window.removeEventListener("scroll", null);
    }
  }, [users, pageNumber, totalPage]);

  return (
    <>
      <h2 className="title">List User</h2>
      <ul ref={userRef} className="user-list">
        {users.map((user, index) => {
          return <Item user={user} key={index} index={index} />;
        })}
      </ul>
    </>
  );
};

export default User;
