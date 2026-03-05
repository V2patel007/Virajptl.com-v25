window.BASKLY = window.BASKLY || {};
window.BASKLY.sections = window.BASKLY.sections || {};

window.BASKLY.sections.dashboard = `
<div class="section-header">
  <div class="section-icon">📈</div>
  <div class="section-header-text">
    <h1>BASKLY Business Model Canvas</h1>
    <p>Premium Grocery Store + Cafe Hybrid | Vadodara, Gujarat</p>
  </div>
</div>

<div class="dash-kpi-grid">
  <div class="stat-card">
    <div class="stat-label">Total Completion</div>
    <div class="stat-value" id="dashCompletion">0%</div>
    <div class="stat-sub">Canvas Fields Filled</div>
  </div>
  <div class="stat-card cafe">
    <div class="stat-label">Daily Goal</div>
    <div class="stat-value">₹50K</div>
    <div class="stat-sub">Target Daily Revenue</div>
  </div>
  <div class="stat-card gold">
    <div class="stat-label">Break-even</div>
    <div class="stat-value">₹6.13L</div>
    <div class="stat-sub">Monthly Goal to Cover Costs</div>
  </div>
  <div class="stat-card">
    <div class="stat-label">Core Strategy</div>
    <div class="stat-value">Hybrid</div>
    <div class="stat-sub">Grocery + Cafe Integration</div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title"><i class="fas fa-layer-group"></i> Canvas Overview</div>
  </div>
  <div class="canvas-overview">
    <div class="canvas-block bmc-cell" style="grid-area: kp">
      <h5>Key Partnerships</h5>
      <p>Local organic farms, Premium CPG brands, Luxury Real Estate, Influencers</p>
    </div>
    <div class="canvas-block bmc-cell" style="grid-area: ka">
      <h5>Key Activities</h5>
      <p>Sourcing, Quality Control, Store Operations, Cafe Prep, Content Creation</p>
    </div>
    <div class="canvas-block bmc-cell bmc-value" style="grid-area: vp">
      <h5>Value Propositions</h5>
      <p><strong>GROCERY:</strong> Premium, curated organic products, beautiful shopping experience.<br>
      <strong>CAFE:</strong> Truly healthy, Instagram-worthy food/coffee in a work-friendly space.<br>
      <strong>HYBRID:</strong> Shop while you eat, eat while you shop.</p>
    </div>
    <div class="canvas-block bmc-cell" style="grid-area: cr">
      <h5>Customer Relationships</h5>
      <p>Personalized VIP service, Community Building, Memberships (Collective)</p>
    </div>
    <div class="canvas-block bmc-cell" style="grid-area: cs">
      <h5>Customer Segments</h5>
      <p>Affluent Families (₹25L+ HH), Young Professionals (25-35), Fitness Enthusiasts</p>
    </div>
    <div class="canvas-block bmc-cell" style="grid-area: ch">
      <h5>Channels</h5>
      <p>Physical Store (Vadodara), E-commerce/Delivery, IG/Social, Influencers</p>
    </div>
    <div class="canvas-block bmc-cell" style="grid-area: rs">
      <h5>Key Resources</h5>
      <p>Prime Location, Direct supply chain, Brand/Design, Staff expertise</p>
    </div>
    <div class="canvas-block bmc-cell bmc-costs bmc-full" style="grid-area: co">
      <h5>Cost Structure</h5>
      <p><strong>Fixed (~₹6.23L/mo):</strong> Rent (₹1.8L), Salary (₹87K), Marketing (₹1L)...<br>
      <strong>Variable:</strong> COGS (Grocery ~72%, Cafe ~38%), Utilities, Packaging</p>
    </div>
    <div class="canvas-block bmc-cell bmc-revenue bmc-full" style="grid-area: rv">
      <h5>Revenue Streams</h5>
      <p><strong>Retail (~40%):</strong> Fresh produce, Dairy, Packaged, Supplements<br>
      <strong>F&B (~60%):</strong> Coffee, Smoothies, Breakfast, Lunch Bowls<br>
      <strong>Other:</strong> Memberships, B2B, Events</p>
    </div>
  </div>
</div>
`;

