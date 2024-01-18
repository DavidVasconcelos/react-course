import { useLoaderData } from "react-router-dom";

function GitHub() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/DavidVasconcelos")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/DavidVasconcelos");
  return response.json();
};
