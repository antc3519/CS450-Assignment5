import React, { Component, useState } from "react";
import * as d3 from "d3";

class Child1 extends Component {
  state = { 
    company: "Apple", // Default Company
    selectedMonth: 'November' //Default Month
  };

  componentDidMount() {
    this.drawChart(); // Use this data as default. When the user will upload data this props will provide you the updated data
  }

  componentDidUpdate() {
    this.drawChart();
  }

  handleCompanyChange = (event) => {
    this.setState({ company: event.target.value });
  };

  handleMonthChange = (event) => {
    this.setState({ selectedMonth: event.target.value });
  };

  drawChart = () => {
    const data = this.props.csv_data.filter((d) =>
        d.Company === this.state.company &&
        new Date(d.Date).toLocaleString("default", { month: "long" }) === this.state.selectedMonth
    );
    console.log(data)

    const svg = d3.select("svg");
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => new Date(d.Date)))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => Math.min(d.Open, d.Close)),
        d3.max(data, (d) => Math.max(d.Open, d.Close)),
      ])
      .nice()
      .range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y));

    const line = (key) =>
      d3
        .line()
        .x((d) => x(new Date(d.Date)))
        .y((d) => y(d[key]));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#b2df8a")
      .attr("stroke-width", 1.5)
      .attr("d", line("Open"));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#e41a1c")
      .attr("stroke-width", 1.5)
      .attr("d", line("Close"));

    g.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(new Date(d.Date)))
      .attr("cy", (d) => y(d.Open))
      .attr("r", 4)
      .attr("fill", "#b2df8a")

    g.selectAll(".dot-close")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(new Date(d.Date)))
      .attr("cy", (d) => y(d.Close))
      .attr("r", 4)
      .attr("fill", "#e41a1c");
  };

  render() {
    const options = ['Apple', 'Microsoft', 'Amazon', 'Google', 'Meta']; // Use this data to create radio button
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Use this data to create dropdown
    
    

    return (

      <div className="child1">
        <div className="radio-group" style={{justifySelf:"center"}}>
          Company: 
          {options.map((company) => (
            <label key={company} style={{margin:5}}>
              <input
                type="radio"
                value={company}
                checked={this.state.company === company}
                onChange={this.handleCompanyChange}
              />
              {company}
            </label>
            ))}
        </div>
        <div style={{justifySelf:"center"}}>
          Month: 
          <select
          value={this.state.selectedMonth}
          onChange={this.handleMonthChange}
          style={{margin:5}}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        </div>
        <div className="chart-container">
          <svg></svg>
        </div>
      </div>
      
    );
  }
}

export default Child1;
