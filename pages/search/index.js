import { useRouter } from "next/router";

const SearchPage = ({ params }) => {
const {query} = useRouter();


  return (<><div>  <code> {JSON.stringify(query,null , 2 )} </code> </div> </>);
};

export default SearchPage;
