
class Developer {
  develop(feature) {
    return `developing ${feature}`;
  }

  peerReview(feature) {
    return `peer reviewing ${feature}`;
  }
}

class Designer {
  design(feature) {
    return `designing ${feature}`;
  }

  review(feature) {
    return `reviewing ${feature}`;
  }
}

class QA {
  test(feature) {
    return `testing ${feature}`;
  }

  release(feature) {
    return `releasing ${feature}`;
  }
}

// Here the team lead is our facade
// the develop feature function provides a simple abstraction for clients
// who want new features
class TeamLead {

  constructor(developer, designer, qa) {
    this.developer = developer;
    this.designer = designer;
    this.qa = qa;
  }

  developFeature(feature) {
    const featureProcess = [
      this.designer.design(feature),
      this.developer.develop(feature),
      this.developer.peerReview(feature),
      this.designer.review(feature),
      this.qa.test(feature),
      this.qa.release(feature),
    ];

    return featureProcess.reduce((steps, currentStep) => `${steps}\n${currentStep}`, '');
    
  }
}

module.exports = {
  TeamLead,
  Developer,
  Designer,
  QA,
}