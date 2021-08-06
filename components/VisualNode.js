import {Handle} from "react-flow-renderer";

export default function VisualNode({data, isConnectable}) {
    return (
        <>
            <Handle
                type="target"
                position="top"
                style={{background: '#555'}}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className="flex ">
                <div className="mr-4 flex-shrink-0">
                    <h4 className="text-lg font-bold">{data.name}</h4>
                </div>
                <div>
                    <ul className="divide-y divide-gray-200">
                        <li>{data.ip}</li>
                        <li>{data.mac}</li>
                    </ul>
                </div>
            </div>
            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{ bottom: -10, top: 'auto', background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
}
