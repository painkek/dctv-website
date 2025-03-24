export const fadeIn = (direction, delay, transitionType = 'default') => {
      let initialY = 0;
      let initialX = 0;
      let initialScale = 1;
      let opacity = 1; // start at 1 for no fade
      let duration = 1.2; // duration for the animation
      let ease = [0.25, 0.25, 0.25, 0.75]; // Default ease
  
      switch (direction) {
          case 'up':
              initialY = 40;
              break;
          case 'down':
              initialY = -40;
              break;
          case 'left':
              initialX = 40;
              break;
          case 'right':
              initialX = -40;
              break;
          default:
              break;
      }
  
      switch (transitionType) {
          case 'slideFade':
              opacity = 0;
              break;
          case 'scaleFade':
              initialScale = 0.8;
              opacity = 0;
              break;
          case 'spring':
              ease = [0.17, 0.67, 0.83, 0.67];
              break;
          case 'easeInOutBack':
              ease = [0.68, -0.55, 0.265, 1.55];
              break;
          default:
              break;
      }
  
      return {
          hidden: {
              y: initialY,
              x: initialX,
              scale: initialScale,
              opacity: opacity,
          },
          show: {
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              transition: {
                  type: 'tween',
                  duration: duration,
                  delay: delay,
                  ease: ease,
              },
          },
      };
  };