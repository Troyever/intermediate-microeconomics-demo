// Load MathJax
(function loadMathJax() {
  if (window.mathjaxLoaded) return;
  window.mathjaxLoaded = true;

  const mj = document.createElement("script");
  mj.id = "MathJax-script";
  mj.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  mj.async = true;

  mj.onerror = () => {
    console.error("MathJax failed to load — retrying...");
    setTimeout(loadMathJax, 1000);
  };

  document.head.appendChild(mj);
})();

// all explanaions are recorded under this section
const EXPLANATIONS = {
  // Week 1, 4 axis cost&benefit
  "4-axis-Cost-Benefit": `
     <h3>A. Cost/Benefit axis</h3>
  <p>
    The first panel compares total benefit <em>B(h)</em> and total cost <em>C(h)</em>. 
    The vertical distance between the two curves is net benefit. 
    At \\(h = 3.5\\)\\), this gap is largest, so it is our candidate optimal choice.
  </p>
  
  <h3>B. Marginal Benefit / Marginal Cost axis</h3>
  <p>
    The second panel shows marginal benefit \\(MB(h) = \\frac{dB(h)}{dh}\\) and marginal cost \\(MC(h) = \\frac{C(h)}{dh}\\). 
    MB(h) and MC(h) are derivatives of B(h) and C(h) (Graph A).
    The optimal choice occurs where \\(MB = MC\\), the benefit of spending another hour is the same as the cost of it. 
    Which happens at <em>h = 3.5</em>.
  </p>
  
  <h3>C. Net Benefit axis</h3>
  <p>
    The third panel plots net benefit \\(NB(h)\\) maps out the gap between B(h) and C(h) in graph A. 
    The best choice is where this curve reaches its maximum. 
    At that point the slope of net benefit is zero, so 
    \\(NB(h) = \\frac{dNB(h)}{dh} = 0\\) at \\(h = 3.5\\).
  </p>
  
  <h3>D. Marginal Net Benefit axis</h3>
  <p>
    The last panel shows marginal net benefit, which is the derivative of NB (Graph C.) 
    \\(NB(h) = MB − MC\\). 
    The optimum is where this curve crosses zero. 
    At \\(h = 3.5\\), marginal net benefit equals zero, which is equivalent to 
    choosing the point where marginal benefit equals marginal cost and net benefit is maximized.
  </p>
  `,

  //Week1 Elasticity-Flexible-Demand
  "Elasticity-Flexible-Demand": ` 
  <p>Elasticity of demand is computed using the point elasticity formula:\\[E_d = \\frac{dQ}{dP} \\cdot \\frac{P}{Q}\\]</p>
  <p>
    Notice that elasticity of demand remains <b>constant</b> at all price level, it is because the Demand curve is a power function. 
    In the example, \\(E_d = -2\\), meaning quantity demanded changes by 2% for every 1% increase in price.</p>
`,

   //Week1 Elasticity-Staircase-Demand
  "Elasticity-Staircase-Demand": `
  <p>This graph shows a staircase (step) demand curve, where quantity changes only at discrete price levels. Because the curve is piecewise vertical and 
    horizontal, elasticity behaves very differently from smooth demand curves.
  </p>

  <p><b>Vertical segments:</b></p>
  <p>When the curve is vertical except at \\(Q = 0\\), quantity does not react to price changes, thus, the elasticity of demand is 0.</p>

  <p><b>Horizontal segments:</b></p>
  <p>On horizontal steps, price does not change (\\( dP = 0 \\)), the percentage change in price is zero, so demand elasticity is undefined.</p>
`,

   //Week1 Lectorial
  "Lectorial": `
   <p>Suppose that you can hire a mechanic to work on your car for up to six hours to locate issues and adress them.</p>
    <p>The total benefit of repair work is: \\(B(H)=654H-40H^2\\); The total cost is \\(C(H)=110H+40H^2\\)</p>
    <p>H refers to the number of hours. What is your best choice?</sup></p>
  `,
  
  //Week1 Ans
  "Lectorialans": `
   <p>1. Compute the net benefit function: \\(NB(H) = B(H) − C(H) = 544H − 80H^2\\)</p>
   <p>2. Find the optimal number of hours by maximizing NB(H).This requires setting the derivative of NB(H) equal to zero:</p>
   <p>&nbsp;&nbsp;&nbsp;\\(\\frac{dNB}{dH} = 544 − 160H = 0\\)</p>
   <p>3. Solve for H -> \\(H = 3.4\\) hours</p>
   <p>Since 3.4 hours is below the 6-hour limit, the mechanic should be hired for 3.4 hours.</p>
  `,
  
  //Week1 Max
  "Max": `
   <p>The financial harm caused by evasion: \\(H(I)=\\frac{32}{(I+1)}\\), Cost of Inspections: \\(C(I)=2I\\)</p>
    <p>I refers to the number of inspections per route per day</p>
    <p>Define the total loss to PTV from fare evasion as \\(L(I)=H(I)+C(I)\\).</p>
    <p>Solve for the optimal number of inspections \\(I^\*\\) per route per day. Show \\(MB(I^\*)=MC(I^\*)\\)</p>
  `,

  //Week1 Maxans
  "Maxans": `
  <p>Differentiate L(I): \\(\\frac{dL}{dI} =\\frac{-32}{(I+1)^2}+ 2\\)</p>
  <p>Set the derivative equal to zero:\\(\\frac{-32}{(I+1)^2} + 2 = 0\\;\\Longrightarrow\\; (I+1)^2 = 16 \\;\\Longrightarrow\\; I = 3\\)</p>
  <p>Thus the optimal number of inspections is \\(I^\* = 3\\) per route per day.</p>
  <p>At this point \\(MB(I^\*) = MC(I^\*) = 2\\) </p>
`,

  //Week1 Quiz
  "W1Quiz": `
   <p>\\(f(x,y)=x^{\\alpha}y^{\\beta}\\),\\(g(x)=5\ln(x)\\)</p>
    <p>1. Calculate: \\(\\frac{df}{dx}\\) and \\(\\frac{df}{dy}\\) when \\(x=2,y=2\\)</p>
    <p>2. Calculate: \\(\\frac{dg(x)}{dx}\\) when \\(x=10\\)</p>
  `,

   //Week1 Quizans
  "W1Quizans": `
   <p>\\(\\frac{df(x,y)}{dx}=4\\), \\(\\frac{df(x,y)}{dy}=8\\) when \\(x=2\\), \\(y=2\\)</p>
    <p>\\(\\frac{dg(x)}{dx}=0.5\\) when \\(x=10\\)</p>
  `,

  //Week1 Elasticity
 "Elasticity": `
  <h3>Definition</h3>
  <h3>Elasticity of two given points (Mid Point Approach)</h3>
  <p>\\(E_d = \\frac{\\Delta Q_d}{\\Delta P_d} \\cdot \\frac{P_{d,mid}}{Q_{d,mid}}\\)</p>
  <p>Since the demand curve is downward sloping, \\(E_d\\) is always negative. For simplicity, we sometimes take the absolute value.</p>
  <p>\\(E_s = \\frac{\\Delta Q_s}{\\Delta P_s} \\cdot \\frac{P_{s,mid}}{Q_{s,mid}}\\)</p>
  <p>Opposite to \\(E_d\\), \\(E_s\\) is always positive.</p>
  <h3>Elasticity at one point</h3>
  <p>Point elasticity measures the responsiveness of quantity demanded/supplied to a 1% change in price at a specific point on the curve.</p>
  <p>\\(E_d = \\frac{dQ_d}{dP} \\cdot \\frac{P}{Q_d}\\)</p>
  <p>\\(E_s = \\frac{dQ_s}{dP} \\cdot \\frac{P}{Q_s}\\)</p>
`,

  //Week2 Consumers-Problem
  "Consumers-Problem": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

    //Week2 Indifference-curve
  "Indifference-curve": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week2 Utility-Max
  "Utility-Max": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

    //Week2 Discrete-Demand-Supply
  "Discrete-Demand-Supply": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Budget-Line-With-Complex-Pricing
  "Budget-Line-With-Complex-Pricing": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Consumers-Problem-Lecture-Example
  "Consumers-Problem-Lecture-Example": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week3 Inferior-Good
  "Inferior-Good": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Perfect-Complements
  "Perfect-Complements": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week3 Quasi-Linear-Optimization
  "Quasi-Linear-Optimization": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Revealed-Preference
  "Revealed-Preference": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Utility-Max-CES
  "Utility-Max-CES": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week3 Sales-vs-Income-Tax
  "Sales-vs-Income-Tax": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week4 Aggregate-Demand
  "Aggregate-Demand": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Consumers-Problem-HW
  "Consumers-Problem-HW": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Curves&Demand
  "Curves&Demand": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Curves-Expansion-Demand
  "SCurves-Expansion-Demand": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Ex-2023-Q3
  "Ex-2023-Q3": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 IE-SE-CobbDouglas
  "IE-SE-CobbDouglas": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 IE-SE-Quasilinear
  "IE-SE-Quasilinear": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Intertemporal-consumption
  "Intertemporal-consumption": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Time-IE-SE
  "Time-IE-SE": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

     //Week4 Consumer-Optimization
  "Consumer-Optimization": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,
};


