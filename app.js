// Define the initial parts list with default quantities
const defaultParts = [
  // Raw Resources
  { id: 'limestone', name: 'Limestone', quantity: 0, category: 'Raw Resources' },
  { id: 'iron-ore', name: 'Iron Ore', quantity: 0, category: 'Raw Resources' },
  { id: 'copper-ore', name: 'Copper Ore', quantity: 0, category: 'Raw Resources' },
  { id: 'caterium-ore', name: 'Caterium Ore', quantity: 0, category: 'Raw Resources' },
  { id: 'coal', name: 'Coal', quantity: 0, category: 'Raw Resources' },
  { id: 'raw-quartz', name: 'Raw Quartz', quantity: 0, category: 'Raw Resources' },
  { id: 'sulfur', name: 'Sulfur', quantity: 0, category: 'Raw Resources' },
  { id: 'bauxite', name: 'Bauxite', quantity: 0, category: 'Raw Resources' },
  { id: 'sam-ore', name: 'S.A.M. Ore', quantity: 0, category: 'Raw Resources' },
  { id: 'uranium', name: 'Uranium', quantity: 0, category: 'Raw Resources' },
  { id: 'water', name: 'Water', quantity: 0, category: 'Raw Resources' },
  { id: 'crude-oil', name: 'Crude Oil', quantity: 0, category: 'Raw Resources' },

  // Refined Resources
  { id: 'concrete', name: 'Concrete', quantity: 0, category: 'Refined Resources' },
  { id: 'iron-ingot', name: 'Iron Ingot', quantity: 0, category: 'Refined Resources' },
  { id: 'copper-ingot', name: 'Copper Ingot', quantity: 0, category: 'Refined Resources' },
  { id: 'caterium-ingot', name: 'Caterium Ingot', quantity: 0, category: 'Refined Resources' },
  { id: 'steel-ingot', name: 'Steel Ingot', quantity: 0, category: 'Refined Resources' },
  { id: 'aluminum-ingot', name: 'Aluminum Ingot', quantity: 0, category: 'Refined Resources' },
  { id: 'quartz-crystal', name: 'Quartz Crystal', quantity: 0, category: 'Refined Resources' },
  { id: 'silica', name: 'Silica', quantity: 0, category: 'Refined Resources' },
  { id: 'copper-powder', name: 'Copper Powder', quantity: 0, category: 'Refined Resources' },
  { id: 'polymer-resin', name: 'Polymer Resin', quantity: 0, category: 'Refined Resources' },
  { id: 'petroleum-coke', name: 'Petroleum Coke', quantity: 0, category: 'Refined Resources' },
  { id: 'aluminum-scrap', name: 'Aluminum Scrap', quantity: 0, category: 'Refined Resources' },
  { id: 'aluminum-casing', name: 'Aluminum Casing', quantity: 0, category: 'Refined Resources' },
  { id: 'empty-fluid-tank', name: 'Empty Fluid Tank', quantity: 0, category: 'Refined Resources' },

  // Intermediate Products
  { id: 'wire', name: 'Wire', quantity: 0, category: 'Intermediate Products' },
  { id: 'cable', name: 'Cable', quantity: 0, category: 'Intermediate Products' },
  { id: 'iron-rod', name: 'Iron Rod', quantity: 0, category: 'Intermediate Products' },
  { id: 'screw', name: 'Screw', quantity: 0, category: 'Intermediate Products' },
  { id: 'iron-plate', name: 'Iron Plate', quantity: 0, category: 'Intermediate Products' },
  { id: 'reinforced-iron-plate', name: 'Reinforced Iron Plate', quantity: 0, category: 'Intermediate Products' },
  { id: 'copper-sheet', name: 'Copper Sheet', quantity: 0, category: 'Intermediate Products' },
  { id: 'alclad-aluminum-sheet', name: 'Alclad Aluminum Sheet', quantity: 0, category: 'Intermediate Products' },
  { id: 'plastic', name: 'Plastic', quantity: 0, category: 'Intermediate Products' },
  { id: 'rubber', name: 'Rubber', quantity: 0, category: 'Intermediate Products' },
  { id: 'steel-pipe', name: 'Steel Pipe', quantity: 0, category: 'Intermediate Products' },
  { id: 'steel-beam', name: 'Steel Beam', quantity: 0, category: 'Intermediate Products' },
  { id: 'encased-industrial-beam', name: 'Encased Industrial Beam', quantity: 0, category: 'Intermediate Products' },
  { id: 'quickwire', name: 'Quickwire', quantity: 0, category: 'Intermediate Products' },
  { id: 'circuit-board', name: 'Circuit Board', quantity: 0, category: 'Intermediate Products' },
  { id: 'computer', name: 'Computer', quantity: 0, category: 'Intermediate Products' },
  { id: 'ai-limiter', name: 'AI Limiter', quantity: 0, category: 'Intermediate Products' },
  { id: 'high-speed-connector', name: 'High-Speed Connector', quantity: 0, category: 'Intermediate Products' },
  { id: 'supercomputer', name: 'Supercomputer', quantity: 0, category: 'Intermediate Products' },
  { id: 'battery', name: 'Battery', quantity: 0, category: 'Intermediate Products' },
  { id: 'heat-sink', name: 'Heat Sink', quantity: 0, category: 'Intermediate Products' },
  { id: 'radio-control-unit', name: 'Radio Control Unit', quantity: 0, category: 'Intermediate Products' },
  { id: 'turbo-motor', name: 'Turbo Motor', quantity: 0, category: 'Intermediate Products' },
  { id: 'electromagnetic-control-rod', name: 'Electromagnetic Control Rod', quantity: 0, category: 'Intermediate Products' },
  { id: 'encased-uranium-cell', name: 'Encased Uranium Cell', quantity: 0, category: 'Intermediate Products' },
  { id: 'non-fissile-uranium', name: 'Non-fissile Uranium', quantity: 0, category: 'Intermediate Products' },
  { id: 'plutonium-pellet', name: 'Plutonium Pellet', quantity: 0, category: 'Intermediate Products' },
  { id: 'encased-plutonium-cell', name: 'Encased Plutonium Cell', quantity: 0, category: 'Intermediate Products' },
  { id: 'cooling-system', name: 'Cooling System', quantity: 0, category: 'Intermediate Products' },
  { id: 'quantum-computer', name: 'Quantum Computer', quantity: 0, category: 'Intermediate Products' },
  { id: 'superposition-oscillator', name: 'Superposition Oscillator', quantity: 0, category: 'Intermediate Products' },

  // Consumables and By-products
  { id: 'heavy-oil-residue', name: 'Heavy Oil Residue', quantity: 0, category: 'Consumables and By-products' },
  { id: 'fuel', name: 'Fuel', quantity: 0, category: 'Consumables and By-products' },
  { id: 'liquid-biofuel', name: 'Liquid Biofuel', quantity: 0, category: 'Consumables and By-products' },
  { id: 'turbofuel', name: 'Turbofuel', quantity: 0, category: 'Consumables and By-products' },
  { id: 'alumina-solution', name: 'Alumina Solution', quantity: 0, category: 'Consumables and By-products' },
  { id: 'sulfuric-acid', name: 'Sulfuric Acid', quantity: 0, category: 'Consumables and By-products' },
  { id: 'nitric-acid', name: 'Nitric Acid', quantity: 0, category: 'Consumables and By-products' },
  { id: 'nitrogen-gas', name: 'Nitrogen Gas', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-water', name: 'Packaged Water', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-alumina-solution', name: 'Packaged Alumina Solution', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-sulfuric-acid', name: 'Packaged Sulfuric Acid', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-nitric-acid', name: 'Packaged Nitric Acid', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-nitrogen-gas', name: 'Packaged Nitrogen Gas', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-oil', name: 'Packaged Oil', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-heavy-oil-residue', name: 'Packaged Heavy Oil Residue', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-fuel', name: 'Packaged Fuel', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-liquid-biofuel', name: 'Packaged Liquid Biofuel', quantity: 0, category: 'Consumables and By-products' },
  { id: 'packaged-turbofuel', name: 'Packaged Turbofuel', quantity: 0, category: 'Consumables and By-products' },

  // Advanced Components
  { id: 'modular-frame', name: 'Modular Frame', quantity: 0, category: 'Advanced Components' },
  { id: 'heavy-modular-frame', name: 'Heavy Modular Frame', quantity: 0, category: 'Advanced Components' },
  { id: 'fused-modular-frame', name: 'Fused Modular Frame', quantity: 0, category: 'Advanced Components' },
  { id: 'rotor', name: 'Rotor', quantity: 0, category: 'Advanced Components' },
  { id: 'stator', name: 'Stator', quantity: 0, category: 'Advanced Components' },
  { id: 'motor', name: 'Motor', quantity: 0, category: 'Advanced Components' },
  { id: 'crystal-oscillator', name: 'Crystal Oscillator', quantity: 0, category: 'Advanced Components' },
  { id: 'empty-canister', name: 'Empty Canister', quantity: 0, category: 'Advanced Components' },
  { id: 'fabric', name: 'Fabric', quantity: 0, category: 'Advanced Components' },
  { id: 'pressure-conversion-cube', name: 'Pressure Conversion Cube', quantity: 0, category: 'Advanced Components' },
  { id: 'beacon', name: 'Beacon', quantity: 0, category: 'Advanced Components' },
  { id: 'compacted-coal', name: 'Compacted Coal', quantity: 0, category: 'Advanced Components' },
  { id: 'solid-biofuel', name: 'Solid Biofuel', quantity: 0, category: 'Advanced Components' },
  { id: 'uranium-fuel-rod', name: 'Uranium Fuel Rod', quantity: 0, category: 'Advanced Components' },
  { id: 'plutonium-fuel-rod', name: 'Plutonium Fuel Rod', quantity: 0, category: 'Advanced Components' },
  { id: 'nobelisk', name: 'Nobelisk', quantity: 0, category: 'Advanced Components' },
  { id: 'gas-filter', name: 'Gas Filter', quantity: 0, category: 'Advanced Components' },
  { id: 'color-cartridge', name: 'Color Cartridge', quantity: 0, category: 'Advanced Components' },
  { id: 'rifle-cartridge', name: 'Rifle Cartridge', quantity: 0, category: 'Advanced Components' },
  { id: 'spiked-rebar', name: 'Spiked Rebar', quantity: 0, category: 'Advanced Components' },
  { id: 'iodine-infused-filter', name: 'Iodine Infused Filter', quantity: 0, category: 'Advanced Components' },
  { id: 'power-shard', name: 'Power Shard', quantity: 0, category: 'Advanced Components' },
  { id: 'ficsit-coupon', name: 'FICSIT Coupon', quantity: 0, category: 'Advanced Components' },

  // Project Parts
  { id: 'smart-plating', name: 'Smart Plating', quantity: 0, category: 'Project Parts' },
  { id: 'versatile-framework', name: 'Versatile Framework', quantity: 0, category: 'Project Parts' },
  { id: 'automated-wiring', name: 'Automated Wiring', quantity: 0, category: 'Project Parts' },
  { id: 'modular-engine', name: 'Modular Engine', quantity: 0, category: 'Project Parts' },
  { id: 'adaptive-control-unit', name: 'Adaptive Control Unit', quantity: 0, category: 'Project Parts' },
  { id: 'assembly-director-system', name: 'Assembly Director System', quantity: 0, category: 'Project Parts' },
  { id: 'magnetic-field-generator', name: 'Magnetic Field Generator', quantity: 0, category: 'Project Parts' },
  { id: 'thermal-propulsion-rocket', name: 'Thermal Propulsion Rocket', quantity: 0, category: 'Project Parts' },
  { id: 'nuclear-pasta', name: 'Nuclear Pasta', quantity: 0, category: 'Project Parts' }
];

// Save management state
let currentSaveName = localStorage.getItem('currentSaveName') || 'Default Save';
let saves = JSON.parse(localStorage.getItem('satisfactorySaves')) || {
  'Default Save': []
};

// Initialize inventory from localStorage or use defaults
let inventory = loadInventory();

// Current filter and search state
let currentFilter = 'all';
let searchTerm = '';
let currentCategory = 'all';

// Function to load inventory from localStorage
function loadInventory() {
  if (!saves[currentSaveName]) {
    saves[currentSaveName] = [...defaultParts];
    localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
  }
  return [...saves[currentSaveName]];
}

// Function to save inventory to localStorage
function saveInventory() {
  saves[currentSaveName] = inventory;
  localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
}

// Function to filter inventory based on current filter, category and search term
function getFilteredInventory() {
  return inventory.filter(part => {
    // Apply search filter
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply status filter
    let matchesFilter = true;
    if (currentFilter === 'surplus') {
      matchesFilter = part.quantity > 0;
    } else if (currentFilter === 'deficit') {
      matchesFilter = part.quantity < 0;
    }

    // Apply category filter
    let matchesCategory = true;
    if (currentCategory !== 'all') {
      matchesCategory = part.category === currentCategory;
    }
    
    return matchesSearch && matchesFilter && matchesCategory;
  });
}

// Function to render the inventory table
function renderInventory() {
  const tableBody = document.getElementById('inventory-body');
  tableBody.innerHTML = ''; // Clear existing content

  const filteredInventory = getFilteredInventory();
  
  if (filteredInventory.length === 0) {
    const emptyRow = document.createElement('tr');
    const emptyCell = document.createElement('td');
    emptyCell.colSpan = 4;
    emptyCell.textContent = 'No items match your search or filter criteria';
    emptyCell.style.textAlign = 'center';
    emptyCell.style.padding = '20px';
    emptyRow.appendChild(emptyCell);
    tableBody.appendChild(emptyRow);
    return;
  }

  // Add items directly without category headers
  filteredInventory.forEach(part => {
    const row = document.createElement('tr');
    
    // Part name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = part.name;
    row.appendChild(nameCell);
    
    // Quantity cell
    const quantityCell = document.createElement('td');
    quantityCell.className = 'quantity';
    quantityCell.textContent = part.quantity;
    row.appendChild(quantityCell);
    
    // Status cell
    const statusCell = document.createElement('td');
    statusCell.className = 'status';
    if (part.quantity > 0) {
      statusCell.textContent = 'Surplus';
      statusCell.classList.add('surplus');
    } else if (part.quantity < 0) {
      statusCell.textContent = 'Deficit';
      statusCell.classList.add('deficit');
    } else {
      statusCell.textContent = 'Neutral';
      statusCell.classList.add('neutral');
    }
    row.appendChild(statusCell);
    
    // Actions cell
    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions';
    
    // Subtract 5 button
    const subtract5Button = document.createElement('button');
    subtract5Button.className = 'subtract subtract-5';
    subtract5Button.textContent = '-5';
    subtract5Button.addEventListener('click', () => updateQuantity(part.id, -5));
    actionsCell.appendChild(subtract5Button);
    
    // Subtract 1 button
    const subtractButton = document.createElement('button');
    subtractButton.className = 'subtract';
    subtractButton.textContent = '-1';
    subtractButton.addEventListener('click', () => updateQuantity(part.id, -1));
    actionsCell.appendChild(subtractButton);
    
    // Custom quantity input
    const customInput = document.createElement('input');
    customInput.type = 'number';
    customInput.className = 'custom-quantity';
    customInput.placeholder = '#';
    customInput.title = 'Enter custom quantity';
    customInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const value = parseInt(customInput.value, 10);
        if (!isNaN(value)) {
          updateQuantity(part.id, value);
          customInput.value = '';
        }
      }
    });
    actionsCell.appendChild(customInput);
    
    // Add 1 button
    const addButton = document.createElement('button');
    addButton.className = 'add';
    addButton.textContent = '+1';
    addButton.addEventListener('click', () => updateQuantity(part.id, 1));
    actionsCell.appendChild(addButton);
    
    // Add 5 button
    const add5Button = document.createElement('button');
    add5Button.className = 'add add-5';
    add5Button.textContent = '+5';
    add5Button.addEventListener('click', () => updateQuantity(part.id, 5));
    actionsCell.appendChild(add5Button);
    
    row.appendChild(actionsCell);
    
    tableBody.appendChild(row);
  });
}

