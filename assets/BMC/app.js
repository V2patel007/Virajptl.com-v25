// ===== APP MAIN =====
document.addEventListener('DOMContentLoaded', () => {
  const sectionsContainer = document.getElementById('sectionsContainer');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const breadcrumb = document.getElementById('breadcrumb');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  // Load Financials section HTML
  window.BASKLY.sections.financials = window.renderFinancialSection();

  // Create static DOM for all sections to preserve input state
  Object.keys(window.BASKLY.sections).forEach(key => {
    if (key === 'dashboard') return;
    const div = document.createElement('div');
    div.id = 'sec_' + key;
    div.style.display = 'none';
    div.innerHTML = window.BASKLY.sections[key];
    sectionsContainer.appendChild(div);
  });

  // Navigation Logic
  function navigate(sectionId) {
    if (!sectionId || !document.getElementById('sec_' + sectionId)) return;
    
    // Hide all
    Array.from(sectionsContainer.children).forEach(child => {
      child.style.display = 'none';
      child.style.opacity = '0';
      child.style.animation = 'none';
    });
    
    // Show active
    const activeSec = document.getElementById('sec_' + sectionId);
    activeSec.style.display = 'block';
    setTimeout(() => {
      activeSec.style.opacity = '1';
      activeSec.style.animation = 'fadeIn 0.4s ease forwards';
    }, 10);
    
    // Update nav links
    navLinks.forEach(link => {
      if(link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
        breadcrumb.textContent = link.querySelector('span').textContent;
      } else {
        link.classList.remove('active');
      }
    });

    if (window.innerWidth <= 900) {
      sidebar.classList.remove('mobile-open');
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
      navigate(section);
      window.location.hash = section;
    });
  });

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
  });

  // Export / Save
  document.getElementById('exportBtn').addEventListener('click', (e) => {
    e.preventDefault();
    // Temporarily show all sections for printing
    const originalDisplays = [];
    const children = Array.from(sectionsContainer.children);
    children.forEach(child => {
      originalDisplays.push(child.style.display);
      child.style.display = 'block';
      child.style.opacity = '1';
    });
    
    window.print();
    
    // Restore layout
    children.forEach((child, i) => {
      child.style.display = originalDisplays[i];
    });
    
    showToast('Report printed to PDF!');
  });
  
  document.getElementById('saveBtn').addEventListener('click', (e) => {
    e.preventDefault();
    saveProgress();
  });

  function saveProgress() {
    updateCompletion();
    const data = {};
    const inputs = document.querySelectorAll('#sectionsContainer input, #sectionsContainer textarea, #sectionsContainer select');
    inputs.forEach((inp, idx) => {
      if (inp.type === 'checkbox' || inp.type === 'radio') {
        data['inp_' + idx] = inp.checked;
      } else {
        data['inp_' + idx] = inp.value;
      }
    });
    const radioSelected = [];
    document.querySelectorAll('#sectionsContainer .radio-btn').forEach((btn, idx) => {
      if (btn.classList.contains('selected')) radioSelected.push(idx);
    });
    data.radioSelected = radioSelected;
    
    const checkSelected = [];
    document.querySelectorAll('#sectionsContainer .checkbox-item').forEach((btn, idx) => {
      if (btn.classList.contains('checked')) checkSelected.push(idx);
    });
    data.checkSelected = checkSelected;

    localStorage.setItem('BASKLY_CANVAS_DATA', JSON.stringify(data));
    showToast('Progress Saved Remotely in Browser!');
  }

  function loadProgress() {
    const json = localStorage.getItem('BASKLY_CANVAS_DATA');
    if (!json) return;
    try {
      const data = JSON.parse(json);
      const inputs = document.querySelectorAll('#sectionsContainer input, #sectionsContainer textarea, #sectionsContainer select');
      inputs.forEach((inp, idx) => {
        if (data['inp_' + idx] !== undefined) {
          if (inp.type === 'checkbox' || inp.type === 'radio') {
            inp.checked = data['inp_' + idx];
          } else {
            inp.value = data['inp_' + idx];
          }
        }
      });
      document.querySelectorAll('#sectionsContainer .radio-btn').forEach((btn, idx) => {
        if (data.radioSelected && data.radioSelected.includes(idx)) btn.classList.add('selected');
        else btn.classList.remove('selected');
      });
      document.querySelectorAll('#sectionsContainer .checkbox-item').forEach((btn, idx) => {
        if (data.checkSelected && data.checkSelected.includes(idx)) btn.classList.add('checked');
        else btn.classList.remove('checked');
      });
      console.log('Progress loaded');
    } catch(e) { console.error('Failed to load progress', e); }
  }

  // Calculate generic completion logic specifically for Canvas sections
  function updateCompletion() {
    const canvasDivs = Array.from(document.querySelectorAll('div[id^="sec_"]:not(#sec_financials)'));
    let total = 0;
    let filled = 0;

    canvasDivs.forEach(div => {
      const inputs = div.querySelectorAll('textarea, input[type="text"]');
      total += inputs.length;
      inputs.forEach(i => { if(i.value.trim() !== '') filled++; });
      
      const checks = div.querySelectorAll('.checkbox-item');
      total += checks.length;
      checks.forEach(c => { if(c.classList.contains('checked')) filled++; });
      
      const radios = div.querySelectorAll('.radio-group');
      total += radios.length;
      radios.forEach(r => { if(r.querySelector('.selected')) filled++; });
    });

    if (total === 0) total = 50; 
    let pct = Math.min(100, Math.round((filled / total) * 100));
    
    const pctStr = pct + '%';
    const completionElement = document.getElementById('completionPct');
    const fillElement = document.getElementById('progressFill');
    
    if (completionElement) completionElement.textContent = pctStr;
    if (fillElement) fillElement.style.width = pctStr;
  }

  function attachFormListeners() {
    // Radio buttons
    const radiogroups = document.querySelectorAll('.radio-group');
    radiogroups.forEach(group => {
      const btns = group.querySelectorAll('.radio-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          updateCompletion();
        });
      });
    });

    // Custom checkboxes
    const checkItems = document.querySelectorAll('.checkbox-item');
    checkItems.forEach(item => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (cb) {
        cb.addEventListener('change', () => {
          if (cb.checked) item.classList.add('checked');
          else item.classList.remove('checked');
          updateCompletion();
        });
      }
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(i => {
      i.addEventListener('blur', updateCompletion);
    });
  }

  // Toast
  window.showToast = function(msg) {
    const toast = document.getElementById('toast');
    toast.innerHTML = '<i class="fas fa-check-circle" style="color:var(--green-400)"></i> ' + msg;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
  };

  // Init Listeners and Routing
  attachFormListeners();
  loadProgress();

  let initial = 'financials';
  if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    if (window.BASKLY.sections[hash]) initial = hash;
  }
  navigate(initial);

  // Auto-save when typing
  document.getElementById('sectionsContainer').addEventListener('input', () => {
    updateCompletion();
    saveProgress();
  });
  
  setTimeout(updateCompletion, 500);
});
