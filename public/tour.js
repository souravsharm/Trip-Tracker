/**
 * Interactive Demo Tour System for Family Travel Tracker
 * Guides new users through the application features
 */

class DemoTour {
  constructor() {
    this.currentStep = 0;
    this.isActive = false;
    this.steps = [];
    this.overlay = null;
    this.tooltip = null;
    this.highlight = null;
    this.progress = null;
    this.welcomeModal = null;

    this.init();
  }

  init() {
    // Check if user has completed tour before
    const tourCompleted = localStorage.getItem('familyTravelTourCompleted');
    if (!tourCompleted) {
      this.showWelcomeModal();
    } else {
      this.showTourStartButton();
    }

    this.createTourElements();
    this.setupSteps();
  }

  createTourElements() {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'tour-overlay';
    document.body.appendChild(this.overlay);

    // Create highlight element
    this.highlight = document.createElement('div');
    this.highlight.className = 'tour-highlight';
    document.body.appendChild(this.highlight);

    // Create tooltip
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'tour-tooltip';
    document.body.appendChild(this.tooltip);

    // Create progress indicator
    this.progress = document.createElement('div');
    this.progress.className = 'tour-progress';
    document.body.appendChild(this.progress);
  }

  setupSteps() {
    this.steps = [
      {
        target: '.tab-view',
        title: '👥 Welcome to Travel Tracker!',
        content: 'This is where you select which member you are. Click "Add new person" to get started if you haven\'t added yourself yet.',
        position: 'bottom',
        action: 'highlight'
      },
      {
        target: 'label[for="tab"]',
        title: '➕ Add Yourself as a Member',
        content: 'Click this "Add new person" button to add yourself as a new member. You\'ll be able to choose your name and favorite color!',
        position: 'bottom',
        action: 'click',
        waitForNext: true
      },
      {
        target: 'form[action="/add"]',
        title: '🌍 Add Countries You\'ve Visited',
        content: 'Once you\'re added, use this form to add countries you\'ve visited. Start typing a country name and the system will find it for you!',
        position: 'top',
        action: 'highlight'
      },
      {
        target: '#country',
        title: '🔍 Smart Country Search',
        content: 'Type any country name here. The system supports partial matches - try "United States", "US", or even "America"!',
        position: 'top',
        action: 'focus'
      },
      {
        target: 'form[action="/add"] button[type="submit"]',
        title: '🚀 Add Your Country',
        content: 'Click this button to add the country to your visited list. It will appear on the world map in your chosen color!',
        position: 'top',
        action: 'highlight'
      },
      {
        target: '#map',
        title: '🗺️ World Map',
        content: 'This is the world map where all visited countries are highlighted. Countries you\'ve visited will be shown in your chosen color.',
        position: 'top',
        action: 'highlight'
      },
      {
        target: 'button[onclick*="toggleCountryList"]',
        title: '📋 Available Countries List',
        content: 'Click here to see all 50 countries available in our database. Due to free tier limitations, we can only support the most popular destinations.',
        position: 'top',
        action: 'highlight'
      },
      {
        target: 'body',
        title: '🎯 Your Travel Dashboard',
        content: 'This is your personal travel dashboard. You can see all visited countries, switch between members, and track your adventures! If a country isn\'t found, check the available countries list.',
        position: 'left',
        action: 'highlight'
      }
    ];
  }

  showWelcomeModal() {
    this.welcomeModal = document.createElement('div');
    this.welcomeModal.className = 'tour-welcome-modal';
    this.welcomeModal.innerHTML = `
      <div class="tour-welcome-title">🎉 Welcome to Your Travel Adventure!</div>
      <div class="tour-welcome-content">
        <p>Ready to start tracking your travel adventures around the world?</p>
        <p>This quick interactive tour will show you how to:</p>
        <ul style="text-align: left; margin: 15px 0;">
          <li>➕ Add yourself as a member</li>
          <li>🌍 Add countries you've visited</li>
          <li>🗺️ See your travels on the world map</li>
          <li>👥 Switch between members</li>
        </ul>
        <p style="margin-top: 15px; font-style: italic;">Takes less than 2 minutes!</p>
      </div>
      <div class="tour-welcome-buttons">
        <button class="tour-btn tour-btn-primary" onclick="tour.start()">🚀 Start Tour</button>
        <button class="tour-btn tour-btn-secondary" onclick="tour.skip()">Skip Tour</button>
      </div>
      <a href="#" class="tour-skip-link" onclick="tour.skip()">Don't show again</a>
    `;
    document.body.appendChild(this.welcomeModal);
  }

