// all explanaions are recorded under this section
const EXPLANATIONS = {
  // Week 1, 4 axis cost&benefit
  "4-axis-Cost-Benefit": `
    <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week1 Elasticity-Flexible-Demand
  "Elasticity-Flexible-Demand": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week1 Elasticity-Staircase-Demand
  "Elasticity-Staircase-Demand": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

   //Week1 Lectorial
  "Lectorial": `
   <p>Suppose that you can hire a mechanic to work on your car for up to six hours to locate issues and adress them.</p>
    <p>The total benefit of repair work is: B(H)=654H-40H<sup>2</sup>; The total cost is C(H)=110H+40H<sup>2</sup></p>
    <p>H refers to the number of hours. What is your best choice?</sup></p>
  `,

  //Week1 Ans
  "Lectorialans": `
   <p>1. Compute the net benefit function: NB(H) = B(H) − C(H) = 544H − 80H<sup>2</sup></p>
   <p>2. Find the optimal number of hours by maximizing NB(H).This requires setting the derivative of NB(H) equal to zero:</p>
   <p>&nbsp;&nbsp;&nbsp;dNB/dH = 544 − 160H = 0</p>
   <p>3. Solve for H -> H = 3.4 hours</p>
   <p>Since 3.4 hours is below the 6-hour limit, the mechanic should be hired for 3.4 hours.</p>
  `,
  
  //Week1 Market-interventions-revised
  "Market-interventions-revised": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
  `,

  //Week1 Max
  "Max": `
   <p>The financial harm caused by evasion: H(I)=32/(I+1), Cost of Inspections: C(I)=2I</p>
    <p>I refers to the number of inspections per route per day</p>
    <p>Define the total loss to PTV from fare evasion as L(I)=H(I)+C(I).</p>
    <p>Solve for the optimal number of inspections I<sup>*</sup>per route per day. Show MB(I<sup>*</sup>)=MC(I<sup>*</sup>)</p>
  `,

  //Week1 Maxans
  "Maxans": `
  <p>Differentiate L(I): dL/dI = -32/(I+1)<sup>2</sup> + 2.</p>
  <p>Set the derivative equal to zero:-32/(x+1)<sup>2</sup> + 2 = 0 ⇒ (x+1)<sup>2</sup> = 16 ⇒ x = 3.</p>
  <p>Thus the optimal number of inspections is x* = 3 per route per day.</p>
  <p>At this point MB(x*) = MC(x*) = 2 </p>
`,

  //Week1 Quiz
  "W1Quiz": `
   <p>f(x,y)=x<sup>&alpha</sup>y<sup>&beta</sup>,g(x)=5ln(x)</p>
    <p>1. Calculate: df/dx and df/dy when x=2,y=2</p>
    <p>2. Calculate: dg(x)/dx when x=10</p>
  `,

   //Week1 Quizans
  "W1Quizans": `
   <p>df(x,y)/dx=4, df(x,y)/dy=8 when x=2, y=2</p>
    <p>dg(x)/dx=0.5 when x=10</p>
  `,

  //Week1 Elasticity
  "Elasticity": `
   <p>1. Exp 1.</p>
    <p>2. Exp 1.</p>
    <p>3. AExp 1.</p>
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
