import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component{

  componentDidMount(){
    d3.csv("../data/MasterlistData.csv", function(d) {
      return {
        address : d.Address,
        dbn : d.DBN
      };
}, function(d) {
  let data = d3.csv("/MasterlistData.csv", function(data) {

      // render(data);
  console.log(data);
});
})};
//
//   draw(){
//     const svg = d3.select("svg"),
//       margin = {top: 50, right: 20, bottom: 50, left: 50},
//       width = 960 - margin.left - margin.right,
//       height = 500 - margin.top - margin.bottom,
//       g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//       const x = d3.scaleLinear()
//     .rangeRound([0,width]);
//     const y = d3.scaleLinear()
//       .rangeRound([height, 0]);
//       const make_x_grid_lines = () => {
//      return d3.axisBottom(x)
//      .ticks(10)
//    }
//
// const make_y_gridlines = () => {
//     return d3.axisLeft(y)
//     .ticks(10)
//    }
// const lineCount = d3.line()
//     .x(function(d) { return x(d.week); })
//     .y(function(d) { return y(d.users); });
//     x.domain(d3.extent(data, function(d) {return d.week; }));
//     y.domain(d3.extent(data, function(d) { return d.users; }));
// // add the X gridlines
//     g.append("g")
//      .attr("class", `grid`)
//      .attr("transform", "translate(0," + height + ")")
//      .call(make_x_grid_lines()
//      .tickSize(-height)
//      .tickFormat(""))
// // add the Y gridlines
//     g.append("g")
//      .attr("class", `grid`)
//      .call(make_y_gridlines()
//      .tickSize(-width)
//      .tickFormat(""))
// //plot the x axis
//     g.append("g")
//     .attr("class", `axis axis--x`)
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));
// //plot the y axis
//      g.append("g")
//       .attr("class", 'axis axis--y')
//       .call(d3.axisLeft(y))
// //plot the y axis legend
//       .append("text")
//       .attr("fill", "#000")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", "0.71em")
//       .style("text-anchor", "end")
//       .style('font-size','12')
//       .text("New Users");
// // plot the line legend with color
//       g.append('g')
//        .attr('class', 'legend')
//        .append('text')
//        .attr('y',-10)
//        .attr('x',width-100)
//        .text('Users');
//       g.append('g')
//        .append('rect')
//        .attr('y',-23)
//        .attr('x',width-55)
//        .attr('width',18)
//        .attr('height',18)
//        .attr('fill','steelblue');
//  //plot the x axis legend
//     svg.append("text")
//        .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 40) + ")")
//        .style("text-anchor", "middle")
//        .text("Week #");
// // Plot the Line
//        g.append("path")
//         .datum(data)
//         .attr("class", `lineUsers`)
//         .attr("d", lineCount)
// }
//

render(){
  return(
      <div>
       Hi d3 Chart
        <svg width="960" height="500" style={{border:'solid 1px #eee',borderBottom:'solid 1px #ccc'}} />
      </div>
  )
}};

export default BarChart;