// Function to update the quantity of a part
function updateQuantity(partId, change) {
  const partIndex = inventory.findIndex(part => part.id === partId);
  if (partIndex !== -1) {
    inventory[partIndex].quantity += change;
    saveInventory();
    renderInventory();
  }
}

// Function to set a specific quantity for a part
function setQuantity(partId, newQuantity) {
  const partIndex = inventory.findIndex(part => part.id === partId);
  if (partIndex !== -1) {
    inventory[partIndex].quantity = newQuantity;
    saveInventory();
    renderInventory();
  }
}

// Function to reset inventory to defaults
function resetInventory() {
  if (confirm('Are you sure you want to reset the inventory to default values?')) {
    inventory = [...defaultParts];
    saveInventory();
    renderInventory();
  }
}

// Function to export inventory data
function exportInventory() {
  const dataStr = JSON.stringify(inventory, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = 'satisfactory-inventory.json';
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

// Function to import inventory data
function importInventory() {
  const modal = document.getElementById('import-modal');
  modal.style.display = 'block';
}

// Function to handle the import confirmation
function confirmImport() {
  const importData = document.getElementById('import-data').value;
  try {
    const parsedData = JSON.parse(importData);
    
    // Validate the data structure
    if (!Array.isArray(parsedData)) {
      throw new Error('Invalid data format: Expected an array');
    }
    
    // Check if each item has the required properties
    const isValid = parsedData.every(item => 
      typeof item === 'object' && 
      item !== null &&
      'id' in item && 
      'name' in item && 
      'quantity' in item
    );
    
    if (!isValid) {
      throw new Error('Invalid data format: Each item must have id, name, and quantity properties');
    }
    
    // Update inventory with the imported data
    inventory = parsedData;
    saveInventory();
    renderInventory();
    
    // Close the modal
    closeModal();
    
    alert('Inventory data imported successfully!');
  } catch (error) {
    alert(`Error importing data: ${error.message}`);
  }
}

// Function to close the import modal
function closeModal() {
  const modal = document.getElementById('import-modal');
  modal.style.display = 'none';
  document.getElementById('import-data').value = '';
}

// Function to set up filter buttons
function setupFilterButtons() {
  const allButton = document.getElementById('show-all');
  const surplusButton = document.getElementById('show-surplus');
  const deficitButton = document.getElementById('show-deficit');
  
  allButton.addEventListener('click', () => {
    setActiveFilter('all');
    allButton.classList.add('active');
    surplusButton.classList.remove('active');
    deficitButton.classList.remove('active');
  });
  
  surplusButton.addEventListener('click', () => {
    setActiveFilter('surplus');
    surplusButton.classList.add('active');
    allButton.classList.remove('active');
    deficitButton.classList.remove('active');
  });
  
  deficitButton.addEventListener('click', () => {
    setActiveFilter('deficit');
    deficitButton.classList.add('active');
    allButton.classList.remove('active');
    surplusButton.classList.remove('active');
  });
}

// Function to set the active filter
function setActiveFilter(filter) {
  currentFilter = filter;
  renderInventory();
}

// Function to set up search input
function setupSearchInput() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderInventory();
  });
}

// Function to set up export and import buttons
function setupExportImport() {
  const exportBtn = document.getElementById('export-btn');
  const importBtn = document.getElementById('import-btn');
  
  exportBtn.addEventListener('click', exportInventory);
  importBtn.addEventListener('click', importInventory);
  
  // Set up modal event listeners
  const closeBtn = document.querySelector('.close-modal');
  const confirmBtn = document.getElementById('confirm-import');
  const cancelBtn = document.getElementById('cancel-import');
  
  closeBtn.addEventListener('click', closeModal);
  confirmBtn.addEventListener('click', confirmImport);
  cancelBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('import-modal');
    if (event.target === modal) {
      closeModal();
    }
  });
}

// Add reset button to the UI
function addResetButton() {
  const headerButtons = document.querySelector('.header-buttons');
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Inventory';
  resetButton.className = 'action-btn reset-btn';
  resetButton.addEventListener('click', resetInventory);
  headerButtons.appendChild(resetButton);
}

// Function to add a new part to the inventory
function addNewPart(name, id, category, quantity) {
  // Check if ID already exists
  if (inventory.some(part => part.id === id)) {
    throw new Error('A part with this ID already exists');
  }
  
  // Create new part object
  const newPart = {
    id: id,
    name: name,
    category: category,
    quantity: parseInt(quantity, 10) || 0
  };
  
  // Add to inventory
  inventory.push(newPart);
  saveInventory();
  renderInventory();
}

// Function to handle the add part form submission
function handleAddPartSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('part-name');
  const idInput = document.getElementById('part-id');
  const categoryInput = document.getElementById('part-category');
  const quantityInput = document.getElementById('initial-quantity');
  
  try {
    addNewPart(
      nameInput.value.trim(),
      idInput.value.trim().toLowerCase(),
      categoryInput.value,
      quantityInput.value
    );
    
    // Close modal and reset form
    closeAddPartModal();
    event.target.reset();
    
    // Switch to the new part's category tab
    const categoryTab = document.querySelector(`.tab-btn[data-category="${categoryInput.value}"]`);
    if (categoryTab) {
      categoryTab.click();
    }
    
    alert('New part added successfully!');
  } catch (error) {
    alert(`Error adding part: ${error.message}`);
  }
}

// Function to show the add part modal
function showAddPartModal() {
  const modal = document.getElementById('add-part-modal');
  modal.style.display = 'block';
}

// Function to close the add part modal
function closeAddPartModal() {
  const modal = document.getElementById('add-part-modal');
  modal.style.display = 'none';
  document.getElementById('add-part-form').reset();
}

// Function to set up the add part functionality
function setupAddPart() {
  const addPartBtn = document.getElementById('add-part-btn');
  const addPartForm = document.getElementById('add-part-form');
  const closeBtn = document.querySelector('#add-part-modal .close-modal');
  const cancelBtn = document.getElementById('cancel-add-part');
  
  addPartBtn.addEventListener('click', showAddPartModal);
  addPartForm.addEventListener('submit', handleAddPartSubmit);
  closeBtn.addEventListener('click', closeAddPartModal);
  cancelBtn.addEventListener('click', closeAddPartModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('add-part-modal');
    if (event.target === modal) {
      closeAddPartModal();
    }
  });
  
  // Auto-generate ID from name
  const nameInput = document.getElementById('part-name');
  const idInput = document.getElementById('part-id');
  
  nameInput.addEventListener('input', () => {
    if (!idInput.value) { // Only update if user hasn't manually entered an ID
      idInput.value = nameInput.value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();
    }
  });
}

// Function to update saves dropdown
function updateSavesDropdown() {
  const dropdown = document.getElementById('saves-dropdown');
  dropdown.innerHTML = '';
  
  Object.keys(saves).forEach(saveName => {
    const option = document.createElement('option');
    option.value = saveName;
    option.textContent = saveName;
    if (saveName === currentSaveName) {
      option.selected = true;
    }
    dropdown.appendChild(option);
  });
}

// Function to switch active save
function switchSave(saveName) {
  if (!saves[saveName]) return;
  
  // Save current inventory to current save
  saves[currentSaveName] = inventory;
  localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
  
  // Switch to new save
  currentSaveName = saveName;
  localStorage.setItem('currentSaveName', currentSaveName);
  inventory = [...saves[saveName]];
  
  renderInventory();
}

// Function to create new save
function createNewSave(saveName) {
  if (saves[saveName]) {
    alert('A save with this name already exists!');
    return false;
  }
  
  saves[saveName] = [...defaultParts];
  localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
  updateSavesDropdown();
  switchSave(saveName);
  return true;
}

// Function to rename current save
function renameSave(newName) {
  if (saves[newName]) {
    alert('A save with this name already exists!');
    return false;
  }
  
  saves[newName] = saves[currentSaveName];
  delete saves[currentSaveName];
  localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
  currentSaveName = newName;
  localStorage.setItem('currentSaveName', currentSaveName);
  updateSavesDropdown();
  return true;
}

