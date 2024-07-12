import { BlockRenderer } from "component/BlockRenderer";
import { getPost } from "utils/getPost";

export default async function Home() {
  const data = await getPost("/");
  // if(!data){
  //    notFound();
  // }
 // console.log("HERE",{data});
  return (
    <div>
    <h1 className="italic">
    Hello
    </h1>
      <BlockRenderer blocks={data.post} />
      </div>
  );
}
