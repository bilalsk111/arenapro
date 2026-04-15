// import { Send, Scale, History, User } from "lucide-react";

// export default function Sidebar({ history, input, setInput, onSend, loading }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       onSend();
//     }
//   };

//   return (
//     <aside className="w-80 h-screen bg-[#0d1117] border-r border-[#21262d] flex flex-col flex-shrink-0 animate-slideIn">
//       {/* Header */}
//       <div className="p-4 border-b border-[#21262d] mb-4">
//         <div className="flex items-center gap-3 mb-1">
//           <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
//             <Scale size={20} />
//           </div>
//           <div>
//             <h1 className="text-sm font-bold tracking-tight">AI Battle Arena</h1>
//             <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
//               LangGraph Powered
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* History */}
//       <div className="flex-1 overflow-y-auto px-4 space-y-4">
//         <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
//           <History size={12} />
//           <span>Recent Battles</span>
//         </div>

//         {history.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-20 text-gray-600 italic text-[10px]">
//             No battles yet.
//           </div>
//         ) : (
//           history.map((h, i) => (
//             <div
//               key={i}
//               className="p-3 rounded-xl bg-[#161b22] border border-[#21262d]/50 group hover:border-indigo-500/30 transition-all cursor-pointer"
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-5 h-5 rounded-md bg-gray-800 flex items-center justify-center text-[10px]">
//                   <User size={10} className="text-gray-400" />
//                 </div>
//                 <span className="text-[10px] text-gray-500">{h.time}</span>
//               </div>
//               <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
//                 {h.content}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Input */}
//       <div className="p-4 border-t border-[#21262d]">
//         <div className="relative">
//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Send a programming challenge..."
//             rows={3}
//             className="w-full bg-[#161b22] border border-[#30363d] rounded-xl p-3 text-xs resize-none focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600"
//           />
//         </div>

//         <button
//           onClick={onSend}
//           disabled={loading || !input.trim()}
//           className="mt-3 w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/10"
//         >
//           {loading ? (
//             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//           ) : (
//             <Send size={14} />
//           )}
//           Send to Battle
//         </button>
//       </div>
//     </aside>
//   );
// }
// // 