// import { Trophy, Info, Monitor, Cpu } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";


// function Card({ title, model, code, score, winner, isSolution1 }) {
//   return (
//     <div
//       className={`rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
//         winner
//           ? "border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.1)] bg-[#161b22]/80"
//           : "border-[#30363d] bg-[#0d1117]"
//       }`}
//     >
//       {/* Glow Effect */}
//       {winner && (
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
//       )}

//       {/* Header */}
//       <div className="flex items-center justify-between px-5 py-4 border-b border-[#30363d]">
//         <div className="flex items-center gap-3">
//           <div className={`p-2 rounded-lg ${isSolution1 ? "bg-blue-500/10 text-blue-400" : "bg-purple-500/10 text-purple-400"}`}>
//             {isSolution1 ? <Monitor size={16} /> : <Cpu size={16} />}
//           </div>
//           <div>
//             <h3 className="text-xs font-bold uppercase tracking-wider text-gray-200">
//               {title}
//             </h3>
//             <p className="text-[10px] text-gray-500 font-medium">
//               {model}
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           {winner && (
//             <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500 text-[10px] font-bold text-black uppercase tracking-tighter">
//               <Trophy size={10} strokeWidth={3} />
//               Winner
//             </div>
//           )}
//           <div className="px-3 py-1 rounded-lg bg-[#21262d] text-xs font-mono font-bold text-white shadow-inner">
//             {score}<span className="text-gray-500 text-[10px]">/10</span>
//           </div>
//         </div>
//       </div>

//       {/* Code */}
//       <div className="p-5 font-mono text-[13px] leading-relaxed max-h-[500px] overflow-y-auto custom-scrollbar">
//         <ReactMarkdown
//           remarkPlugins={[remarkGfm]}
//           components={{
//             code({ inline, children, ...props }) {
//               return (
//                 <code
//                   className={`${
//                     inline
//                       ? "bg-[#161b22] px-1.5 py-0.5 rounded text-blue-300"
//                       : "block bg-[#0d1117] p-4 rounded-xl border border-[#30363d] my-4 overflow-x-auto text-xs leading-6"
//                   }`}
//                   {...props}
//                 >
//                   {children}
//                 </code>
//               );
//             },
//             pre({ children }) {
//               return <>{children}</>;
//             },
//           }}
//         >
//           {code}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }

// export default function ArenaResponse({
//   question,
//   solution_1,
//   solution_2,
//   judge,
// }) {
//   return (
//     <div className="space-y-8 animate-fadeUp">
//       {/* Title & Info */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-1 h-8 bg-indigo-500 rounded-full" />
//           <h2 className="text-lg font-bold text-white tracking-tight">
//              Competing Solutions
//           </h2>
//         </div>
//         <div className="flex items-center gap-2 text-xs font-medium text-gray-500 px-4 py-1.5 rounded-full bg-[#161b22] border border-[#21262d]">
//           <Info size={14} />
//           <span>{question}</span>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card
//           title="Model A"
//           model="Gemini 1.5 Pro"
//           code={solution_1}
//           score={judge.solution_1_score}
//           winner={judge.winner === "solution_1"}
//           isSolution1={true}
//         />
//         <Card
//           title="Model B"
//           model="Mistral Large"
//           code={solution_2}
//           score={judge.solution_2_score}
//           winner={judge.winner === "solution_2"}
//           isSolution1={false}
//         />
//       </div>

//       {/* Judge's Analysis Section */}
//       <div className="relative group transition-all">
//         <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//         <div className="relative bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 overflow-hidden">
//           <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50" />
          
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
//               <Trophy size={16} />
//               Judge's Analysis
//             </h3>
//             <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase">
//               Final Verdict: {judge.winner === 'tie' ? "Equality" : `${judge.winner === 'solution_1' ? 'Model A' : 'Model B'}`}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
//             {/* Split Line */}
//             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#21262d] to-transparent" />

//             {/* Analysis A */}
//             <div className={`space-y-3 ${judge.winner === 'solution_1' ? 'opacity-100' : 'opacity-70'}`}>
//               <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
//                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//                 MODEL A INSIGHTS
//               </div>
//               <p className="text-xs text-gray-400 leading-relaxed italic">
//                 "{judge.solution_1_reasoning}"
//               </p>
//             </div>

//             {/* Analysis B */}
//             <div className={`space-y-3 ${judge.winner === 'solution_2' ? 'opacity-100' : 'opacity-70'}`}>
//               <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
//                 <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
//                 MODEL B INSIGHTS
//               </div>
//               <p className="text-xs text-gray-400 leading-relaxed italic">
//                 "{judge.solution_2_reasoning}"
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }