const blueLineIllustration = document.getElementById('blueLineIllustration');

if (blueLineIllustration) {
  function setLine() {
    const section = document.querySelector('section');

    const browserWidth = innerWidth;

    const elementBegin = document.getElementById('elementBegin');

    const elementEnd = document.getElementById('elementEnd');

    //const sectionAfter = window.getComputedStyle(section, '::after');

    const elementBeginHeight = elementBegin.getBoundingClientRect().top;

    const elementEndHeight = elementEnd.getBoundingClientRect().top;

    section.style.setProperty('--sectionTop', elementBeginHeight + 20 + 'px');

    section.style.setProperty(
      '--sectionHeight',
      elementEndHeight - elementBeginHeight + 'px'
    );

    // if browser width wider than 77px
    // then extend horizontal blue line
    // slightly past circles
    if (browserWidth > 777) {
      section.style.setProperty('--sectionTop', elementBeginHeight - 10 + 'px');

      section.style.setProperty(
        '--sectionHeight',
        elementEndHeight + 50 + 'px'
      );
    }
  }

  setLine();

  addEventListener('resize', () => setLine());
}
