// import { Swords, Code, Terminal, Cpu, Globe } from "lucide-react";

// const SUGGESTIONS = [
//   { icon: <Code size={14} />, text: "Write a binary search algorithm" },
//   { icon: <Terminal size={14} />, text: "Implement a linked list in Python" },
//   { icon: <Cpu size={14} />, text: "Build a debounce function" },
//   { icon: <Globe size={14} />, text: "Create a REST API in Node.js" },
// ];

// export default function Hero({ onSelectPrompt }) {
//   return (
//     <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center px-6 animate-fadeUp">
//       <div className="mb-6 p-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
//         <Swords size={48} strokeWidth={1.5} />
//       </div>

//       <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//         The Arena Awaits
//       </h1>

//       <p className="text-gray-400 text-sm mb-12 max-w-lg leading-relaxed">
//         Ask any programming question in the chat. Two AI models will compete to give the best answer, and a judge will score them.
//       </p>

//       <div className="grid grid-cols-2 gap-3 w-full">
//         {SUGGESTIONS.map((s, i) => (
//           <button
//             key={i}
//             onClick={() => onSelectPrompt(s.text)}
//             className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-indigo-500/50 hover:bg-[#1c2128] transition-all text-xs text-left text-gray-300"
//           >
//             <span className="p-1.5 rounded-lg bg-gray-800 text-gray-400">
//               {s.icon}
//             </span>
//             {s.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
