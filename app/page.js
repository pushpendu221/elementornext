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
      <style>{`
        
        .section-container{
            display: flex;
            margin-right: auto;
            margin-left: auto;
            position: relative;
            max-width:1120px;
        }
      `}</style>
      <BlockRenderer blocks={data.post} />
      </div>
  );
}
