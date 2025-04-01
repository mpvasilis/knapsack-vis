import React from 'react';

const KnapsackComparison = () => {
  // Sample data for visualization
  const items = [
    { id: 1, weight: 10, value: 60 },
    { id: 2, weight: 20, value: 100 },
    { id: 3, weight: 30, value: 120 }
  ];
  
  const capacity = 50;
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Knapsack Problem Approaches Comparison</h1>
      <p className="text-center mb-6 text-gray-600">Comparing the three main approaches for solving the knapsack problem with capacity = 50</p>
      
      {/* Items display */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-3 text-center">Available Items</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {items.map(item => (
            <div key={item.id} className="border-2 border-blue-500 rounded-lg p-3 flex flex-col items-center bg-blue-50 w-32">
              <div className="text-lg font-bold">Item {item.id}</div>
              <div className="flex justify-between w-full mt-2">
                <span className="bg-yellow-100 px-2 py-1 rounded">
                  <span className="font-semibold">W:</span> {item.weight}
                </span>
                <span className="bg-green-100 px-2 py-1 rounded">
                  <span className="font-semibold">V:</span> {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Approaches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Brute Force Approach */}
        <div className="border-2 rounded-lg p-4 bg-blue-50 border-blue-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-center border-b pb-2 border-blue-200">Brute Force Approach</h2>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-blue-700">Key Concept</h3>
              <p>Recursively explore all possible item combinations without any optimization.</p>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-blue-700">Recursive Tree Visualization</h3>
              <div className="flex justify-center my-2">
                <svg viewBox="0 0 280 200" className="w-full">
                  {/* Root node */}
                  <rect x="120" y="10" width="60" height="30" rx="5" fill="#93c5fd" />
                  <text x="150" y="25" textAnchor="middle" fontSize="12" fontWeight="500">W=50, n=3</text>
                  <text x="150" y="35" textAnchor="middle" fontSize="10">Check item 3</text>
                  
                  {/* Branches */}
                  <line x1="150" y1="40" x2="80" y2="65" stroke="#1e40af" strokeWidth="1.5" />
                  <line x1="150" y1="40" x2="220" y2="65" stroke="#1e40af" strokeWidth="1.5" />
                  
                  {/* Don't take branch */}
                  <rect x="50" y="65" width="60" height="30" rx="5" fill="#dbeafe" />
                  <text x="80" y="80" textAnchor="middle" fontSize="11" fontWeight="500">W=50, n=2</text>
                  <text x="80" y="90" textAnchor="middle" fontSize="9">Don't take #3</text>
                  
                  {/* Take branch */}
                  <rect x="190" y="65" width="60" height="30" rx="5" fill="#dbeafe" />
                  <text x="220" y="80" textAnchor="middle" fontSize="11" fontWeight="500">W=20, n=2</text>
                  <text x="220" y="90" textAnchor="middle" fontSize="9">Take #3 (+120)</text>
                  
                  {/* Level 2 branches */}
                  <line x1="80" y1="95" x2="50" y2="120" stroke="#3b82f6" strokeDasharray="2" />
                  <line x1="80" y1="95" x2="110" y2="120" stroke="#3b82f6" strokeDasharray="2" />
                  <line x1="220" y1="95" x2="190" y2="120" stroke="#3b82f6" strokeDasharray="2" />
                  <line x1="220" y1="95" x2="250" y2="120" stroke="#3b82f6" strokeDasharray="2" />
                  
                  {/* Level 2 nodes */}
                  <rect x="20" y="120" width="60" height="20" rx="3" fill="#dbeafe" opacity="0.7" />
                  <text x="50" y="133" textAnchor="middle" fontSize="9">W=50, n=1</text>
                  
                  <rect x="80" y="120" width="60" height="20" rx="3" fill="#dbeafe" opacity="0.7" />
                  <text x="110" y="133" textAnchor="middle" fontSize="9">W=30, n=1</text>
                  
                  <rect x="160" y="120" width="60" height="20" rx="3" fill="#dbeafe" opacity="0.7" />
                  <text x="190" y="133" textAnchor="middle" fontSize="9">W=20, n=1</text>
                  
                  <rect x="220" y="120" width="60" height="20" rx="3" fill="#dbeafe" opacity="0.7" />
                  <text x="250" y="133" textAnchor="middle" fontSize="9">W=0, n=1</text>
                  
                  {/* More recursive branches indicator */}
                  <text x="150" y="155" textAnchor="middle" fontSize="11" fill="#475569" fontStyle="italic">... many more recursive calls ...</text>
                  
                  {/* Final results */}
                  <rect x="50" y="170" width="60" height="20" rx="3" fill="#bfdbfe" />
                  <text x="80" y="184" textAnchor="middle" fontSize="11" fontWeight="500">Result: 160</text>
                  
                  <rect x="190" y="170" width="60" height="20" rx="3" fill="#bfdbfe" />
                  <text x="220" y="184" textAnchor="middle" fontSize="11" fontWeight="500">Result: 220</text>
                  
                  <rect x="120" y="190" width="60" height="20" rx="3" fill="#3b82f6" />
                  <text x="150" y="204" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Max: 220</text>
                </svg>
              </div>
              <p className="text-xs text-gray-600 mt-1">Each node shows a recursive call with current capacity and remaining items.</p>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-blue-700">Code Pattern</h3>
              <div className="bg-gray-100 p-2 rounded font-mono text-xs overflow-auto">
                <pre>
{`if (W <= 0 || n <= 0)
  return 0;
if (w[n-1] > W)
  return bruteforce(W, w, v, n-1);
else
  return max(
    bruteforce(W, w, v, n-1),           // Skip
    v[n-1] + bruteforce(W-w[n-1], w, v, n-1) // Take
  );`}
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-blue-700">Complexity Analysis</h3>
              <p className="text-sm mb-1"><span className="font-semibold">Time Complexity:</span> O(2<sup>n</sup>)</p>
              <p className="text-sm mb-1"><span className="font-semibold">Space Complexity:</span> O(n) recursion stack</p>
              <div className="mt-2 flex items-center">
                <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                  Major Issue: Exponential growth with increasing items
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top-Down Approach */}
        <div className="border-2 rounded-lg p-4 bg-green-50 border-green-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-center border-b pb-2 border-green-200">Top-Down (Memoization)</h2>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-green-700">Key Concept</h3>
              <p>Use recursion with caching to avoid recalculating previously solved subproblems.</p>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-green-700">Memoization Visualization</h3>
              <div className="flex justify-center my-2">
                <svg viewBox="0 0 280 240" className="w-full">
                  {/* Root node */}
                  <rect x="120" y="10" width="60" height="30" rx="5" fill="#86efac" />
                  <text x="150" y="25" textAnchor="middle" fontSize="12" fontWeight="500">W=50, n=3</text>
                  <text x="150" y="35" textAnchor="middle" fontSize="10">Check k[3][50]</text>
                  
                  {/* First level check - not memoized */}
                  <line x1="150" y1="40" x2="150" y2="55" stroke="#059669" strokeWidth="1.5" />
                  <rect x="110" y="55" width="80" height="20" rx="3" fill="#f0fdf4" stroke="#059669" />
                  <text x="150" y="69" textAnchor="middle" fontSize="11">Not in memo table</text>
                  
                  {/* Branches */}
                  <line x1="150" y1="75" x2="80" y2="100" stroke="#059669" strokeWidth="1.5" />
                  <line x1="150" y1="75" x2="220" y2="100" stroke="#059669" strokeWidth="1.5" />
                  
                  {/* Don't take branch */}
                  <rect x="50" y="100" width="60" height="30" rx="5" fill="#d1fae5" />
                  <text x="80" y="115" textAnchor="middle" fontSize="11" fontWeight="500">W=50, n=2</text>
                  <text x="80" y="125" textAnchor="middle" fontSize="9">Check k[2][50]</text>
                  
                  {/* Take branch */}
                  <rect x="190" y="100" width="60" height="30" rx="5" fill="#d1fae5" />
                  <text x="220" y="115" textAnchor="middle" fontSize="11" fontWeight="500">W=20, n=2</text>
                  <text x="220" y="125" textAnchor="middle" fontSize="9">Check k[2][20]</text>
                  
                  {/* Memo check results */}
                  <line x1="80" y1="130" x2="80" y2="145" stroke="#059669" strokeWidth="1.5" />
                  <rect x="40" y="145" width="80" height="20" rx="3" fill="#f0fdf4" stroke="#059669" />
                  <text x="80" y="159" textAnchor="middle" fontSize="10">Not in memo yet</text>
                  
                  <line x1="220" y1="130" x2="220" y2="145" stroke="#059669" strokeWidth="1.5" />
                  <rect x="180" y="145" width="80" height="20" rx="3" fill="#f0fdf4" stroke="#059669" />
                  <text x="220" y="159" textAnchor="middle" fontSize="10">Not in memo yet</text>
                  
                  {/* More recursive branches indicator */}
                  <text x="80" y="175" textAnchor="middle" fontSize="10" fill="#047857" fontStyle="italic">More recursion...</text>
                  <text x="220" y="175" textAnchor="middle" fontSize="10" fill="#047857" fontStyle="italic">More recursion...</text>
                  
                  {/* Final memo results */}
                  <rect x="40" y="185" width="80" height="25" rx="3" fill="#059669" />
                  <text x="80" y="200" textAnchor="middle" fontSize="11" fontWeight="500" fill="white">k[2][50] = 160</text>
                  
                  <rect x="180" y="185" width="80" height="25" rx="3" fill="#059669" />
                  <text x="220" y="200" textAnchor="middle" fontSize="11" fontWeight="500" fill="white">k[2][20] = 100</text>
                  
                  {/* Main result calculation */}
                  <text x="150" y="220" textAnchor="middle" fontSize="12" fontWeight="500">Compute: max(160, 120+100)</text>
                  <rect x="110" y="225" width="80" height="25" rx="3" fill="#10b981" />
                  <text x="150" y="241" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">k[3][50] = 220</text>
                </svg>
              </div>
              <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                <p><strong>Benefit:</strong> If we encounter k[2][50] or k[2][20] again in other recursive branches, we use the stored value instead of recalculating!</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-green-700">Code Pattern</h3>
              <div className="bg-gray-100 p-2 rounded font-mono text-xs overflow-auto">
                <pre>
{`if (W <= 0 || n <= 0)
  return 0;
if (k[n][W] != -1)  // Check memo table
  return k[n][W];   // Return if already computed
if (w[n-1] > W)
  return k[n][W] = topdown(W, w, v, n-1);
else
  return k[n][W] = max(
    topdown(W, w, v, n-1),
    v[n-1] + topdown(W-w[n-1], w, v, n-1)
  );`}
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-green-700">Complexity Analysis</h3>
              <p className="text-sm mb-1"><span className="font-semibold">Time Complexity:</span> O(n·W)</p>
              <p className="text-sm mb-1"><span className="font-semibold">Space Complexity:</span> O(n·W + n)</p>
              <div className="mt-2 flex items-center">
                <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                  Trade-off: Extra memory for faster computation
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom-Up Approach */}
        <div className="border-2 rounded-lg p-4 bg-amber-50 border-amber-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-center border-b pb-2 border-amber-200">Bottom-Up (Tabulation)</h2>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-amber-700">Key Concept</h3>
              <p>Fill a table iteratively by building solutions from smaller to larger subproblems.</p>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-amber-700">DP Table Visualization</h3>
              <div className="overflow-auto">
                <table className="min-w-full border-collapse border border-amber-200 text-xs mt-2">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-200 p-1">i\j</th>
                      <th className="border border-amber-200 p-1">0</th>
                      <th className="border border-amber-200 p-1">10</th>
                      <th className="border border-amber-200 p-1">20</th>
                      <th className="border border-amber-200 p-1">30</th>
                      <th className="border border-amber-200 p-1">40</th>
                      <th className="border border-amber-200 p-1">50</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-amber-200 p-1 bg-amber-100">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">0</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-1 bg-amber-100">1</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1 bg-green-100">60</td>
                      <td className="border border-amber-200 p-1 bg-green-100">60</td>
                      <td className="border border-amber-200 p-1 bg-green-100">60</td>
                      <td className="border border-amber-200 p-1 bg-green-100">60</td>
                      <td className="border border-amber-200 p-1 bg-green-100">60</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-1 bg-amber-100">2</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">60</td>
                      <td className="border border-amber-200 p-1 bg-blue-100">100</td>
                      <td className="border border-amber-200 p-1 bg-blue-100">160</td>
                      <td className="border border-amber-200 p-1 bg-blue-100">160</td>
                      <td className="border border-amber-200 p-1 bg-blue-100">160</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-200 p-1 bg-amber-100">3</td>
                      <td className="border border-amber-200 p-1">0</td>
                      <td className="border border-amber-200 p-1">60</td>
                      <td className="border border-amber-200 p-1">100</td>
                      <td className="border border-amber-200 p-1">160</td>
                      <td className="border border-amber-200 p-1 bg-amber-200">180</td>
                      <td className="border border-amber-200 p-1 bg-amber-500 font-semibold">220</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-2 flex flex-col space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-100 mr-2"></div>
                  <span className="text-xs">Row 1: Consider only item 1 (W=10, V=60)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-100 mr-2"></div>
                  <span className="text-xs">Row 2: Consider items 1 & 2</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 mr-2"></div>
                  <span className="text-xs">Final answer: k[3][50] = 220</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-amber-700">Calculation Example</h3>
              <div className="bg-amber-50 p-2 rounded font-mono text-xs">
                <p className="mb-1">For k[3][50], we decide about item 3:</p>
                <pre>
{`k[3][50] = max(
  k[2][50],               // Don't take item 3
  v[2] + k[2][50-w[2]]    // Take item 3
)
= max(160, 120 + k[2][20])
= max(160, 120 + 100)
= max(160, 220)
= 220`}
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-amber-700">Code Pattern</h3>
              <div className="bg-gray-100 p-2 rounded font-mono text-xs overflow-auto">
                <pre>
{`// Initialize first row and column with 0
for (i = 0; i <= n; i++) {
  for (j = 0; j <= W; j++) {
    if (i == 0 || j == 0)
      k[i][j] = 0;
    else if (w[i-1] <= j)
      k[i][j] = max(
        k[i-1][j],                    // Don't take
        v[i-1] + k[i-1][j-w[i-1]]     // Take
      );
    else
      k[i][j] = k[i-1][j];            // Can't take
  }
}
return k[n][W];`}
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h3 className="font-medium mb-1 text-amber-700">Complexity Analysis</h3>
              <p className="text-sm mb-1"><span className="font-semibold">Time Complexity:</span> O(n·W)</p>
              <p className="text-sm mb-1"><span className="font-semibold">Space Complexity:</span> O(n·W)</p>
              <div className="mt-2 flex items-center">
                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  Advantage: No recursion overhead
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final comparison section */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-semibold mb-4 text-center">Performance Comparison</h2>
        
        <div className="overflow-auto">
          <table className="min-w-full border-collapse border mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Metric</th>
                <th className="border p-2">Brute Force</th>
                <th className="border p-2">Top-Down</th>
                <th className="border p-2">Bottom-Up</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-medium">Time Complexity</td>
                <td className="border p-2 bg-red-50">O(2<sup>n</sup>)</td>
                <td className="border p-2 bg-green-50">O(n·W)</td>
                <td className="border p-2 bg-green-50">O(n·W)</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Space Complexity</td>
                <td className="border p-2 bg-green-50">O(n)</td>
                <td className="border p-2 bg-yellow-50">O(n·W + n)</td>
                <td className="border p-2 bg-yellow-50">O(n·W)</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Approach Type</td>
                <td className="border p-2">Recursive</td>
                <td className="border p-2">Recursive + Memoization</td>
                <td className="border p-2">Iterative</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Stack Overflow Risk</td>
                <td className="border p-2 bg-red-50">High</td>
                <td className="border p-2 bg-yellow-50">Medium</td>
                <td className="border p-2 bg-green-50">None</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Solution Tracing</td>
                <td className="border p-2 bg-yellow-50">Hard</td>
                <td className="border p-2 bg-yellow-50">Medium</td>
                <td className="border p-2 bg-green-50">Easy</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">Best For</td>
                <td className="border p-2">Small inputs (n ≤ 20)</td>
                <td className="border p-2">When only some subproblems needed</td>
                <td className="border p-2">Large problems, production code</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 space-y-2">
          <h3 className="font-medium text-lg">Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bottom-up is generally preferred for production code due to its efficiency and lack of recursion overhead</li>
            <li>Top-down approach closely follows the recursive formulation and is easier to understand initially</li>
            <li>Both DP approaches dramatically improve performance compared to brute force</li>
            <li>We can optimize bottom-up further by using only two rows of the table (current and previous) to reduce space complexity to O(W)</li>
          </ul>
          
          <div className="bg-blue-50 p-3 rounded-lg mt-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> For the given example with 3 items and capacity 50, all approaches give the optimal solution value 220, but with vastly different computational efficiency. The optimal selection includes items 2 and 3 (total weight: 50, total value: 220).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnapsackComparison; 