// Function to delete current save
function deleteSave(saveName) {
  if (Object.keys(saves).length === 1) {
    alert('Cannot delete the last save!');
    return false;
  }
  
  delete saves[saveName];
  localStorage.setItem('satisfactorySaves', JSON.stringify(saves));
  
  // Switch to first available save
  currentSaveName = Object.keys(saves)[0];
  localStorage.setItem('currentSaveName', currentSaveName);
  inventory = [...saves[currentSaveName]];
  
  updateSavesDropdown();
  renderInventory();
  return true;
}

// Function to set up save management
function setupSaveManagement() {
  const savesDropdown = document.getElementById('saves-dropdown');
  const newSaveBtn = document.getElementById('new-save-btn');
  const renameSaveBtn = document.getElementById('rename-save-btn');
  const deleteSaveBtn = document.getElementById('delete-save-btn');
  
  // Set up save switching
  savesDropdown.addEventListener('change', (e) => {
    switchSave(e.target.value);
  });
  
  // Set up new save modal
  const newSaveModal = document.getElementById('new-save-modal');
  const newSaveForm = document.getElementById('new-save-form');
  const cancelNewSave = document.getElementById('cancel-new-save');
  const closeNewSave = newSaveModal.querySelector('.close-modal');
  
  newSaveBtn.addEventListener('click', () => {
    newSaveModal.style.display = 'block';
  });
  
  newSaveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const saveName = document.getElementById('save-name').value.trim();
    if (createNewSave(saveName)) {
      newSaveModal.style.display = 'none';
      newSaveForm.reset();
    }
  });
  
  [cancelNewSave, closeNewSave].forEach(el => {
    el.addEventListener('click', () => {
      newSaveModal.style.display = 'none';
      newSaveForm.reset();
    });
  });
  
  // Set up rename save modal
  const renameSaveModal = document.getElementById('rename-save-modal');
  const renameSaveForm = document.getElementById('rename-save-form');
  const cancelRenameSave = document.getElementById('cancel-rename-save');
  const closeRenameSave = renameSaveModal.querySelector('.close-modal');
  
  renameSaveBtn.addEventListener('click', () => {
    renameSaveModal.style.display = 'block';
  });
  
  renameSaveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = document.getElementById('new-save-name').value.trim();
    if (renameSave(newName)) {
      renameSaveModal.style.display = 'none';
      renameSaveForm.reset();
    }
  });
  
  [cancelRenameSave, closeRenameSave].forEach(el => {
    el.addEventListener('click', () => {
      renameSaveModal.style.display = 'none';
      renameSaveForm.reset();
    });
  });
  
  // Set up delete save
  deleteSaveBtn.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete the save "${currentSaveName}"?`)) {
      deleteSave(currentSaveName);
    }
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === newSaveModal) {
      newSaveModal.style.display = 'none';
      newSaveForm.reset();
    }
    if (event.target === renameSaveModal) {
      renameSaveModal.style.display = 'none';
      renameSaveForm.reset();
    }
  });
}

// Function to set up category tabs
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update current category
      currentCategory = tab.dataset.category;
      renderInventory();
    });
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderInventory();
  addResetButton();
  setupFilterButtons();
  setupSearchInput();
  setupExportImport();
  setupAddPart();
  setupSaveManagement();
  setupCategoryTabs();
  updateSavesDropdown();
}); 