//slider
// Week1 market Interventions revised
const POLICY_EXPLANATIONS = {
  1: {
    name: "No intervention",
   html: `
  <p><b>No intervention:</b> The market clears at the competitive equilibrium.<br>
  CS is the area under demand and above the equilibrium price;PS is the area above supply and below the equilibrium price.<br>
  There is no deadweight loss.</p>
`
  },
  2: {
    name: "Tax on producers",
    html: `
      <p><b>Tax on producers:</b> A per-unit tax raises the price buyers pay and lowers
      the price sellers receive, so quantity falls. CS and PS both shrink. 
      Government revenue is the tax per unit times the traded quantity, shown as a rectangle 
      between buyer and seller prices. DWL is the triangle between the old and new quantities.</p>
    `
  },
  3: {
    name: "Subsidy on producers",
    html: `
      <p><b>Subsidy on producers:</b> A per-unit subsidy lowers the effective cost of supplying.
      Buyers pay less, sellers receive more, and quantity rises above the competitive level.
      CS and PS both increase, but the government pays the subsidy rectangle. 
      DWL comes from overproduction relative to the efficient quantity.</p>
    `
  },
  4: {
    name: "Price floor",
    html: `
      <p><b>Price floor:</b> A binding floor sets a minimum price above equilibrium.
      Quantity supplied exceeds quantity demanded, so only the smaller quantity is traded.
      CS falls, PS may rise for inframarginal sellers, and a DWL triangle appears because 
      output is below the efficient level.</p>
    `
  },
  5: {
    name: "Price support",
    html: `
      <p><b>Price support:</b> The government guarantees a high price and buys any excess supply.
      Consumers pay the support price, producers sell more (to consumers and to the government), 
      and government expenditure is the support price times the surplus quantity. 
      DWL arises from overproduction.</p>
    `
  },
  6: {
    name: "Production quota",
    html: `
      <p><b>Production quota:</b> A quota caps the maximum quantity that can be sold.
      When the quota is below the competitive quantity, price rises and traded quantity falls.
      CS falls, PS is smaller overall, there is no government revenue, and DWL reflects the 
      lost trades between quota quantity and the competitive quantity.</p>
    `
  },
  7: {
    name: "Voluntary reduction",
    html: `
      <p><b>Voluntary reduction:</b> Firms voluntarily restrict output (for example due to 
      agreements or social pressure). Quantity traded falls below the competitive level,
      price rises, CS falls, and PS is ambiguous. There is no direct government spending,
      but DWL appears because fewer mutually beneficial trades occur.</p>
    `
  }
};

// -----------------
// Button → load explanation
// -----------------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("policy-buttons");
  const expBox = document.getElementById("policy-exp");

  if (!container || !expBox) return;

  container.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-policy");
    if (!id) return;

    expBox.innerHTML = POLICY_EXPLANATIONS[id].html;
  });

  // Default load (policy 1)
  expBox.innerHTML = POLICY_EXPLANATIONS[1].html;
});

