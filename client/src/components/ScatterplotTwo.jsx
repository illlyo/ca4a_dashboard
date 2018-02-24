import React from 'react';
import {WIDTH, VB_WIDTH, COLORS} from './const';
import * as d3 from 'd3'


class Scatterplot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coords
        }
    }
const m = { left: 80, right: 150, top: 20, bottom: 70 };
let chart = d3.select(".regionalstats");
let node = chart.node();
let width = node.clientWidth - (m.left + m.right);
let height = node.clientHeight - (m.top + m.bottom);
let svgW = node.clientWidth;
let svgH = node.clientHeight;

// APPEND SVG AND G ELEMENTS
let svg = d3
  .select(".regionalstats")
  .append("svg")
  .attrs({ width: svgW, height: svgH })
  .append("g")
  .attr("transform", "translate(" + m.left + "," + m.top + ")")
  .attrs({ width, height });
// CREATE A COLOR SCALE
let colorScale = d3.scaleOrdinal(d3.schemeCategory20);
// CREATE X\Y SCALES
let xScale = d3.scaleLinear().range([0, width]);
let yScale = d3.scaleLinear().range([height, 0]);
// APPEND XAXIS
let xAxis = svg
  .append("g")
  .classed("xAxis", true)
  .attr("transform", "translate(0," + height + ")");
// APPEND YAXIS
let yAxis = svg.append("g").classed("yAxis", true);
// APPEND XLABEL TEXT
svg
  .append("g")
  .classed("xLabel", true)
  .attr("transform", "translate(0," + height + ")")
  .append("text")
  .attrs({
    x: width / 2,
    y: 50,
    "text-anchor": "middle",
    "font-size": 15
  })
  .text("2002 Renewable Energy Output");
// APPEND YLABEL TEXT
svg
  .append("g")
  .classed("yLabel", true)
  .append("text")
  .attrs({
    y: -60,
    x: -(height / 2),
    dy: ".71em",
    "text-anchor": "middle",
    transform: "rotate(-90)",
    "font-size": 15
  })
  .text("2012 Renewable Energy Output");

