import {Handle} from "react-flow-renderer";
import {camera, computer, router} from "./Images";
import {internet} from "./Images"

export function MetadataNode({data,image,hasInput=true,hasOutput=true,isConnectable}) {
    let keys = Object.keys(data).filter(key=>key!=="name");
    const metadata = {};
    keys.forEach(key=>{
        metadata[key]=data[key];
    })
    return  <>
        {(!hasInput) ? null :
            <Handle
                type="target"
                position="top"
                style={{background: '#555'}}
                isConnectable={false}
            />
        }
        <div className="flex ">
            <div className="mr-4 flex-shrink-0">
                {image}
                {data.name?<h4 className="text-lg font-bold">{data.name}</h4>:null}
            </div>
            <div>
                <ul className="divide-y divide-gray-200">
                    {Object.keys(metadata).map((entry,index)=>{
                        return  <li key={index}>{entry} : {metadata[entry]}</li>
                    })}
                </ul>
            </div>
        </div>
        {(!hasOutput) ? null :
            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{bottom: -10, top: 'auto', background: '#555'}}
                isConnectable={false}
            />
        }
    </>
}
export function RouterNode({data, isConnectable}) {
    return (
       <MetadataNode data={data} image={router} isConnectable={isConnectable} onConnect={data.onConnect}/>
    );
}
export function CameraNode({data, isConnectable}) {
    return (
        <MetadataNode data={data} image={camera} isConnectable={isConnectable} hasOutput={false} onConnect={data.onConnect}/>
    );
}
export function ComputerNode({data,isConnectable}){
    return <MetadataNode image={computer} hasOutput={false} data={data} isConnectable={isConnectable}/>

}
export function Internet({isConnectable}){
    return <MetadataNode image={internet} hasInput={false} data={{}} isConnectable={isConnectable}/>
}
export default  {
    MetadataNode : MetadataNode,
    Internet : Internet,
    CameraNode : CameraNode,
    ComputerNode : ComputerNode,
    RouterNode : RouterNode
}