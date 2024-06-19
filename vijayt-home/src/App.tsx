import { useState } from 'react'

function App() {

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <div className="bg-yellow-100 p-3 rounded-lg shadow min-w-96 min-h-80">
        <div className="text-4xl text-center text-red-600 mb-4">Vijay T</div>
        <ul className="text-lg">
          <li>Software engineer for 25 years</li>
          <li>Interests: React, TypeScript, Express, Flask</li>
          <li>Works in Cerebras. Previously, Dandi</li>
          <li>ReactJS and TypeScript work: 
            <ul className="list-disc list-inside indent-4">
              <li>Custom dashboards & reports made using SVG</li>
              <li>Draw routes and heatmap in canvas</li>
              <li>Used WebGL based PixiJS</li>
              <li>Sankey charts using plain SVG</li>
              <li>Used Material UI, Radix UI, antd, Tailwind</li>
            </ul>
          </li>
          <li className="mt-4">Email to vijay@vijayt.com for ReactJS work</li>
        </ul>
      </div>
    </div>
  )
}

export default App
