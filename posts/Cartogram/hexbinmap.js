// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

// Map and projection
var projection = d3.geoMercator()
    .scale(350) // This is the zoom
    .translate([850, 440]); // You have to play with these values to center your map

// Path generator
var path = d3.geoPath()
    .projection(projection)

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/us_states_hexgrid.geojson.json", function(data){

  // Draw the map
  svg.append("g")
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
          .attr("fill", "#69a2a2")
          .attr("d", path)
          .attr("stroke", "white")

  // Add the labels
  svg.append("g")
      .selectAll("labels")
      .data(data.features)
      .enter()
      .append("text")
        .attr("x", function(d){return path.centroid(d)[0]})
        .attr("y", function(d){return path.centroid(d)[1]})
        .text(function(d){ return d.properties.iso3166_2})
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .style("font-size", 11)
        .style("fill", "white")
})