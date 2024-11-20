document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const numberOfDoors = 24;

    // Array of Christmas-themed image URLs
    const images = [
        'https://source.unsplash.com/300x300/?christmas,gift',
        'https://source.unsplash.com/300x300/?santa',
        'https://source.unsplash.com/300x300/?christmas,tree',
        'https://source.unsplash.com/300x300/?snow',
        'https://source.unsplash.com/300x300/?reindeer',
        'https://source.unsplash.com/300x300/?christmas,cookies',
        'https://source.unsplash.com/300x300/?christmas,lights',
        'https://source.unsplash.com/300x300/?christmas,ornament',
        'https://source.unsplash.com/300x300/?christmas,star',
        'https://source.unsplash.com/300x300/?christmas,candle',
        'https://source.unsplash.com/300x300/?christmas,bells',
        'https://source.unsplash.com/300x300/?christmas,wreath',
        'https://source.unsplash.com/300x300/?christmas,candy',
        'https://source.unsplash.com/300x300/?christmas,fireplace',
        'https://source.unsplash.com/300x300/?christmas,stockings',
        'https://source.unsplash.com/300x300/?christmas,presents',
        'https://source.unsplash.com/300x300/?christmas,angel',
        'https://source.unsplash.com/300x300/?christmas,ribbon',
        'https://source.unsplash.com/300x300/?christmas,snowman',
        'https://source.unsplash.com/300x300/?christmas,gingerbread',
        'https://source.unsplash.com/300x300/?christmas,mistletoe',
        'https://source.unsplash.com/300x300/?christmas,sleigh',
        'https://source.unsplash.com/300x300/?christmas,nutcracker',
        'https://source.unsplash.com/300x300/?christmas,nativity'
    ];

    // Create doors
    for (let i = 1; i <= numberOfDoors; i++) {
        const door = document.createElement('div');
        door.className = 'door';
        
        const doorFront = document.createElement('div');
        doorFront.className = 'door-front';
        doorFront.textContent = i;

        const doorBack = document.createElement('div');
        doorBack.className = 'door-back';
        
        const img = document.createElement('img');
        img.src = images[i - 1];
        img.alt = `Day ${i}`;
        
        doorBack.appendChild(img);
        door.appendChild(doorBack);
        door.appendChild(doorFront);
        
        // Add click event
        door.addEventListener('click', () => {
            // Only allow opening if it's the current day or past days
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth();
            
            // Only work in December and only for current or past days
            if (currentMonth === 11 && i <= currentDay) {
                door.classList.toggle('open');
            } else if (currentMonth !== 11) {
                alert('Please wait until December!');
            } else {
                alert('You cannot open future days!');
            } 
        });  
        
        calendarContainer.appendChild(door); 
    } 
});