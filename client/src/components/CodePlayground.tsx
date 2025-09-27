import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Play, Copy, RotateCcw, Code2, Monitor } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codeExamples = [
  {
    title: "React Component",
    language: "jsx",
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`,
    description: "A simple React counter component with hooks"
  },
  {
    title: "API Route Handler",
    language: "javascript",
    code: `import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';
    
    return NextResponse.json({
      message: \`Hello, \${name}!\`,
      timestamp: new Date().toISOString(),
      success: true
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}`,
    description: "Next.js API route with error handling"
  },
  {
    title: "Database Query",
    language: "javascript",
    code: `import { db } from './db';
import { users } from './schema';

export async function getUsersWithPosts() {
  try {
    const result = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        postCount: sql\`count(*)\`
      })
      .from(users)
      .groupBy(users.id);
    
    return result;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch users');
  }
}`,
    description: "Drizzle ORM query with joins and aggregation"
  },
  {
    title: "CSS Animation",
    language: "css",
    code: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-card {
  animation: fadeInUp 0.6s ease-out;
  transition: transform 0.2s ease;
}

.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}`,
    description: "Smooth CSS animations with hover effects"
  }
];

export function CodePlayground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExample, setSelectedExample] = useState(0);
  const [customCode, setCustomCode] = useState(codeExamples[0].code);
  const [output, setOutput] = useState("");
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const runCode = () => {
    // Simulate code execution
    setOutput("Running code...");
    
    setTimeout(() => {
      if (codeExamples[selectedExample].language === "jsx") {
        setOutput("✅ React component rendered successfully!\nCounter component with state management is working.");
      } else if (codeExamples[selectedExample].language === "javascript") {
        setOutput("✅ Code executed successfully!\nAPI endpoint is ready to handle requests.");
      } else if (codeExamples[selectedExample].language === "css") {
        setOutput("✅ CSS animations applied!\nSmooth transitions and hover effects are active.");
      } else {
        setOutput("✅ Code executed successfully!");
      }
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(customCode);
    toast({
      title: "Code copied!",
      description: "The code has been copied to your clipboard.",
    });
  };

  const resetCode = () => {
    setCustomCode(codeExamples[selectedExample].code);
    setOutput("");
  };

  const selectExample = (index: number) => {
    setSelectedExample(index);
    setCustomCode(codeExamples[index].code);
    setOutput("");
  };

  return (
    <section id="playground" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Interactive Code Playground
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Code Editor */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Code Editor
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={runCode}
                        className="hover-elevate"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Run
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyCode}
                        className="hover-elevate"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetCode}
                        className="hover-elevate"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Example Selector */}
                  <div className="flex flex-wrap gap-2">
                    {codeExamples.map((example, index) => (
                      <Badge
                        key={index}
                        variant={selectedExample === index ? "default" : "outline"}
                        className="cursor-pointer hover-elevate"
                        onClick={() => selectExample(index)}
                      >
                        {example.title}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Code Textarea */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {codeExamples[selectedExample].title} ({codeExamples[selectedExample].language})
                    </label>
                    <Textarea
                      value={customCode}
                      onChange={(e) => setCustomCode(e.target.value)}
                      className="min-h-[300px] font-mono text-sm"
                      placeholder="Write your code here..."
                    />
                    <p className="text-xs text-muted-foreground">
                      {codeExamples[selectedExample].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Output Panel */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Output
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 min-h-[300px]">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {output || "Click 'Run' to execute the code and see the output here..."}
                    </pre>
                  </div>
                  
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Try This:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Modify the React component to add a reset button</li>
                      <li>• Change the API response message</li>
                      <li>• Adjust the CSS animation duration</li>
                      <li>• Add error handling to the database query</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
