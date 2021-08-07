
import Graph from "../components/Graph";
import {server} from "../components/config";
import {useEffect} from "react";


export default function Home({elements}) {

  return (
      <div className="h-screen bg-gray-100">
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl w-screen mx-auto sm:px-6 lg:px-8" style={{height:"48rem"}}>
                <Graph elements={elements}/>
            </div>
          </main>
        </div>
      </div>
  )
}
export async function getServerSideProps() {
    const res = await fetch(`${server}/api/endpoints`)
    const rawElements = await res.json()
    const elements = rawElements.nodes;
    return {
        props: {
            elements,
        },
    }
}
