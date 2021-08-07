import ReactFlow, {Controls, MiniMap} from 'react-flow-renderer';

import {CameraNode, ComputerNode, Internet, MetadataNode, RouterNode} from "./Nodes";


export default function Graph({elements}) {
    const onLoad = (reactFlowInstance) => {
        console.log('flow loaded:', reactFlowInstance);
        reactFlowInstance.fitView();
    };
    const onConnect = (params)=>{
        console.log(params)
    }

    return (
        <ReactFlow onLoad={onLoad}
                   nodeTypes={
                       {
                           router: RouterNode,
                           internet: Internet,
                           camera : CameraNode,
                           computer : ComputerNode
                       }
                   }
                   onConnect={onConnect}
                   defaultZoom={0.5}
                   snapToGrid={true}
                   snapGrid={[15, 15]}
                   elements={elements}
        >
            <MiniMap/>
            <Controls/>
        </ReactFlow>
    );
};