function render(data) {
  data = data.map(d => {
    d.color = colorScale(d.Region);
    return d;
  });
  // retrieve the max values from data set
  let maxX = d3.max(data, d => parseInt(d["2002"]));
  let maxY = d3.max(data, d => parseInt(d["2012"]));
  // update the scales with the new values
  xScale.domain([0, maxX + 10]);
  yScale.domain([0, maxY + 10]);
  // transition the axes to their new values
  // XAXIS
  svg
    .select(".xAxis")
    .transition()
    .duration(500)
    .call(
      d3
        .axisBottom(xScale)
        .tickFormat(function(d) {
          return d + "%";
        })
        .ticks(5) //.tickPadding([10])
    );
  // YAXIS
  svg
    .select(".yAxis")
    .transition()
    .duration(500)
    .call(
      d3
        .axisLeft(yScale)
        .tickFormat(function(d) {
          return d + "%";
        })
        .ticks(5)
    );
  // DATA BINDING
  let group = svg.selectAll("circle").data(data);
  // ENTER
  let groupEnter = group
    .enter()
    .append("circle")
    // ENTER AND UPDATE
    .merge(group)
    .attr("cx", (d, i) => xScale(d["2002"]))
    .attr("cy", (d, i) => yScale(d["2012"]))
    .attr("r", 5)
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .attr("stroke", "rgba(230,230,230, .8)")
    .style("fill", d => colorScale(d.Region))
    .attr("title", d => d.Location)
    .on("mouseover", mouseOver)
    .on("mouseout", mouseOut)
    .transition()
    .duration(500)
    .attr("opacity", 1);

  // REMOVE
  group
    .exit()
    .transition()
    .duration(250)
    .attr("opacity", 0)
    .remove();
  // MOUSEOVER EVENTS
  function mouseOver(d) {
    d3
      .select(this)
      .transition()
      .duration(1000)
      .attr("stroke-width", 20)
      .attr("stroke", "rgba(230,230,230, .8)")
      .attr("r", 15);

    var lineX = svg.append("line");
    lineX.datum(d).attr("class", "lineX");
    var lineY = svg.append("line");
    lineY.datum(d).attr("class", "lineY");
    //lineX.call(createLineX)
    createLineX(lineX);
    createLineY(lineY);
    displayToolTip(d3.select(this));
  }
  function mouseOut() {
    d3
      .select(this)
      .transition()
      .duration(1000)
      .attr("stroke-width", 1)
      .attr("stroke", "rgba(230,230,230, .8)")
      .attr("r", 5);

    d3
      .selectAll(".lines")
      .transition()
      .duration(1000)
      .style("opacity", 0)
      .remove();

    removeToolTip(d3.select(this));
  }
  // GENERATE LINES
  function createLineY(lineY) {
    lineY
      .attr("x1", xScale(+lineY.datum()["2002"] - 1))
      .attr("y1", yScale(+lineY.datum()["2012"]))
      .attr("x2", xScale(+lineY.datum()["2002"]))
      .attr("y2", yScale(+lineY.datum()["2012"]))
      .attr("stroke-width", 2)
      .attr("stroke", d => d.color)
      .style("opacity", 0)
      .attr("class", "lines")
      .transition()
      .duration(1000)
      .delay(250)
      .style("opacity", 0.4)
      .style("stroke-dasharray", "10,3")
      .attr("x2", xScale(0))
      .attr("y2", yScale(+lineY.datum()["2012"]));
  }
  function createLineX(lineX) {
    lineX
      .attr("x1", xScale(+lineX.datum()["2002"]))
      .attr("y1", yScale(+lineX.datum()["2012"] - 1))
      .attr("x2", xScale(+lineX.datum()["2002"]))
      .attr("y2", yScale(+lineX.datum()["2012"]))
      .attr("stroke-width", 2)
      .attr("stroke", d => d.color)
      .style("opacity", 0)
      .attr("class", "lines")
      .transition()
      .duration(1000)
      .delay(250)
      .style("opacity", 0.4)
      .style("stroke-dasharray", "10,3")
      .attr("x2", xScale(+lineX.datum()["2002"]))
      .attr("y2", yScale(0));
  }
  // DISPLAY\REMOVE TOOLTIP
  function displayToolTip(selection) {
    const d = selection.datum();
    const cx = +selection.attr("cx");
    const cy = +selection.attr("cy");
    // grab the svg and append a div
    const tooltip = d3
      .select(".regionalstats")
      .append("div")
      .attr("class", "d3tooltip");
    tooltip
      .style("opacity", 0)
      .style("left", cx + 160 + "px")
      .style("top", cy + 30 + "px")
      .style("border", "3px solid " + d.color);

    tooltip
      .append("span")
      .attr("class", "regionName")
      .html(d.Location);
    tooltip
      .append("hr")
      .attr("class", "d3tooltiphr")
      .style("border", `2px solid ${d.color}`);
    tooltip
      .append("span")
      .attr("class", "key-2002")
      .html("2002");
    tooltip
      .append("span")
      .attr("class", "value")
      .html(`${d["2002"]}%`)
      .append("br");
    tooltip
      .append("span")
      .attr("class", "key-2012")
      .html("2012");
    tooltip
      .append("span")
      .attr("class", "value")
      .html(`${d["2012"]}%`);

    tooltip
      .transition()
      .duration(1000)
      .style("opacity", 1);
  }
  function removeToolTip(selection) {
    d3
      .selectAll(".d3tooltip")
      .transition()
      .duration(1000)
      .style("opacity", 0)
      .remove();
  }
} // END RENDER

function legendData(data) {
  legendValues = d3
    .set(
      data.map(d => d.Region).filter(function(d) {
        return !(d == "World");
      })
    )
    .values()
    .sort(d3.decscending);
  renderLegend(legendValues, data);
}

function renderLegend(legendValues, data) {
  let legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) {
      return "translate(" + width + "," + 0 + ")";
    });

  let legendItems = legend
    .selectAll("legendItem")
    .data(legendValues)
    .enter()
    .append("g")
    .attr("class", "legendItem")
    .attr("opacity", 1)
    .attr("transform", (d, i) => {
      return "translate(0," + i * 20 + ")";
    });

  legendItems
    .append("rect")
    .attrs({ x: 5, y: 5, width: 10, height: 10 })
    .style("fill", d => colorScale(d));

  legendItems
    .append("text")
    .attrs({ x: 25, y: 15 })
    .text((d, i) => {
      return d;
    });
}

function getData() {
  let url = "https://gist.githubusercontent.com/jkeohan/974c071a5d4d0185a846/raw/971a9b8dfc0ebe238ee271611991cd98e6cac434/data_regions.csv";
  let storage = localStorage.getItem("countries");
  if (storage) {
    storage = JSON.parse(storage);
    storage.sort(function(x, y) {
      return d3.ascending(x["2002"], y["2002"]);
    });
    legendData(storage);
    render(storage);
  } else {
    d3.csv(url, function(data) {
      localStorage.setItem("countries", JSON.stringify(data));
      legendData(storage);
      render(data);
    });
  }
}
getData();
}
