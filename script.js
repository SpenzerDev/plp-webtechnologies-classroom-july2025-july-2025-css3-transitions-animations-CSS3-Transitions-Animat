 let globalCounter = 0;
        let animationCount = 0;
        let isLoaderActive = false;
        
        /**
         * PART 2 - FUNCTION 1: Calculate Area
         */
        function calculateArea(width, height) {
            const area = width * height; 
            const result = `${width} x ${height} = ${area}`; 
            
            document.getElementById('areaResult').textContent = result;
            
            return area; 
        }
        
        /*
         * PART 2 - FUNCTION 2: Scope Demonstration
    
         */
        function scopeDemo() {
            const localMessage = "I'm a local variable!"; 
            globalCounter++; 
            
            document.getElementById('globalCounter').textContent = globalCounter;
            document.getElementById('scopeMessage').textContent = localMessage;
            
        
            return `Global: ${globalCounter}, Local: ${localMessage}`;
        }
        
        /**
         * PART 2 - FUNCTION 3: Greet User
         */
        function greetUser(name = 'Guest') { 
            const timeOfDay = getTimeOfDay(); 
            const greeting = `Hello ${name}! Good ${timeOfDay}!`; 
            
            document.getElementById('greeting').textContent = greeting;
            
            return greeting; // 
        }
        
    
        function getTimeOfDay() {
            const hour = new Date().getHours(); // Local variable
            
            if (hour < 12) return 'morning';
            if (hour < 18) return 'afternoon';
            return 'evening';
        }

        
        /**
         * PART 3 - FUNCTION 1: Spin Box Animation
         */
        function spinBox() {
            const box = document.getElementById('box1');
            box.classList.add('js-spin'); 
            
            animationCount++;
            updateAnimationCounter();
            
            setTimeout(() => {
                box.classList.remove('js-spin');
            }, 1000);
        }
        
        /**
         * PART 3 - FUNCTION 2: Toggle Glow Effect
         */
        function glowBox() {
            const box = document.getElementById('box2');
            
            if (box.classList.contains('js-glow')) {
                box.classList.remove('js-glow'); 
            } else {
                box.classList.add('js-glow'); 
                animationCount++;
                updateAnimationCounter();
            }
        }
        
        /**
         * PART 3 - FUNCTION 3: Show Loading Animation
         */
        function showLoader() {
            const loader = document.getElementById('loader');
            
            if (!isLoaderActive) {
                loader.classList.add('active'); 
                isLoaderActive = true;
                
            
                setTimeout(() => {
                    loader.classList.remove('active');
                    isLoaderActive = false;
                }, 3000);
                
                animationCount++;
                updateAnimationCounter();
            }
        }
        
        
        function updateAnimationCounter() {
            document.getElementById('counter').textContent = animationCount;
        }
        
        /**
         * RESET FUNCTION: Reset All States
         */
        function resetAll() {
            document.getElementById('box1').className = 'interactive-box';
            document.getElementById('box2').className = 'interactive-box';
            document.getElementById('loader').classList.remove('active');
            
            animationCount = 0;
            globalCounter = 0;
            isLoaderActive = false;
            updateAnimationCounter();
            document.getElementById('globalCounter').textContent = '0';
            document.getElementById('areaResult').textContent = 'Click to calculate';
            document.getElementById('scopeMessage').textContent = 'Click to see scope';
            document.getElementById('greeting').textContent = 'Click to greet';
        }