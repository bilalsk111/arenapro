// import { useState, useRef, useEffect } from "react";
// import ArenaResponse from "./ArenaResponse";
// import Sidebar from "./Sidebar";
// import Hero from "./Hero";

// // ✅ SAME DEMO DATA (aligned with backend field names)
// const DEMO = {
//   solution_1: `\`\`\`javascript
// function factorialIterative(n) {
//   if (n < 0) return undefined;
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// \`\`\``,

//   solution_2: `\`\`\`javascript
// function factorialRecursive(n) {
//   if (n < 0) return undefined;
//   if (n === 0 || n === 1) return 1;
//   return n * factorialRecursive(n - 1);
// }
// \`\`\``,

//   judge: {
//     solution_1_score: 8,
//     solution_2_score: 10,
//     winner: "solution_2",
//     solution_1_reasoning: "The iterative approach is memory-efficient and avoids stack overflow for large numbers, but it's slightly more verbose than necessary for this specific problem.",
//     solution_2_reasoning: "The recursive approach is elegant and matches the mathematical definition of factorial perfectly. It's clean, readable, and standard for this algorithm.",
//   },
// };

// function getTime() {
//   return new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// }

// export default function ChatInterface() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [activeBattle, setActiveBattle] = useState(null);

//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [activeBattle, loading]);

//   const send = async (customInput) => {
//     const textToSearch = customInput || input;
//     if (!textToSearch.trim()) return;

//     const userMsg = {
//       id: Date.now(),
//       type: "user",
//       content: textToSearch,
//       time: getTime(),
//     };

//     setMessages((p) => [userMsg, ...p]);
//     setInput("");
//     setLoading(true);
//     setActiveBattle(null);

//     // Real API Call
//     try {
//       const response = await fetch("http://localhost:3000/battle", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ problem: textToSearch }),
//       });

//       if (!response.ok) throw new Error("Battle failed");

//       const data = await response.json();
      
//       const arenaResponse = {
//         id: Date.now() + 1,
//         type: "arena",
//         question: userMsg.content,
//         ...data,
//       };
      
//       setActiveBattle(arenaResponse);
//     } catch (error) {
//       console.error("Battle error:", error);
//       // Fallback to demo for UX if needed, or show error
//       alert("The arena is currently unavailable. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="flex h-screen overflow-hidden bg-[#080b10] text-[#e6edf3]">
//       <Sidebar
//         history={messages.filter((m) => m.type === "user")}
//         input={input}
//         setInput={setInput}
//         onSend={() => send()}
//         loading={loading}
//       />

//       <main className="flex-1 overflow-y-auto relative bg-gradient-to-b from-[#0d1117] to-[#080b10]">
//         {/* Background Decor */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

//         <div className="max-w-6xl mx-auto h-full px-8 py-10">
//           {!activeBattle && !loading ? (
//             <Hero onSelectPrompt={(text) => send(text)} />
//           ) : (
//             <div className="space-y-12 pb-20">
//               {loading && (
//                 <div className="flex flex-col items-center justify-center h-64 space-y-4 animate-pulse">
//                   <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
//                   <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
//                     Summoning Models...
//                   </p>
//                 </div>
//               )}

//               {activeBattle && (
//                 <ArenaResponse {...activeBattle} />
//               )}
//             </div>
//           )}
//           <div ref={bottomRef} />
//         </div>
//       </main>
//     </div>
//   );
// }