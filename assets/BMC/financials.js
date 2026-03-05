// ===== FINANCIALS.JS =====
const F = window.BASKLY.FINANCIALS;

function fmt(n) {
  if (Math.abs(n) >= 100000) return '₹' + (n/100000).toFixed(1) + 'L';
  if (Math.abs(n) >= 1000) return '₹' + Math.round(n/1000) + 'K';
  return '₹' + Math.round(n);
}
function fmtFull(n) {
  return '₹' + Math.abs(Math.round(n)).toLocaleString('en-IN');
}

window.renderFinancialSection = function() {
  const projs = BASKLY.CALC.projections();
  const fi = F.fixedInvestment;
  const mf = F.monthlyFixed;
  const be = F.revenue.breakeven;
  const best = F.revenue.best;
  const goal = F.revenue.goal;

  const beMonth = projs.findIndex(m => m.cumulative >= 0) + 1;

  return `
<div class="section-header">
  <div class="section-icon">💰</div>
  <div class="section-header-text">
    <h1>Financial Dashboard</h1>
    <p>Live calculations, projections & break-even analysis for BASKLY</p>
  </div>
</div>

<!-- KPI Row -->
<div class="dash-kpi-grid">
  <div class="stat-card">
    <div class="stat-label">Total Investment</div>
    <div class="stat-value">${fmt(fi.total)}</div>
    <div class="stat-sub">One-time capital required</div>
  </div>
  <div class="stat-card gold">
    <div class="stat-label">Monthly Fixed Cost</div>
    <div class="stat-value">${fmt(mf.total)}</div>
    <div class="stat-sub">Every month, regardless of sales</div>
  </div>
  <div class="stat-card">
    <div class="stat-label">Break-even Revenue</div>
    <div class="stat-value">${fmt(be.monthly)}</div>
    <div class="stat-sub">/month to cover all costs</div>
  </div>
  <div class="stat-card cafe">
    <div class="stat-label">Daily Sales Goal</div>
    <div class="stat-value">₹50,000</div>
    <div class="stat-sub">${fmt(goal.monthly)}/month target</div>
  </div>
</div>

<!-- Scenario Cards -->
<div class="scenario-cards">
  <div class="scenario-card best">
    <div class="scenario-label">🚀 Goal Scenario</div>
    <div class="scenario-value" style="color:var(--green-300)">${fmt(goal.monthly)}<span style="font-size:14px;color:var(--text-muted)">/mo</span></div>
    <div class="scenario-prob">₹50,000/day target</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-secondary)">
      <div>☕ Cafe: ${goal.cafe.billsPerDay} bills × ₹${goal.cafe.ticketSize} = ${fmt(goal.cafe.dailyRev)}/day</div>
      <div>🛒 Grocery: ${goal.grocery.billsPerDay} bills × ₹${goal.grocery.ticketSize} = ${fmt(goal.grocery.dailyRev)}/day</div>
    </div>
  </div>
  <div class="scenario-card base">
    <div class="scenario-label">📊 Best Case</div>
    <div class="scenario-value" style="color:var(--gold-300)">${fmt(best.monthly)}<span style="font-size:14px;color:var(--text-muted)">/mo</span></div>
    <div class="scenario-prob">60% probability – strong launch</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-secondary)">
      <div>☕ Cafe 60%: ${fmt(best.monthly*0.6)}/mo</div>
      <div>🛒 Grocery 40%: ${fmt(best.monthly*0.4)}/mo</div>
    </div>
  </div>
  <div class="scenario-card worst">
    <div class="scenario-label">⚠️ Break-even</div>
    <div class="scenario-value" style="color:#f87171">${fmt(be.monthly)}<span style="font-size:14px;color:var(--text-muted)">/mo</span></div>
    <div class="scenario-prob">Minimum to stay operational</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-secondary)">
      <div>☕ Cafe: ${be.cafe.billsPerDay} bills × ₹${be.cafe.ticketSize}/day</div>
      <div>🛒 Grocery: ${be.grocery.billsPerDay} bills × ₹${be.grocery.ticketSize}/day</div>
    </div>
  </div>
</div>

<div class="grid-2">
  <!-- Fixed Investment Breakdown -->
  <div class="card">
    <div class="card-header">
      <div class="card-title"><i class="fas fa-building"></i> One-Time Investment</div>
      <div class="card-badge badge-gold">${fmtFull(fi.total)} Total</div>
    </div>
    <div class="fin-category">Capital Expenditure</div>
    ${[
      ['Inventory (Stock)', fi.inventory],
      ['Interior + Architecture + Machines', fi.interior],
      ['Uniforms', fi.uniform],
      ['Branding', fi.branding],
      ['Technology Setup', fi.tech],
      ['Licenses & Permits', fi.license],
      ['CCTV Setup', fi.cctv],
    ].map(([l,v]) => `
      <div class="fin-row">
        <span class="fin-label">${l}</span>
        <span class="fin-value green">${fmtFull(v)}</span>
      </div>`).join('')}
    <div class="fin-row total">
      <span class="fin-label">TOTAL INVESTMENT</span>
      <span class="fin-value gold">${fmtFull(fi.total)}</span>
    </div>
  </div>

  <!-- Monthly Fixed Costs -->
  <div class="card">
    <div class="card-header">
      <div class="card-title"><i class="fas fa-calendar-alt"></i> Monthly Operating Costs</div>
      <div class="card-badge badge-cafe">${fmtFull(mf.total)}/mo</div>
    </div>
    <div class="fin-category">Recurring Expenses</div>
    ${[
      ['Rent', mf.rent],
      ['Staff Salaries', mf.salary],
      ['Electricity', mf.electricity],
      ['Packaging', mf.packaging],
      ['Inventory Replenishment', mf.inventory],
      ['Insurance', mf.insurance],
      ['Maintenance', mf.maintenance],
      ['Marketing', mf.marketing],
      ['Technical / Software', mf.technical],
      ['Miscellaneous', mf.miscellaneous],
    ].map(([l,v]) => `
      <div class="fin-row">
        <span class="fin-label">${l}</span>
        <span class="fin-value" style="color:var(--text-secondary)">${fmtFull(v)}</span>
      </div>`).join('')}
    <div class="fin-row total">
      <span class="fin-label">TOTAL MONTHLY COST</span>
      <span class="fin-value red">${fmtFull(mf.total)}</span>
    </div>
  </div>
</div>


<!-- Break-even Deep Dive -->
<div class="card">
  <div class="card-header">
    <div class="card-title"><i class="fas fa-crosshairs"></i> Break-Even Analysis</div>
    <div class="card-badge badge-green">₹6,13,000/month</div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">Break-even Formula</div>
      <div class="highlight-box gold">
        <strong>Break-even = Fixed Costs ÷ Contribution Margin %</strong><br>
        = ₹${mf.total.toLocaleString('en-IN')} ÷ 48% ≈ <strong>₹6,13,000/month</strong>
      </div>
      <div class="fin-row"><span class="fin-label">Monthly Fixed Costs</span><span class="fin-value green">${fmtFull(mf.total)}</span></div>
      <div class="fin-row"><span class="fin-label">Blended Gross Margin</span><span class="fin-value green">~48%</span></div>
      <div class="fin-row"><span class="fin-label">Break-even Revenue</span><span class="fin-value gold">${fmtFull(be.monthly)}</span></div>
      <div class="fin-row"><span class="fin-label">Daily Break-even Target</span><span class="fin-value gold">${fmtFull(Math.round(be.monthly/30))}/day</span></div>
    </div>
    <div>
      <div class="subsection-title">Break-even in Transactions</div>
      <div class="highlight-box">
        <strong>Cafe:</strong> ${be.cafe.billsPerDay} bills/day × ₹${be.cafe.ticketSize} avg check<br>
        <strong>Grocery:</strong> ${be.grocery.billsPerDay} bills/day × ₹${be.grocery.ticketSize} avg basket
      </div>
      <div class="fin-row"><span class="fin-label">Cafe Daily Revenue</span><span class="fin-value">${fmtFull(be.cafe.dailyRev)}</span></div>
      <div class="fin-row"><span class="fin-label">Grocery Daily Revenue</span><span class="fin-value">${fmtFull(be.grocery.dailyRev)}</span></div>
      <div class="fin-row"><span class="fin-label">Total Daily Revenue</span><span class="fin-value gold">${fmtFull(be.cafe.dailyRev + be.grocery.dailyRev)}</span></div>
      <div class="fin-row"><span class="fin-label">Monthly (×30 days)</span><span class="fin-value green">${fmtFull((be.cafe.dailyRev + be.grocery.dailyRev)*30)}</span></div>
    </div>
  </div>
</div>

<!-- Revenue Split Visual -->
<div class="card">
  <div class="card-header">
    <div class="card-title"><i class="fas fa-chart-pie"></i> Revenue Split: 60% Cafe / 40% Grocery</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px">
    ${['Goal (₹15L/mo)', 'Best Case (₹10L/mo)', 'Break-even (₹6.13L/mo)'].map((label, i) => {
      const totals = [1500000, 1000000, 613000];
      const t = totals[i];
      return `<div>
        <div style="text-align:center;margin-bottom:12px;font-size:13px;font-weight:600;color:var(--text-secondary)">${label}</div>
        <div style="height:20px;border-radius:10px;overflow:hidden;display:flex">
          <div style="width:60%;background:linear-gradient(90deg,var(--cafe-500),var(--cafe-300));display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff">Cafe 60%</div>
          <div style="width:40%;background:linear-gradient(90deg,var(--green-600),var(--green-400));display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff">Grocery 40%</div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:var(--text-muted)">
          <span>☕ ${fmt(t*0.6)}</span><span>🛒 ${fmt(t*0.4)}</span>
        </div>
      </div>`;
    }).join('')}
  </div>
</div>`;
};