  showTourStartButton() {
    const startBtn = document.createElement('button');
    startBtn.className = 'tour-start-btn';
    startBtn.innerHTML = '🎯';
    startBtn.title = 'Take a quick tour';
    startBtn.onclick = () => this.start();
    document.body.appendChild(startBtn);
  }

  start() {
    if (this.welcomeModal) {
      this.welcomeModal.remove();
    }

    this.isActive = true;
    this.currentStep = 0;
    this.overlay.style.display = 'block';
    this.showStep();
  }

  skip() {
    localStorage.setItem('familyTravelTourCompleted', 'true');
    if (this.welcomeModal) {
      this.welcomeModal.remove();
    }
    this.showTourStartButton();
  }

  showStep() {
    const step = this.steps[this.currentStep];
    const targetElement = document.querySelector(step.target);

    if (!targetElement) {
      console.warn(`Tour target not found: ${step.target}`);
      // Try to find alternative selectors
      const altSelectors = this.getAlternativeSelectors(step.target);
      for (const altSelector of altSelectors) {
        const altElement = document.querySelector(altSelector);
        if (altElement) {
          console.log(`Found alternative target: ${altSelector}`);
          // Update the step target for future use
          step.target = altSelector;
          return this.showStep();
        }
      }
      this.next();
      return;
    }

    // Wait for element to be visible
    if (targetElement.offsetWidth === 0 && targetElement.offsetHeight === 0) {
      setTimeout(() => this.showStep(), 100);
      return;
    }

    // Position highlight
    const rect = targetElement.getBoundingClientRect();
    this.highlight.style.top = rect.top - 5 + 'px';
    this.highlight.style.left = rect.left - 5 + 'px';
    this.highlight.style.width = rect.width + 10 + 'px';
    this.highlight.style.height = rect.height + 10 + 'px';

    // Position tooltip
    this.positionTooltip(step, rect);

    // Show tooltip content
    this.tooltip.innerHTML = `
      <div class="tour-title">${step.title}</div>
      <div class="tour-content">${step.content}</div>
      <div class="tour-buttons">
        ${this.currentStep > 0 ? '<button class="tour-btn tour-btn-secondary" onclick="tour.previous()">← Previous</button>' : '<div></div>'}
        <button class="tour-btn tour-btn-primary" onclick="tour.next()">${this.currentStep === this.steps.length - 1 ? '🎉 Finish' : 'Next →'}</button>
      </div>
    `;

    // Show progress
    this.updateProgress();

    // Handle special actions
    if (step.action === 'click') {
      targetElement.style.cursor = 'pointer';
      targetElement.addEventListener('click', () => this.next(), { once: true });
    } else if (step.action === 'focus') {
      setTimeout(() => {
        if (targetElement.focus) {
          targetElement.focus();
        }
      }, 500);
    }
  }

  getAlternativeSelectors(originalSelector) {
    const alternatives = {
      '.tab-view': ['form[action="/user"]', '.tab-view'],
      '#tab': ['input[id="tab"]', 'label[for="tab"]', '#tab'],
      'form[action="/add"]': ['form[action="/add"]', 'form[method="post"]'],
      '#country': ['#country', 'input[name="country"]', 'input[type="text"]'],
      'form[action="/add"] button[type="submit"]': ['form[action="/add"] button', 'button[type="submit"]'],
      '#map': ['#map', '.ag-canvas', 'section.ag-canvas']
    };
    return alternatives[originalSelector] || [originalSelector];
  }

