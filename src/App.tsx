import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Firebase Connected ✅</h1>
    </div>
  );
}

export default App;
