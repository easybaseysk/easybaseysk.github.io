document.addEventListener('DOMContentLoaded', () => {
    // Function to create a data block
    function createDataBlock(container, className, textContent, color) {
        const block = document.createElement('div');
        block.className = `data-block ${className}`;
        block.textContent = textContent;
        block.style.backgroundColor = color;
        container.appendChild(block);
        return block;
    }

    // RAID 0 Animation
    const raid0AnimationContainer = document.querySelector('.raid-0-animation');
    if (raid0AnimationContainer) {
        const dataBlocksContainer = raid0AnimationContainer.querySelector('.data-blocks-container');

        function animateRaid0() {
            dataBlocksContainer.innerHTML = ''; // Clear previous blocks

            const blockA = createDataBlock(dataBlocksContainer, 'block-a', 'A', '#2196F3');
            const blockB = createDataBlock(dataBlocksContainer, 'block-b', 'B', '#FFC107');
            const blockC = createDataBlock(dataBlocksContainer, 'block-c', 'C', '#9C27B0');

            anime.timeline({
                easing: 'easeOutQuad',
                duration: 800,
                autoplay: true,
                loop: false
            })
            .add({
                translateY: '20px',
                targets: [blockA, blockB, blockC],
                opacity: [0, 1],
                top: [0, '60px'],
                delay: anime.stagger(200) // Delay for each block
            })
            .add({
                translateY: '20px',
                targets: blockA,
                translateX: '-122.5px',
                offset: '-=400' // Start this animation 400ms before the previous one ends
            })
            .add({
                translateY: '20px',
                targets: blockB,
                translateX: '-20px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockC,
                translateX: '85px',
                offset: '-=400'
            });
        }

        animateRaid0();
        // Optional: Re-run animation on click or intersection observer
        // raid0AnimationContainer.addEventListener('click', animateRaid0);
    }

    // RAID 1 Animation
    const raid1AnimationContainer = document.querySelector('.raid-1-animation');
    if (raid1AnimationContainer) {
        const dataBlocksContainer = raid1AnimationContainer.querySelector('.data-blocks-container');

        function animateRaid1() {
            dataBlocksContainer.innerHTML = ''; // Clear previous blocks

            const blockA = createDataBlock(dataBlocksContainer, 'block-a', 'A', '#2196F3');
            const blockACopy = createDataBlock(dataBlocksContainer, 'block-a-copy', 'A\'', '#FFC107');

            anime.timeline({
                easing: 'easeOutQuad',
                duration: 800,
                autoplay: true,
                loop: false
            })
            .add({
                translateY: '20px',
                targets: [blockA, blockACopy],
                opacity: [0, 1],
                top: [0, '60px'],
                delay: anime.stagger(200)
            })
            .add({
                translateY: '20px',
                targets: blockA,
                 translateX: '-72.5px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockACopy,
                 translateX: '32.5px',
                offset: '-=400'
            });
        }

        animateRaid1();
        // Optional: Re-run animation on click or intersection observer
        // raid1AnimationContainer.addEventListener('click', animateRaid1);
    }

    // RAID 5 Animation
    const raid5AnimationContainer = document.querySelector('.raid-5-animation');
    if (raid5AnimationContainer) {
        const dataBlocksContainer = raid5AnimationContainer.querySelector('.data-blocks-container');

        function animateRaid5() {
            dataBlocksContainer.innerHTML = ''; // Clear previous blocks

            const blockA = createDataBlock(dataBlocksContainer, 'block-a', 'A', '#2196F3');
            const blockB = createDataBlock(dataBlocksContainer, 'block-b', 'B', '#FFC107');
            const blockC = createDataBlock(dataBlocksContainer, 'block-c', 'C', '#9C27B0');
            const blockP = createDataBlock(dataBlocksContainer, 'block-p', 'P', '#FF5722'); // Parity block

            anime.timeline({
                easing: 'easeOutQuad',
                duration: 800,
                autoplay: true,
                loop: false
            })
            .add({
                translateY: '20px',
                targets: [blockA, blockB, blockC, blockP],
                opacity: [0, 1],
                top: [0, '60px'],
                delay: anime.stagger(200)
            })
            .add({
                translateY: '20px',
                targets: blockA,
                 translateX: '-175px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockB,
                 translateX: '-71.5px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockC,
                 translateX: '31.5px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockP,
                 translateX: '135px',
                offset: '-=400'
            });
        }

        animateRaid5();
    }

    // RAID 10 Animation
    const raid10AnimationContainer = document.querySelector('.raid-10-animation');
    if (raid10AnimationContainer) {
        const dataBlocksContainer = raid10AnimationContainer.querySelector('.data-blocks-container');

        function animateRaid10() {
            dataBlocksContainer.innerHTML = ''; // Clear previous blocks

            const blockA = createDataBlock(dataBlocksContainer, 'block-a', 'A', '#2196F3');
            const blockACopy = createDataBlock(dataBlocksContainer, 'block-a-copy', 'A\'', '#FFC107');
            const blockB = createDataBlock(dataBlocksContainer, 'block-b', 'B', '#9C27B0');
            const blockBCopy = createDataBlock(dataBlocksContainer, 'block-b-copy', 'B\'', '#FF5722');

            anime.timeline({
                easing: 'easeOutQuad',
                duration: 800,
                autoplay: true,
                loop: false
            })
            .add({
                translateY: '20px',
                targets: [blockA, blockACopy, blockB, blockBCopy],
                opacity: [0, 1],
                top: [0, '60px'],
                delay: anime.stagger(200)
            })
            .add({
                translateY: '20px',
                targets: blockA,
                 translateX: '-175px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockACopy,
                translateX: '-71.5px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockB,
                translateX: '31.5px',
                offset: '-=400'
            })
            .add({
                translateY: '20px',
                targets: blockBCopy,
                translateX: '135px',
                offset: '-=400'
            });
        }

        animateRaid10();
    }
});