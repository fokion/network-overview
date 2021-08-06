import ReactFlow from 'react-flow-renderer';
import VisualNode from "./VisualNode";

const elements = [
    {
        id: '1',
        type: 'input', // input node
        data: { label: 'Cosmote Router' },
        position: { x: 250, y: 25 },
    },
    {
        id: '2',
        type : "router",
        data: { name:"TPLINK" , ip : "192.168.1.1", mac: "84:16:F9:59:7C:1D" },
        position: { x: 100, y: 125 },
    },
    {
        id: '3',
        type : "router",
        data: { name:"TPLINK NAS", ip:"192.168.1.111", mac:"B0:95:75:5F:23:15"},
        position: { x: 250, y: 250 },
    },
    {
        id: '4',
        type : "router",
        data: { name:"NAS", ip:"192.168.1.105", mac:"b8:27:eb:23:c4:f5"},
        position: { x: 250, y: 250 },
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e2-3', source: '3', target: '4'},

];
const onLoad = (reactFlowInstance) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
};
export default function GraphNode(){
    return (
        <ReactFlow onLoad={onLoad}
                   nodeTypes={{router:VisualNode}}
                       snapToGrid={true}
                       snapGrid={[15, 15]}
                       elements={elements}
        />
    );
};