  positionTooltip(step, targetRect) {
    // First, set tooltip content to measure its size
    this.tooltip.style.visibility = 'hidden';
    this.tooltip.style.display = 'block';

    const tooltipRect = this.tooltip.getBoundingClientRect();
    let top, left;
    let position = step.position;

    // Try preferred position first
    switch (position) {
      case 'top':
        top = targetRect.top - tooltipRect.height - 10;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        this.tooltip.className = 'tour-tooltip top';
        break;
      case 'bottom':
        top = targetRect.bottom + 10;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        this.tooltip.className = 'tour-tooltip bottom';
        break;
      case 'left':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.left - tooltipRect.width - 10;
        this.tooltip.className = 'tour-tooltip left';
        break;
      case 'right':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.right + 10;
        this.tooltip.className = 'tour-tooltip right';
        break;
      default:
        top = targetRect.bottom + 10;
        left = targetRect.left;
        this.tooltip.className = 'tour-tooltip bottom';
    }

    // Adjust positioning to stay within viewport
    const margin = 10;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Horizontal adjustments
    if (left < margin) {
      left = margin;
    } else if (left + tooltipRect.width > viewportWidth - margin) {
      left = viewportWidth - tooltipRect.width - margin;
    }

    // Vertical adjustments
    if (top < margin) {
      // If tooltip would go off top, try bottom position
      if (position === 'top' && targetRect.bottom + tooltipRect.height + 10 < viewportHeight) {
        top = targetRect.bottom + 10;
        this.tooltip.className = 'tour-tooltip bottom';
      } else {
        top = margin;
      }
    } else if (top + tooltipRect.height > viewportHeight - margin) {
      // If tooltip would go off bottom, try top position
      if (position === 'bottom' && targetRect.top - tooltipRect.height - 10 > 0) {
        top = targetRect.top - tooltipRect.height - 10;
        this.tooltip.className = 'tour-tooltip top';
      } else {
        top = viewportHeight - tooltipRect.height - margin;
      }
    }

    // Center horizontally if tooltip is wider than target
    if (tooltipRect.width > targetRect.width && (position === 'top' || position === 'bottom')) {
      left = Math.max(margin, targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2));
      if (left + tooltipRect.width > viewportWidth - margin) {
        left = viewportWidth - tooltipRect.width - margin;
      }
    }

    this.tooltip.style.top = top + 'px';
    this.tooltip.style.left = left + 'px';
    this.tooltip.style.visibility = 'visible';
  }

  updateProgress() {
    this.progress.innerHTML = '';
    for (let i = 0; i < this.steps.length; i++) {
      const stepEl = document.createElement('div');
      stepEl.className = 'tour-step' + (i === this.currentStep ? ' active' : '');
      this.progress.appendChild(stepEl);
    }
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.showStep();
    } else {
      this.finish();
    }
  }

  previous() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showStep();
    }
  }

  finish() {
    this.isActive = false;
    this.overlay.style.display = 'none';
    this.highlight.style.display = 'none';
    this.tooltip.style.display = 'none';
    this.progress.style.display = 'none';

    // Mark tour as completed
    localStorage.setItem('familyTravelTourCompleted', 'true');

    // Show completion message
    this.showCompletionMessage();

    // Show the tour start button for future use
    this.showTourStartButton();
  }

  showCompletionMessage() {
    const completionModal = document.createElement('div');
    completionModal.className = 'tour-welcome-modal';
    completionModal.innerHTML = `
      <div class="tour-welcome-title">🎊 Tour Complete!</div>
      <div class="tour-welcome-content">
        <p>Great job! You now know how to use the Family Travel Tracker.</p>
        <p>💡 <strong>Pro Tip:</strong> Click the blue tour button (🎯) anytime to take the tour again!</p>
        <p>Ready to start adding your travel adventures?</p>
      </div>
      <div class="tour-welcome-buttons">
        <button class="tour-btn tour-btn-primary" onclick="this.parentElement.parentElement.remove()">🌍 Let's Travel!</button>
      </div>
    `;
    document.body.appendChild(completionModal);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (completionModal.parentElement) {
        completionModal.remove();
      }
    }, 5000);
  }

  restart() {
    this.currentStep = 0;
    this.start();
  }
}

// Initialize tour when page loads
let tour;
document.addEventListener('DOMContentLoaded', () => {
  tour = new DemoTour();
});

// Global functions for button onclick handlers
function startTour() {
  if (tour) tour.start();
}

function skipTour() {
  if (tour) tour.skip();
}

// Handle window resize for tooltip repositioning
window.addEventListener('resize', () => {
  if (tour && tour.isActive) {
    tour.showStep();
  }
});
