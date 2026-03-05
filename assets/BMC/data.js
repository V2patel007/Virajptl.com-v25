// ===== BASKLY FINANCIAL DATA =====
const BASKLY_FINANCIALS = {
  // FIXED COSTS (One-time)
  fixedInvestment: {
    inventory: 1000000,
    interior: 2500000,
    uniform: 5000,
    branding: 100000,
    tech: 225000,
    license: 50000,
    cctv: 60000,
    get total() { return this.inventory + this.interior + this.uniform + this.branding + this.tech + this.license + this.cctv; }
  },

  // RECURRING MONTHLY COSTS
  monthlyFixed: {
    rent: 180000,
    salary: 87000,
    electricity: 20000,
    packaging: 25000,
    inventory: 150000,
    insurance: 6000,
    maintenance: 12000,
    marketing: 100000,
    technical: 3000,
    miscellaneous: 30000,
    get total() {
      return this.rent + this.salary + this.electricity + this.packaging +
             this.inventory + this.insurance + this.maintenance +
             this.marketing + this.technical + this.miscellaneous;
    }
  },

  // REVENUE SCENARIOS
  revenue: {
    // 60% Cafe, 40% Grocery split
    goal: { // ₹50,000/day = ₹15,00,000/month
      daily: 50000,
      monthly: 1500000,
      cafe: { ticketSize: 666, billsPerDay: 30, dailyRev: 666*30, monthlyRev: 666*30*30 },
      grocery: { ticketSize: 533, billsPerDay: 25, dailyRev: 533*25, monthlyRev: 533*25*30 }
    },
    best: { // ₹10,00,000/month
      monthly: 1000000,
      cafe: { ticketSize: 666, billsPerDay: 30, dailyRev: 666*30, monthlyRev: 666*30*30 },
      grocery: { ticketSize: 533, billsPerDay: 25, dailyRev: 533*25, monthlyRev: 533*25*30 }
    },
    breakeven: { // ₹6,13,000/month
      monthly: 613000,
      cafe: { ticketSize: 600, billsPerDay: 21, dailyRev: 600*21, monthlyRev: 600*21*30 },
      grocery: { ticketSize: 700, billsPerDay: 12, dailyRev: 700*12, monthlyRev: 700*12*30 }
    }
  },

  // MARGINS (assumed industry standard)
  margins: {
    cafe: 0.62, // ~62% gross margin for F&B
    grocery: 0.28 // ~28% gross margin for organic grocery
  }
};

// CALCULATIONS
const CALC = {
  totalInvestment: BASKLY_FINANCIALS.fixedInvestment.total,
  monthlyFixed: BASKLY_FINANCIALS.monthlyFixed.total,
  breakevenRevenue: 613000,

  // Monthly projection build-up (12 months)
  projections: function() {
    const months = [];
    const realisticRevenues = [
      190000,   // Month 1
      280000,   // Month 2
      400000,   // Month 3
      520000,   // Month 4
      650000,   // Month 5
      780000,   // Month 6
      880000,   // Month 7
      960000,   // Month 8
      1050000,  // Month 9
      1130000,  // Month 10
      1210000,  // Month 11
      1300000   // Month 12
    ];
    
    for (let i = 0; i < 12; i++) {
      const revenue = realisticRevenues[i];
      const cogs = Math.round(revenue * 0.52); // blended ~48% gross margin
      const fixed = BASKLY_FINANCIALS.monthlyFixed.total;
      const profit = revenue - cogs - fixed;
      months.push({
        month: i + 1,
        revenue,
        cogs,
        fixed,
        profit,
        cumulative: 0 // will be computed after
      });
    }
    let cum = 0;
    months.forEach(m => { cum += m.profit; m.cumulative = cum; });
    return months;
  }
};

window.BASKLY = { FINANCIALS: BASKLY_FINANCIALS, CALC };
