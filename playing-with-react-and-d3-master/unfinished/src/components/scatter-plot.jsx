import React from 'react';
import d3 from 'd3';
import DataCircles from './data-circles';
import XYAxis from './x-y-axis';

// Largest X
const xMax = data => d3.max(data, d => d[0]);

// Largest y
const yMax = data => d3.max(data, d => d[1]);

// Scales
const xScale = (props) => {
  return d3.scale.linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
}

const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (
    <svg width={props.width} height={props.height}>
      <DataCircles {...props} {...scales} ></DataCircles>
      <XYAxis {...props} {...scales}/>
    </svg>
  )
}