window.BASKLY.sections.customers = `
<div class="section-header">
  <div class="section-icon">👥</div>
  <div class="section-header-text">
    <h1>1. Customer Segments</h1>
    <p>Understanding who BASKLY serves.</p>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">1.1 Target Customer Profile</div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">The Anchor Demographic</div>
      <div class="form-group">
        <label>Which 5 specific ultra-premium residential projects in the Sevasi-Bhayli corridor are our "Day 1" priorities?</label>
        <textarea rows="3" placeholder="Identify specific projects (e.g., Polaris, Orbis, Reeva)..."></textarea>
      </div>
    </div>
    <div>
      <div class="subsection-title">The Halo Effect (Youth 18-34)</div>
      <div class="form-group">
        <label>How do we categorize the "Aspirational Youth"—are they café-only customers, or do they serve as our primary digital marketing engine?</label>
        <textarea rows="3" placeholder="Details on capturing the 'cool crowd' who brand evangelize..."></textarea>
      </div>
    </div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">Segment Definition (Psychographics)</div>
      <div class="form-group">
        <label>Beyond "High-Net-Worth," which profile drives our volume—the Status-Seeker (badge) or the Biohacker (purity)?</label>
        <textarea rows="3" placeholder="Identify the primary driver..."></textarea>
      </div>
    </div>
    <div>
      <div class="subsection-title">The Business Elite</div>
      <div class="form-group">
        <label>How do we engage industrial leaders from GIDC hubs & Gaekwad Baroda Golf Club?</label>
        <textarea rows="3" placeholder="Networking, b2b delivery, or elite memberships..."></textarea>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">1.2 Behaviour & Preferences</div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">Grocery Shopping Habits</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Supermarkets</label>
        <label class="checkbox-item"><input type="checkbox"> Online delivery</label>
        <label class="checkbox-item"><input type="checkbox"> Local vendors</label>
        <label class="checkbox-item"><input type="checkbox"> Specialty stores</label>
      </div>
    </div>
    <div>
      <div class="subsection-title">Cafe Audience</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Health conscious visitors</label>
        <label class="checkbox-item"><input type="checkbox"> Work-from-cafe customers</label>
        <label class="checkbox-item"><input type="checkbox"> Yoga/wellness communities</label>
        <label class="checkbox-item"><input type="checkbox"> Families</label>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">1.3 Customer Pain Points</div>
  </div>
  <div class="grid-2">
    <div class="form-group">
      <label>Current concerns with organic food:</label>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Chemicals</label>
        <label class="checkbox-item"><input type="checkbox"> Fake organic labels</label>
        <label class="checkbox-item"><input type="checkbox"> Lack of transparency</label>
        <label class="checkbox-item"><input type="checkbox"> Limited product availability</label>
      </div>
    </div>
  </div>
</div>
`;

window.BASKLY.sections.value = `
<div class="section-header">
  <div class="section-icon">✨</div>
  <div class="section-header-text">
    <h1>2. Value Propositions</h1>
    <p>The Ritual of Purity & Functional Opulence.</p>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">2.1 The "Quiet Luxury" Factor</div>
  </div>
  <div class="grid-2">
    <div class="form-group">
      <label>Status vs. Utility</label>
      <textarea rows="3" placeholder="How does our verbal lexicon ('Heirloom,' 'Botanical') solve the customer's need for social signaling and differentiate us?"></textarea>
    </div>
    <div class="form-group">
      <label>The "Erewhon" Factor</label>
      <textarea rows="3" placeholder="What is the one thing BASKLY provides that a customer cannot get at a high-end supermarket (e.g., exclusivity, sensory experience)?"></textarea>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">2.2 The Cafe as a Stage</div>
  </div>
  <div class="form-group">
    <label>In what way does the smoothie and elixir bar serve as a "low-commitment entry point" to wellness privilege for those who aren't yet full-basket shoppers?</label>
    <textarea rows="3" placeholder="Explain the acquisition loop..."></textarea>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">2.3 Preventive Opulence & Symbolic Value</div>
  </div>
  <div class="grid-2">
    <div class="form-group">
      <label>Preventive Opulence</label>
      <textarea rows="3" placeholder="How does staple Bilona-method Ghee solve a 'Risk Reduction' problem for health-conscious mothers to justify status-tier pricing?"></textarea>
    </div>
    <div class="form-group">
      <label>The Mythos of the Products</label>
      <textarea rows="3" placeholder="What is the story? Highlighting fifth-generation farms or mountain artesian spring water in our narratives?"></textarea>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">2.4 General Value Offerings</div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">Product Offering</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Certified organic produce</label>
        <label class="checkbox-item"><input type="checkbox"> Farm sourced produce</label>
        <label class="checkbox-item"><input type="checkbox"> Imported health foods</label>
        <label class="checkbox-item"><input type="checkbox"> Premium pantry products</label>
        <label class="checkbox-item"><input type="checkbox"> Private label products</label>
      </div>
    </div>
    <div>
      <div class="subsection-title">Cafe Value</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Organic meals</label>
        <label class="checkbox-item"><input type="checkbox"> Vegan dishes</label>
        <label class="checkbox-item"><input type="checkbox"> Gluten free food</label>
        <label class="checkbox-item"><input type="checkbox"> Cold pressed juices</label>
        <label class="checkbox-item"><input type="checkbox"> Specialty coffee</label>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div class="card-title">2.5 Emotional & Experiential Value</div>
  </div>
  <div class="grid-2">
    <div>
      <div class="subsection-title">BASKLY Representation</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Trust</label>
        <label class="checkbox-item"><input type="checkbox"> Wellness</label>
        <label class="checkbox-item"><input type="checkbox"> Premium lifestyle</label>
        <label class="checkbox-item"><input type="checkbox"> Conscious consumption</label>
      </div>
    </div>
    <div>
      <div class="subsection-title">Store Feel</div>
      <div class="checkbox-grid">
        <label class="checkbox-item"><input type="checkbox"> Erewhon style premium store</label>
        <label class="checkbox-item"><input type="checkbox"> Community wellness hub</label>
        <label class="checkbox-item"><input type="checkbox"> Lifestyle grocery store</label>
      </div>
    </div>
  </div>
</div>
`;
