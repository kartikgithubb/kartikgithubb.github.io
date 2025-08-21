import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface SkillNode {
  id: string;
  name: string;
  type: 'skill' | 'tool' | 'framework';
  category: string;
  level?: number;
}

interface SkillLink {
  source: string;
  target: string;
}

interface SkillGraphProps {
  nodes: SkillNode[];
  links: SkillLink[];
  className?: string;
}

const SkillGraph = ({ nodes, links, className }: SkillGraphProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 300;
    
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    // Create color scale for node types
    const colorScale = d3.scaleOrdinal()
      .domain(['skill', 'tool', 'framework'])
      .range(['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))']);

    // Create size scale based on connections
    const connectionCount = new Map();
    links.forEach(link => {
      connectionCount.set(link.source, (connectionCount.get(link.source) || 0) + 1);
      connectionCount.set(link.target, (connectionCount.get(link.target) || 0) + 1);
    });

    const sizeScale = d3.scaleLinear()
      .domain([1, d3.max(Array.from(connectionCount.values())) || 1])
      .range([8, 20]);

    // Create simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(50))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => sizeScale(connectionCount.get(d.id) || 1) + 2));

    // Add links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke", "hsl(var(--border))")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1);

    // Add nodes
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", (d: any) => sizeScale(connectionCount.get(d.id) || 1))
      .attr("fill", (d: any) => colorScale(d.type) as string)
      .attr("stroke", "hsl(var(--background))")
      .attr("stroke-width", 2)
      .style("cursor", "pointer");

    // Add labels
    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
      .text((d: any) => d.name)
      .attr("font-size", 10)
      .attr("font-weight", 500)
      .attr("fill", "hsl(var(--foreground))")
      .attr("text-anchor", "middle")
      .attr("dy", 3)
      .style("pointer-events", "none");

    // Add hover effects
    node
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (d: any) => sizeScale(connectionCount.get(d.id) || 1) * 1.3)
          .attr("stroke-width", 3);
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (d: any) => sizeScale(connectionCount.get(d.id) || 1))
          .attr("stroke-width", 2);
      });

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      label
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <div className={`w-full ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-80 border border-border rounded-lg bg-card"
      />
    </div>
  );
};

export default SkillGraph;