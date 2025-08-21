import React, { useCallback, useMemo, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface SkillWebProps {
  title: string;
  subtitle: string;
  skills: string[];
  tools: string[];
  frameworks: string[];
  onSkillUpdate?: (skillData: any) => void;
}

const DynamicSkillWeb = ({ title, subtitle, skills, tools, frameworks, onSkillUpdate }: SkillWebProps) => {
  const initialNodes: Node[] = useMemo(() => {
    const allItems = [...skills, ...tools, ...frameworks];
    const centerX = 150;
    const centerY = 150;
    const radius = 80;
    
    return allItems.map((item, index) => {
      const angle = (index * 2 * Math.PI) / allItems.length;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      let nodeType = 'skill';
      let bgColor = 'hsl(var(--primary))';
      
      if (tools.includes(item)) {
        nodeType = 'tool';
        bgColor = 'hsl(var(--secondary))';
      } else if (frameworks.includes(item)) {
        nodeType = 'framework';  
        bgColor = 'hsl(var(--accent))';
      }
      
      return {
        id: item.toLowerCase().replace(/\s+/g, '-'),
        type: 'default',
        position: { x, y },
        data: { 
          label: item,
          type: nodeType
        },
        style: {
          background: bgColor,
          color: 'white',
          fontSize: '10px',
          padding: '4px 8px',
          borderRadius: '12px',
          border: 'none',
          width: 'auto',
          height: 'auto'
        }
      };
    });
  }, [skills, tools, frameworks]);

  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = [];
    const allItems = [...skills, ...tools, ...frameworks];
    
    // Create connections between related items
    skills.forEach(skill => {
      const skillId = skill.toLowerCase().replace(/\s+/g, '-');
      
      // Connect skills to related tools
      tools.forEach(tool => {
        if (isRelated(skill, tool)) {
          const toolId = tool.toLowerCase().replace(/\s+/g, '-');
          edges.push({
            id: `${skillId}-${toolId}`,
            source: skillId,
            target: toolId,
            type: 'smoothstep',
            animated: true,
            style: { stroke: 'hsl(var(--primary) / 0.6)', strokeWidth: 2 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: 'hsl(var(--primary) / 0.6)',
            },
          });
        }
      });
      
      // Connect skills to related frameworks
      frameworks.forEach(framework => {
        if (isRelated(skill, framework)) {
          const frameworkId = framework.toLowerCase().replace(/\s+/g, '-');
          edges.push({
            id: `${skillId}-${frameworkId}`,
            source: skillId,
            target: frameworkId,
            type: 'smoothstep',
            animated: true,
            style: { stroke: 'hsl(var(--accent) / 0.6)', strokeWidth: 2 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: 'hsl(var(--accent) / 0.6)',
            },
          });
        }
      });
    });
    
    return edges;
  }, [skills, tools, frameworks]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        ...params,
        type: 'smoothstep',
        animated: true,
        style: { stroke: 'hsl(var(--muted-foreground) / 0.6)', strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'hsl(var(--muted-foreground) / 0.6)',
        },
      };
      setEdges((eds) => addEdge(newEdge, eds));
      
      // Notify parent of skill updates
      if (onSkillUpdate) {
        onSkillUpdate({
          skills: skills.length,
          tools: tools.length,
          frameworks: frameworks.length,
          connections: edges.length + 1
        });
      }
    },
    [edges.length, onSkillUpdate, skills.length, tools.length, frameworks.length]
  );

  // Simple relationship logic - can be enhanced
  function isRelated(item1: string, item2: string): boolean {
    const relationships = {
      'python': ['pandas', 'numpy', 'tensorflow', 'scikit-learn'],
      'sql': ['postgresql', 'mysql', 'power bi'],
      'javascript': ['react', 'node.js', 'express'],
      'data analysis': ['python', 'r', 'excel'],
      'machine learning': ['tensorflow', 'pytorch', 'scikit-learn'],
    };
    
    const key = item1.toLowerCase();
    return relationships[key]?.some(rel => 
      item2.toLowerCase().includes(rel) || rel.includes(item2.toLowerCase())
    ) || false;
  }

  const totalItems = skills.length + tools.length + frameworks.length;
  const circleSize = Math.max(200, totalItems * 15); // Dynamic sizing

  return (
    <div className="relative">
      <div 
        className="rounded-full border-2 border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 group overflow-hidden"
        style={{ 
          width: `${circleSize}px`, 
          height: `${circleSize}px`,
          minWidth: '250px',
          minHeight: '250px'
        }}
      >
        {/* Title overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 text-center">
          <h3 className="font-semibold text-primary text-sm leading-tight group-hover:text-primary/80">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground italic">
            {subtitle}
          </p>
        </div>
        
        {/* React Flow */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-left"
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true}
          style={{ width: '100%', height: '100%' }}
          minZoom={0.5}
          maxZoom={2}
        >
          <Background />
          <Controls position="bottom-right" />
        </ReactFlow>
      </div>
      
      {/* Skill count indicator */}
      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold">
        {totalItems}
      </div>
    </div>
  );
};

export default DynamicSkillWeb;